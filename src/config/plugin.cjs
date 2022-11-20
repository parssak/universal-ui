const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

function getRgbChannels(hex) {
  const padded = hex.length === 4 ? "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] : hex;
  return padded
    .match(/\w\w/g)
    .map((x) => parseInt(x, 16))
    .join(" ");
}

const getColorsForTheme = (color, isDark = false, predefinedColors) => {
  const STEPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

  const C = predefinedColors ?? colors[color];
  const colorMap = (light, dark) => C[STEPS[isDark ? dark : light]];

  return {
    "text-base": colorMap(8, 0),
    "text-inverted": colorMap(0, 8),
    "text-muted": colorMap(5, 3),
    "text-active": colorMap(9, 1),
    "bg-pure": isDark ? colors.black : colors.white,
    "bg-base": colorMap(0, 8),
    "bg-inverted": colorMap(8, 0),
    "bg-active": colorMap(2, 6),
    "border-base": colorMap(4, 5),
    "border-inverted": colorMap(5, 4),
    "border-active": colorMap(3, 5)
  };
};

module.exports = plugin(
  function ({ addBase, addVariant, config }) {
    const DEFAULT_THEMES_CONFIG = [
      {
        name: "neutral",
        color: "neutral"
      },
      {
        name: "brand",
        color: "indigo"
      },
      {
        name: "error",
        color: "rose"
      },
      {
        name: "success",
        color: "emerald"
      },
      {
        name: "warning",
        color: "orange"
      },
      {
        name: "info",
        color: "sky"
      }
    ];

    // filter out all config defined themes
    const customThemes = config("theme.universalUI.themes") || [];
    const themeConfig = [
      ...DEFAULT_THEMES_CONFIG.filter((theme) => !customThemes.find((t) => t.name === theme.name)),
      ...customThemes
    ];

    // Create light/dark themes for each color
    const themes = themeConfig.reduce((acc, theme) => {
      const { name, color, colors } = theme;
      return [
        ...acc,
        {
          name,
          colors: getColorsForTheme(color, false, colors)
        },
        {
          name: `${name}-dark`,
          colors: getColorsForTheme(color, true, colors)
        }
      ];
    }, []);

    const DEFAULT_SIZES_CONFIG = [
      {
        name: "xs",
        sizes: {
          px: "0.25rem",
          py: "0.125rem",
          text: "0.75rem",
          line: "1rem"
        }
      },
      {
        name: "sm",
        sizes: {
          px: "0.5rem",
          py: "0.25rem",
          text: "0.875rem",
          line: "1.25rem"
        }
      },
      {
        name: "md",
        sizes: {
          px: "0.75rem",
          py: "0.375rem",
          text: "1rem",
          line: "1.5rem"
        }
      },
      {
        name: "lg",
        sizes: {
          px: "1rem",
          py: "0.375rem",
          text: "1.125rem",
          line: "1.5rem"
        }
      },
      {
        name: "xl",
        sizes: {
          px: "1.25rem",
          py: "0.5rem",
          text: "1.25rem",
          line: "1.5rem"
        }
      }
    ];

    const customSizes = config("theme.universalUI.sizes") || [];
    const sizes = [
      ...DEFAULT_SIZES_CONFIG.filter((size) => !customSizes.find((s) => s.name === size.name)),
      ...customSizes
    ];

    const defaultColors = themes.find((t) => t.name === "neutral").colors;
    if (!defaultColors) {
      throw new Error("Default theme not found");
    }

    const defaultSizes = sizes.find((s) => s.name === "md").sizes;
    if (!defaultSizes) {
      throw new Error("Default sizes not found");
    }

    const getCSSColorVariables = (colors) => {
      return Object.fromEntries(
        Object.entries(colors).map(([name, value]) => {
          return [[`--color-${name}`], getRgbChannels(value)];
        })
      );
    };

    const getCSSSizeVariables = (sizes) => {
      return Object.fromEntries(
        Object.entries(sizes).map(([name, value]) => {
          return [[`--size-${name}`], value];
        })
      );
    };

    addBase({
      ":root": {
        ...getCSSColorVariables(defaultColors),
        ...getCSSSizeVariables(defaultSizes)
      }
    });

    // Redefine CSS variables for each theme

    themes.forEach((theme) => {
      const { colors, name } = theme;
      addBase({
        [`[data-theme=${name}]`]: {
          ...getCSSColorVariables(colors)
        }
      });
    });

    sizes.forEach((size) => {
      const { sizes, name } = size;
      addBase({
        [`[data-size=${name}]`]: {
          ...getCSSSizeVariables(sizes)
        }
      });
    });

    //  Add theme-specific variant for bespoke theming overrides

    themes.forEach((theme) => {
      addVariant(`theme-${theme.name}`, `[data-theme=${theme.name}] &`);
    });

    sizes.forEach((size) => {
      addVariant(`size-${size.name}`, `[data-size=${size.name}] &`);
    });
  },
  {
    theme: {
      extend: {
        textColor: {
          theme: {
            base: "rgb(var(--color-text-base) / <alpha-value>)",
            inverted: "rgb(var(--color-text-inverted) / <alpha-value>)",
            active: "rgb(var(--color-text-active) / <alpha-value>)",
            muted: "rgb(var(--color-text-muted) / <alpha-value>)"
          }
        },
        backgroundColor: {
          theme: {
            pure: "rgb(var(--color-bg-pure) / <alpha-value>)",
            base: "rgb(var(--color-bg-base) / <alpha-value>)",
            inverted: "rgb(var(--color-bg-inverted) / <alpha-value>)",
            active: "rgb(var(--color-bg-active) / <alpha-value>)"
          }
        },
        borderColor: {
          theme: {
            base: "rgb(var(--color-border-base) / <alpha-value>)",
            inverted: "rgb(var(--color-border-inverted) / <alpha-value>)",
            active: "rgb(var(--color-border-active) / <alpha-value>)"
          }
        },
        ringColor: {
          theme: {
            base: "rgb(var(--color-border-base) / <alpha-value>)",
            inverted: "rgb(var(--color-border-inverted) / <alpha-value>)",
            active: "rgb(var(--color-border-active) / <alpha-value>)"
          }
        },
        padding: {
          "size-x": "var(--size-px)",
          "size-y": "var(--size-py)"
        },
        fontSize: {
          size: "var(--size-text)"
        },
        lineHeight: {
          size: "var(--size-line)"
        }
      }
    }
  }
);
