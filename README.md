<h1 align="center">Sunflower Land</h1>

![Banner: Sunflower Land](https://user-images.githubusercontent.com/11745561/150654347-cb1abc19-28d6-4714-b21a-eafffaa59785.png)

Looking to help out? Read our [contributing docs](https://github.com/#/#/blob/main/docs/CONTRIBUTING.md)

By contributing you agree to our [terms and services](https://docs.#.com/support/terms-of-service)

# Website | Official Links

### Website

[https://#.com/](https://#.com/)

### Start Farming | Play

[https://#.com/play](https://#.com/play)

### Stuck somewhere ?

Read the official docs/ litepaper here: [docs.#.com](https://docs.#.com/)

### How to play ?

Follow the official guide here: [How to Play?](https://docs.#.com/getting-started/how-to-play)

### Need Help ?

First Read the FAQ's here: [FAQ's](https://#.com/support/solutions/101000195014)

Still not satisfied? Submit a support ticket here: [Submit a ticket](https://sunflowerland.freshdesk.com/support/tickets/new)

### ‼️ Have a suggestion/proposal/cool idea ?

Please add a new idea for the community to vote on, here: [SFL Idea Portal](https://#.ideas.aha.io/)

# Getting Started

Firstly, you will need to clone the repo locally. Once you have it ready navigate into the directory and run the following commands:

1. `npm install --global yarn` (if you don't have yarn installed)
2. `yarn install`
3. `cp .env.sample .env`
4. `yarn dev`

# Testing

`yarn test`

This runs a range of business logic unit tests in the repo.

The plan is to use react testing library to test some of the core user interactions as well.

# Architecture

We use `xstate` to control the manage the user and session using a State Machine approach. This prevents our application from getting into invalid states and handles the use cases of switching accounts, networks, etc.

The primary states include:

- Connecting (connecting to MetaMask)
- Ready (Waiting for user input - Start)
- Signing (Sign a message to verify the account on the API)
- Authorising (Checking if a user has an account/farm)
- Unauthorised (when one of the above state transitions fails)
- Authorised (Play the game!)

# Vite

The app uses vite for bundling and development purposes. You can set build specific configuration in `vite.config.ts`

# Tailwind

Tailwind is our CSS tool of choice. It enables us to:

- Use utility based classes
- Consistent theming (view `tailwind.config.js`)
- Perform CSS processing to minimize build sizes

# ERC1155 Metadata

Metadata is generated from markdown files.

Prerequisites:

`yarn global add ts-node`

To add new item:

1. Create `{SFT id}.md` file in `metadata\markdown` folder
2. Add `{SFT id}.png(gif)` file to `public\erc1155\images` folder
3. Run `yarn metadata`

# 🗃️ Directory Organization

- Assets: Images, Music, Branding and other Media
- Components: Reusable react components
- Lib: Utils, classes, machines and more.
- Features: Core domain concepts that have their own use cases/boundaries.
  Each feature (e.g. crops) has a similar nested structure of components, graphql & lib that are specific only to that feature.
