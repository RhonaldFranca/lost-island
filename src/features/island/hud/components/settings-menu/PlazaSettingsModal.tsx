import React, { useState, useEffect } from "react";

import { Modal } from "react-bootstrap";
import { Button } from "components/ui/Button";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

import SoundOffIcon from "assets/icons/sound_off.png";

export const PlazaSettings: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"MAIN" | "MUTED_PLAYERS" | "KEYBINDS">(
    "MAIN"
  );

  const [mutedPlayers, setMutedPlayers] = useState<string[]>([]);

  useEffect(() => {
    setMutedPlayers(
      JSON.parse(localStorage.getItem("plaza-settings.mutedFarmIds") || "[]")
    );
  }, [isOpen]);

  const mmoLocalSettings = JSON.parse(
    localStorage.getItem("mmo_settings") ?? "{}"
  );

  const removeMutedPlayer = (farmId: string) => {
    const muted = mutedPlayers;
    const index = muted.indexOf(farmId);
    if (index > -1) {
      muted.splice(index, 1);
    }

    localStorage.setItem("plaza-settings.mutedFarmIds", JSON.stringify(muted));

    setMutedPlayers([...muted]);
  };

  const getTitle = () => {
    switch (step) {
      case "MAIN":
        return "Plaza Settings";
      case "MUTED_PLAYERS":
        return "Muted Players";
      case "KEYBINDS":
        return "Keybinds";
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <CloseButtonPanel title={getTitle()} onClose={onClose}>
        {step === "MAIN" && (
          <div className="flex flex-col items-start gap-2 max-h-96 overflow-y-auto scrollable">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-1">
                <img src={SoundOffIcon} className="h-8" />
                <p className="text-sm">Muted Players</p>
              </div>
              <p className="text-xs px-1">
                In case you have muted some players using the /mute command, you
                can see them here and unmute them if you want.
              </p>
              <Button onClick={() => setStep("MUTED_PLAYERS")}>
                Muted Players
              </Button>
            </div>
            {/* <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src={SUNNYSIDE.ui.cursor} className="h-8" />
                <p className="text-sm">Keybinds</p>
              </div>
              <p className="text-xs">
                Need to know what keybinds are available? Check them out here.
              </p>
              <Button onClick={() => setStep("KEYBINDS")}>Keybinds</Button>
            </div> */}
          </div>
        )}

        {step === "MUTED_PLAYERS" && (
          <div className="flex flex-col gap-2 mt-2 max-h-96">
            <div className="overflow-y-auto scrollable min-h-[5vh] px-2">
              {mutedPlayers.length > 0 ? (
                <>
                  {mutedPlayers.map((farmId: string) => (
                    <div
                      className="flex items-center justify-between w-full gap-2"
                      key={farmId}
                    >
                      <p className="text-sm">{farmId}</p>
                      <Button
                        onClick={() => removeMutedPlayer(farmId)}
                        className="w-1/3 text-xs"
                      >
                        Unmute
                      </Button>
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-sm text-center">
                  You have no muted players.
                </p>
              )}
            </div>

            <Button onClick={() => setStep("MAIN")}>Back</Button>
          </div>
        )}
      </CloseButtonPanel>
    </Modal>
  );
};
