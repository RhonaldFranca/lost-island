import React, { useContext, useState } from "react";
import { useActor } from "@xstate/react";

import { Context } from "features/game/GameProvider";
import { getKeys } from "features/game/types/craftables";
import {
  Decoration,
  POTION_HOUSE_DECORATIONS,
} from "features/game/types/decorations";
import { Button } from "components/ui/Button";
import { SplitScreenView } from "components/ui/SplitScreenView";
import { CraftingRequirements } from "components/ui/layouts/CraftingRequirements";
import { Box } from "components/ui/Box";
import { ITEM_DETAILS } from "features/game/types/images";
import {
  POTION_HOUSE_ITEMS,
  PotionHouseItem,
} from "features/game/types/collectibles";

export const PotionHouseItems: React.FC = () => {
  const [selected, setSelected] = useState<Decoration | PotionHouseItem>(
    POTION_HOUSE_DECORATIONS()["Giant Potato"]
  );
  const { gameService, shortcutItem } = useContext(Context);
  const [
    {
      context: { state },
    },
  ] = useActor(gameService);
  const inventory = state.inventory;

  const price = selected.sfl;

  const lessFunds = () => {
    if (!price) return false;

    return state.balance.lessThan(price.toString());
  };

  const lessIngredients = () =>
    getKeys(selected.ingredients).some((name) =>
      selected.ingredients[name]?.greaterThan(inventory[name] || 0)
    );

  const buy = () => {
    if (selected.name in POTION_HOUSE_ITEMS) {
      gameService.send("collectible.crafted", {
        name: selected.name,
      });
    } else {
      gameService.send("decoration.bought", {
        name: selected.name,
      });
    }

    shortcutItem(selected.name);
  };

  const Action = () => {
    if (selected.name in POTION_HOUSE_ITEMS && inventory[selected.name])
      return <span className="text-xxs text-center my-1">Already minted!</span>;

    return (
      <Button disabled={lessFunds() || lessIngredients()} onClick={buy}>
        Buy
      </Button>
    );
  };

  return (
    <SplitScreenView
      panel={
        <CraftingRequirements
          gameState={state}
          details={{
            item: selected.name,
          }}
          requirements={{
            resources: selected.ingredients,
            sfl: price,
          }}
          actionView={Action()}
        />
      }
      content={
        <>
          {Object.values({
            ...POTION_HOUSE_DECORATIONS(),
            ...POTION_HOUSE_ITEMS,
          }).map((item) => (
            <Box
              isSelected={selected.name === item.name}
              key={item.name}
              onClick={() => setSelected(item)}
              image={ITEM_DETAILS[item.name].image}
              count={inventory[item.name]}
            />
          ))}
        </>
      }
    />
  );
};
