export const theme = {
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#808080",
    background: "#FFFFFF",
    text: "#000000",
    contrastText: "#FFFFFF",
    border: "#000000",
  },
  space: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadius: {
    default: 12,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "bold",
      text: "#000000",
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold",
      text: "#000000",
    },
    h3: {
      fontSize: 18,
      fontWeight: "bold",
      text: "#000000",
    },
    body: {
      fontSize: 16,
      text: "#000000",
    },
    caption: {
      fontSize: 14,
      color: "#808080",
    },
  },
} as const;

export type TypographyVariant = keyof typeof theme.typography;
