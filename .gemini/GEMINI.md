# Gemini Project Instructions

This file contains project-specific instructions for me, Gemini.

## Description

This project is a UI library made of components ready to be copy-pasted and inteded to be used to create wireframes.

## Development process

If you need to know what to work on, please refer to WIREFRAME_UI_KIT.md. It includes a list of all components that should be built. Update the file whenever the status of a component changes.

After a component is build, double check that is fully independant. It can import the theme, other wireframe components, anything from react and react-native, and anything that is included in its folder. But nothing else, not even another wireframe component. Not even `WText`.

NEVER install a library. Always use react native primitives for the wireframe components.

ALWAYS run the type checking command and fix any error before marking a component as done.

## Code Practices

### Wireframe components

Wireframe components should be prefixed with "W", e.g. WText for a text component

Wireframe components should match the following template:

```typescript
type WComponentProps = { ... };

export const WComponent = ({ ... }: WComponentProps) => {
  return ( ... );
};

const styles = StyleSheet.create({ ... });
```

### Stories

For a comprehensive guide on how to create stories, please refer to the STORYBOOK_STORIES_GUIDE.md file.

### Others

Never create index.ts files for centralizing exports.
