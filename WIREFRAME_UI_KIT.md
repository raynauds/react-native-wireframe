# React Native Wireframe UI Kit

## Purpose

This project aims to create a comprehensive, unstyled, and ready-to-use set of components for rapidly wireframing React Native applications. The components are designed to be easily copy-pasted into any project, providing the basic structure and functionality needed to build out user interfaces quickly.

## Getting Started

To use a component, simply copy its folder from `src/components` into your project. You can then import the component and use it in your code.

## Principles

- **Simplicity**: Components should be as simple as possible, with a minimal API.
- **Unstyled**: Components should be unstyled by default, allowing for easy customization.
- **Independent**: Components should be independent of each other, with no shared dependencies.
- **Ready-to-use**: Components should be ready to be copy-pasted into any project.

## Versioning

This project does not follow a strict versioning scheme. The components are designed to be used as-is, and any breaking changes will be clearly communicated.

## Contributing

To add a new component, please follow these steps:

1.  Create a new folder for the component in `src/components`.
2.  Create a `WComponent.tsx` file with the component's implementation.
3.  Create a `WComponent.stories.tsx` file with the component's stories.
4.  Add the component's stories to `src/app/index.tsx`.
5.  Update this file with the new component's information.

## Component Status Legend

-   `⚪️` To Do
-   `🟡` In Progress
-   `🟢` Done

## Component Roadmap

### Core Elements

| Component | Status | Description |
| :--- | :---: | :--- |
| `WText` | `🟢` | Displays text with different typography styles. |
| `WButton` | `🟢` | A standard pressable button. |
| `WImage` | `🟢` | A generic image component. |

### Forms & Inputs

| Component | Status | Description |
| :--- | :---: | :--- |
| `WTextInput` | `🟢` | A text input field with optional label and icons. |
| `WSwitch` | `🟢` | A simple boolean toggle switch. |
| `WCheckbox` | `🟢` | A standard checkbox component. |
| `WRadioButton` | `🟢` | A radio button, typically used in a group. |
| `WSlider` | `⚪️` | A slider for selecting a value from a range. |
| `WPicker` | `⚪️` | A dropdown/picker for selecting an item from a list. |
| `WDatePicker` | `⚪️` | A component to select a date. |

### Layout & Structure

| Component | Status | Description |
| :--- | :---: | :--- |
| `WCard` | `⚪️` | A styled container to group related content. |
| `WView` | `⚪️` | A basic container component, similar to `View`. |
| `WHeader` | `⚪️` | A screen header with title and optional actions. |
| `WFooter` | `⚪️` | A screen footer, often used for navigation. |
| `WSpacer` | `⚪️` | A flexible space component for layout. |
| `WDivider` | `⚪️` | A horizontal or vertical line to separate content. |

### Data Display

| Component | Status | Description |
| :--- | :---: | :--- |
| `WList` | `⚪️` | A component to render a list of items. |
| `WListItem` | `⚪️` | A single item for use within a `WList`. |
| `WAvatar` | `⚪️` | A circular image for user profiles. |
| `WBadge` | `⚪️` | A small badge for notifications or status indicators. |
| `WProgressBar` | `⚪️` | A bar to indicate the progress of an operation. |
| `WSpinner` | `⚪️` | An activity indicator for loading states. |

### Navigation & Overlays

| Component | Status | Description |
| :--- | :---: | :--- |
| `WTabs` | `⚪️` | A tab bar for switching between views. |
| `WModal` | `⚪️` | A modal dialog that overlays the screen. |
| `WToast` | `⚪️` | A temporary, non-intrusive notification message. |
| `WTooltip` | `⚪️` | A small pop-up that displays information on hover/press. |
| `WAccordion` | `⚪️` | A collapsible section of content. |

### Specialized Components

| Component | Status | Description |
| :--- | :---: | :--- |
| `WMap` | `⚪️` | A placeholder for a map view. |
| `WChart` | `⚪️` | A placeholder for a chart or graph. |
| `WCalendar` | `⚪️` | A basic calendar view for displaying dates. |
