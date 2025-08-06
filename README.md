# React Native Wireframe

This project is a UI library made of components ready to be copy-pasted and intended to be used to create wireframes. It provides a set of pre-built, independent React Native components designed for rapid prototyping and UI development.

## Features

- **Independent Components:** Each component is designed to be self-contained, minimizing dependencies and maximizing reusability.
- **Themable:** Components can import and utilize the project's theme for consistent styling.
- **Storybook Integration:** Each component comes with a Storybook story for easy visualization, testing, and documentation.

## Getting Started

To get started with the project and view the components in Storybook:

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run Storybook Web:**

    ```bash
    npm run storybook
    ```

    This will launch the Storybook server, and you can access the component showcase in your web browser.

3.  **Run Storybook Mobile:**

    ```bash
    npm run ios
    npm run android
    ```

    This will launch the app in Expo Go, and you can access the component showcase in your mobile emulator/device.

## Roadmap

In the future, this project will evolve into a monorepo encompassing:

- **Core Component Library:** The current set of wireframe components.
- **CLI for Component Management:** A command-line interface to streamline component creation and management.
- **Storybook-based Showcase Application:** A dedicated application for showcasing and interacting with the components.
