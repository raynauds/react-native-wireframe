# Gemini Project Instructions

This file contains project-specific instructions for me, Gemini.

## Description

This project is a UI library made of components ready to be copy-pasted and inteded to be used to create wireframes.

## Development process

If you need to know what to work on, please refer to WIREFRAME_UI_KIT.md. It includes a list of all components that should be built. Update the file whenever the status of a component changes.

After a component is build, double check that is fully independant. It can import the theme, anything from react-native, and anything that is included in its folder. But nothing else, not even another wireframe component.

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

Every wireframe component should be in a folder of the same name, and should have a corresponding **.stories.tsx\* file showcasing its implementation. **.stories.tsx\* should use the `Story` component and show all variations of the component, similar to the following:

```typescript
export const WComponentStories = () => {
  return (
    <Story title="WComponent">
      <WComponent variant="foo">WComponent foo</WText>
      <WComponent variant="bar">WComponent bar</WText>
    </Story>
  );
};
```

All component stories should be added to _app/index.tsx_.

### Others

Never create index.ts files for centralizing exports.

## CLI

- `npx tsc`: check if there is any typescript error. Always run when you're finished with a task to check that there is no error.
