# How to Create Storybook Stories

This guide explains how to create `.stories.tsx` files for your components.

## File Structure

For each component, create a corresponding `.stories.tsx` file in the same directory.

Example:

```
src/components/WButton/
├── WButton.tsx
└── WButton.stories.tsx
```

## Story Format

Each `.stories.tsx` file should follow this general structure:

1.  **Import necessary modules:**

    - `Meta` and `StoryObj` from `@storybook/react`.
    - The component you are creating stories for.
    - Any other necessary components (e.g., `View` from `react-native`).

2.  **Define Metadata (`meta`):**

    - Create a `meta` object of type `Meta<typeof YourComponent>`.
    - This object configures the component's stories.
    - `title`: The path and name of the component in the Storybook sidebar (e.g., 'Example/Button').
    - `component`: The component itself.
    - `decorators` (optional): An array of functions that wrap your stories to add extra layout or context.
    - `args` (optional): Default props that will be applied to all stories for this component.

3.  **Default Export:**

    - Export the `meta` object as the default export of the file.

4.  **Define Story Type:**

    - Create a `Story` type for better type-checking: `type Story = StoryObj<typeof meta>;`.

5.  **Create Stories:**
    - Export named constants for each story you want to display.
    - Each story is an object of type `Story`.
    - Use the `args` property within each story object to define the specific props for that particular state of the component.

## Example Template

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { YourComponent } from "./YourComponent";

// The metadata configuration for the component's stories
const meta = {
  title: "YourComponent",
  component: YourComponent,
  decorators: [
    // Optional: A decorator to wrap the story in a View with some styles
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    // Default arguments for all stories
    // e.g., onPress: () => console.log('Button pressed'),
  },
  argTypes: {
    // Arguments that should have a specific control
    // e.g. variant: { control: "radio", options: ["filled", "outlined", "text"] }
  },
} satisfies Meta<typeof YourComponent>;

// Default export is required
export default meta;

// Define the Story type
type Story = StoryObj<typeof meta>;

// Create individual stories
export const Primary: Story = {
  args: {
    // Props for the Primary story
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    // Props for the Secondary story
    variant: "secondary",
    label: "Secondary Button",
  },
};
```
