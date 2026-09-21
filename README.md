# Quick Play

A small React Native app that lists a few free HTML5 games and plays them full screen.

Built with **Expo**, **React Native** and **TypeScript**. Games come from [HTML5games.com](https://html5games.com).

## Features

- Home screen with a "Pick of the day" game and a grid of other games
- Each game shows a picture, a category and a short description
- Tap any game to play it straight away in a full-screen webview
- Loading spinner, error message and a "Try again" button
- Works with screen readers and large text sizes

## Requirements

- [Node.js](https://nodejs.org) 20 or newer
- One of these to run the app:
  - **Phone:** the free [Expo Go](https://expo.dev/go) app
  - **Android:** Android Studio with an emulator
  - **iOS (Mac only):** Xcode with a simulator

## Run the app

```bash
git clone https://github.com/KomailShah05/Bede-Games-task.git
cd Bede-Games-task
npm install
npx expo start
```

Then:

- Press **`a`** to open it on the Android emulator
- Press **`i`** to open it on the iOS simulator
- Or scan the QR code with Expo Go (Android) or the Camera app (iPhone)

> The games load from the internet, so the device or emulator needs an internet connection.

## Run the tests

```bash
npm test
```

The tests cover the game data, the game loading logic, and accessibility of the main components.

## Project structure

```
src/
  app/                    Screens (Expo Router)
    index.tsx             Home screen
    game/[id].tsx         Full-screen game player
  components/             Shared UI (screen header)
  constants/theme.ts      Colours, spacing, radius, shadow
  features/games/
    data.ts               The list of games
    types.ts              Game type
    hooks/                Logic: which games to show, opening a game, loading state
    components/           UI: cards, grid, thumbnail, player, loading and error views
```

**How it's organised:** hooks hold the logic, components only receive props and render, and screens put the two together. To add a game, add one entry to `src/features/games/data.ts`.

## Troubleshooting

- **App shows old code or a "Refresh" error:** restart with a clean cache: `npx expo start -c`
- **Games or images don't load on Android:** open Chrome in the emulator and check it has internet
- **App icon and splash screen don't show in Expo Go:** they only appear in a native build: `npx expo run:android` or `npx expo run:ios`
