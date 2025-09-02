import { createTheme } from "@mui/material/styles";

// Aurora and Spotlight animation keyframes
const auroraKeyframes = {
  "@keyframes aurora": {
    from: {
      backgroundPosition: "50% 50%, 50% 50%",
    },
    to: {
      backgroundPosition: "350% 50%, 350% 50%",
    },
  },
  "@keyframes spotlightRotate": {
    "0%": {
      transform: "rotate(-1deg) scale(1)",
      opacity: 0.8,
    },
    "25%": {
      transform: "rotate(1deg) scale(1.05)",
      opacity: 1,
    },
    "50%": {
      transform: "rotate(-0.5deg) scale(0.95)",
      opacity: 0.9,
    },
    "75%": {
      transform: "rotate(0.8deg) scale(1.02)",
      opacity: 1,
    },
    "100%": {
      transform: "rotate(-1deg) scale(1)",
      opacity: 0.8,
    },
  },
  "@keyframes spotlightPulse": {
    "0%": {
      filter: "blur(10px) brightness(1)",
    },
    "50%": {
      filter: "blur(12px) brightness(1.2)",
    },
    "100%": {
      filter: "blur(10px) brightness(1)",
    },
  },
};

// Color palette with goldish primary for dark mode
const colors = {
  primary: {
    gold: "#FFD700", // Main gold
    lightGold: "#FFED4E", // Lighter gold
    darkGold: "#FFB300", // Darker gold
    deepGold: "#FF8F00", // Deep gold
    blue: "#2196F3", // Main blue for light mode
    lightBlue: "#64B5F6", // Lighter blue
    darkBlue: "#1976D2", // Darker blue
    deepBlue: "#0D47A1", // Deep blue
  },
  secondary: {
    green: "#00C853",
    darkGreen: "#1B5E20",
    silver: "#C0C0C0",
    darkSilver: "#9E9E9E",
  },
  dark: {
    background: "#0A0A0A", // Darker background
    surface: "#1A1A1A", // Darker surface
    paper: "#252525", // Card/paper background
    text: "#E8E8E8", // Primary text
    textSecondary: "#B0B0B0", // Secondary text
    border: "#333333", // Border color
  },
  light: {
    background: "#FFFFFF",
    surface: "#F8F9FA",
    paper: "#FFFFFF",
    text: "#1A1A1A",
    textSecondary: "#666666",
    border: "#E0E0E0",
  },
};

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.blue,
      light: colors.primary.lightBlue,
      dark: colors.primary.darkBlue,
    },
    secondary: {
      main: colors.secondary.green,
      light: colors.primary.gold,
      dark: colors.secondary.darkGreen,
    },
    background: {
      default: colors.light.background,
      paper: colors.light.paper,
    },
    text: {
      primary: colors.light.text,
      secondary: colors.light.textSecondary,
    },
    divider: colors.light.border,
    success: {
      main: colors.secondary.green,
    },
    warning: {
      main: colors.primary.gold,
    },
    error: {
      main: "#F44336",
    },
    info: {
      main: colors.primary.blue,
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
  components: {
    MuiCssBaseline: {
      styleOverrides: auroraKeyframes,
    },
  },
});

// Dark theme with goldish primary
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary.gold,
      light: colors.primary.lightGold,
      dark: colors.primary.darkGold,
    },
    secondary: {
      main: colors.secondary.green,
      light: colors.primary.lightGold,
      dark: colors.secondary.darkGreen,
    },
    background: {
      default: colors.dark.background,
      paper: colors.dark.paper,
    },
    surface: {
      main: colors.dark.surface,
    },
    text: {
      primary: colors.dark.text,
      secondary: colors.dark.textSecondary,
    },
    divider: colors.dark.border,
    success: {
      main: colors.secondary.green,
    },
    warning: {
      main: colors.primary.gold,
    },
    error: {
      main: "#F44336",
    },
    info: {
      main: colors.primary.lightGold,
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
  components: {
    MuiCssBaseline: {
      styleOverrides: auroraKeyframes,
    },
  },
});

export default lightTheme;
