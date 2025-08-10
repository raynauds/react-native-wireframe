---
name: Task
about: Structured issue template for coding tasks in the monorepo
title: "[SCOPE] Short, clear task title"
labels: task
assignees: ""
---

## Context

Briefly describe the overall context for this task. Include any relevant background information so the developer can start without extra clarification.

## Affected Package(s)

Select or list the package(s) in the monorepo that this task affects:

- [ ] apps/app
- [ ] packages/component-library
- [ ] packages/cli
- [ ] Other: **\_\_\_**

## Key Files / Code References

List file paths, modules, or components that are directly involved.

Example:

- packages/component-library/src/components/DatePicker/index.tsx
- apps/app/src/screens/CalendarScreen.tsx

## Problem Statement

Describe the current behavior, limitation, or missing functionality.

## Goal & Success Criteria

Clearly define the expected outcome of this task.

Example:

- Range selection mode added to DatePicker
- Backward compatible with existing props
- Works on iOS and Android
- Passes all tests

## Constraints & Requirements

List any specific rules, coding standards, or limitations.

Example:

- Must pass ESLint and Prettier
- No new dependencies
- Target React Native 0.73+
- Keep bundle size increase under 5kb

## Implementation Notes

Add ideas, references, or similar code examples that might help.

Example:

- Could reuse logic from Calendar component
- See commit abc123 for related state management approach

## Testing & Verification Steps

Describe how the implementation will be tested and validated.

Example:

- Unit tests in **tests**/DatePicker.test.tsx
- Manual test on iOS and Android simulators
- Run pnpm test --filter component-library

## Deliverables

List what should be submitted when the task is complete.

Example:

- Updated DatePicker component
- New tests
- Updated documentation in README

## Automation Hints

Include any scripts or automation hints that can help set up the environment or perform repetitive tasks.

## Dependencies

List any dependencies or prerequisites that need to be installed or configured.

## Data Requirements

Specify any data requirements or sample data that might be needed for testing or development.

## API Endpoints

List the relevant endpoints and expected request/response formats if the task involves API interactions.

## Error Handling

Include guidelines on how errors should be handled and logged.

## Performance Considerations

Add any performance considerations, such as expected response times, memory usage, or other performance metrics.

## Security Considerations

Include any security considerations or best practices that need to be followed.

## Review Checklist

Provide a checklist for code review, including items like code style, test coverage, and documentation.

## Automated Testing

Specify any automated testing scripts or tools that should be used.

## Documentation Updates

Include a section for any documentation updates that need to be made.
