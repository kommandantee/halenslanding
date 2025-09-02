import { createTheme } from "@mui/material/styles";

// Color palette based on PROJECT.md specifications
const colors = {
  primary: {
    green: "#00C853",
    darkGreen: "#1B5E20",
    gold: "#FFD700",
    darkGold: "#FFB300",
    blue: "#2196F3",
    darkBlue: "#0D47A1",
  },
  secondary: {
    silver: "#C0C0C0",
    darkSilver: "#9E9E9E",
  },
  dark: {
    background: "#0D1117",
    surface: "#121212",
    text: "#E0E0E0",
  },
  light: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    text: "#212121",
  },
};

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.blue,
      light: colors.primary.gold,
      dark: colors.primary.darkBlue,
    },
    secondary: {
      main: colors.primary.green,
      light: colors.primary.darkGreen,
      dark: colors.primary.darkGreen,
    },
    background: {
      default: colors.light.background,
      paper: colors.light.surface,
    },
    text: {
      primary: colors.light.text,
      secondary: "#666666",
    },
    success: {
      main: colors.primary.green,
    },
    warning: {
      main: colors.primary.gold,
    },
  },
  typography: {
    fontFamily: '"Geist", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.75rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary.gold,
      light: colors.primary.darkGold,
      dark: colors.primary.green,
    },
    secondary: {
      main: colors.primary.green,
      light: colors.primary.darkGreen,
      dark: colors.primary.darkGreen,
    },
    background: {
      default: colors.dark.background,
      paper: colors.dark.surface,
    },
    text: {
      primary: colors.dark.text,
      secondary: "#B0B0B0",
    },
    success: {
      main: colors.primary.green,
    },
    warning: {
      main: colors.primary.gold,
    },
  },
  typography: {
    fontFamily: '"Geist", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.75rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default lightTheme;
