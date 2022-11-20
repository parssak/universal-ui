# Universal UI

Note: This project is very much a work in progress.

## What is this library?

A customizable Tailwind React UI library, utilizing data-attributes and TW3.2 functionality to have extrmeely flexible components.

## Tenets
1. All components should be easily themeable project-wide, and per-instance overrideable.
2. No components should ever require `!important` selectors of any kind to override any defaults.
3. Many different custom theme styles should be achieveable through the `tailwind.config.js` and the `UniversalUIThemeProvider`
4. Portalling is opt-in whenever possible, but always available
5. Refs are **always** forwarded
6. Composition is king
