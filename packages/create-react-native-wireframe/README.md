# create-react-native-wireframe

A CLI tool to add wireframe components to your React Native project.

## Usage

```sh
npm create react-native-wireframe
```

This will copy the wireframe components and theme into a `wireframe` folder in your project.

## Requirements

- Node.js >= 14
- npm >= 7

## What it does

- Copies the `components`, `theme`, and `index.ts` from `react-native-wireframe` into your project under a new `wireframe` folder.
- Fails if the `wireframe` folder already exists.

## Troubleshooting

If you see an error about the folder already existing, delete the `wireframe` folder and try again.

## Development

- To test locally, run:
  ```sh
  npm run cli
  ```
