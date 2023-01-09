# Universal UI

Note: This project is very much a work in progress.

See the docs here: https://universal-ui.vercel.app

## What is this library?

A customizable Tailwind React UI library, utilizing data-attributes and TW3.2 functionality to have extremely flexible components.

## Tenets
1. All components should be easily themeable project-wide, and per-instance overrideable.
2. No components should ever require `!important` selectors of any kind to override any defaults.
3. Many different custom theme styles should be achieveable through the `tailwind.config.js` and the `UniversalUIThemeProvider`
4. Refs are **always** forwarded
5. Composition is king
6. Full light/dark mode support, with ability to override defaults

## Getting Started
This library assumes your project is configured with Tailwind 3.2+. 

First install the library with your package manager of choice:

```bash
npm install @universal-ui/react
```

Then, import the `UniversalUIThemeProvider` and wrap your app in it:

```jsx
import { UniversalUIThemeProvider } from '@universal-ui/react';

function App() {
  return (
    <UniversalUIThemeProvider>
      <YourApp />
    </UniversalUIThemeProvider>
  );
}
```

Lastly, add the following to your `tailwind.config.js`:

```js

content: [
  ...,
  "./node_modules/@parssa/universal-ui/src/components/**/*.{ts,tsx,js,jsx}",
  ...
],
plugins: [
  ...
    require("@parssa/universal-ui/src/plugin"),
  ...
  ]
```

## Theming / Configuration

There are two main ways to theme this library: through the `tailwind.config.js` and through the `UniversalUIThemeProvider`.

### Tailwind Config
Here is where you can apply overrides for the semantic colors, and things such as the spacing scale.

Example theme replacing the brand color with some green hues.

```js
theme: {
   universalUI: {
    themes: [
      {
          name: "brand",
          colors: {
            50: "#f1f8f4",
            100: "#ddeee3",
            200: "#bdddc9",
            300: "#9ac8af",
            400: "#63a482",
            500: "#428766",
            600: "#306b50",
            700: "#265641",
            800: "#204536",
            900: "#1b392d"
          }
        },
    ]
  }
}
```

One thing to note is it's ideal to provide a color scale from 50-900, as these colors are all used when determining the light/dark variants for the components.

### UniversalUIThemeProvider


The `UniversalUIThemeProvider` is a React Context Provider that allows you to override the theme on a per-instance basis. This is useful for changing the feel of all components on a page, or for a specific component.

Per component, you can pass in a string, or a function which returns the instance's `props`, to apply styles conditionally.

```jsx
import { UniversalUIThemeProvider } from '@universal-ui/react';

const config = {
  components: {
    button: ({ theme }: ButtonProps) => {
      if (theme === 'error') {
        return 'cursor-not-allowed';
      }
      return '';
    },
    text: ({ variant }: TextProps) => {
      if (variant === 'h1') {
        return 'underline'
      }

      return '';
    },
  }
}

function App() {
  return (
    <UniversalUIThemeContext.Provider value={config}>
      <YourApp />
    </UniversalUIThemeContext.Provider>
  );
}
```

## SSR
To ensure components respond to the user's OS theme preference, you'll need to wrap your app in the `UniversalUIThemeProvider` and pass in the `ssr` prop.

```jsx
const config = {
  components: { ... },
  ssr: true
}
```
