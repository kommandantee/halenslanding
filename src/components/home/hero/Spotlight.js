import React from "react";
import { Box, useTheme } from "@mui/material";

export const Spotlight = ({
  className = "",
  children,
  showRadialGradient = true,
  showSpotlight = true,
  sx = {},
  ...props
}) => {
  const theme = useTheme();

  // Define color variables based on theme mode
  const getAuroraColors = () => {
    if (theme.palette.mode === "dark") {
      return {
        primary: theme.palette.primary.main, // Gold in dark mode
        secondary: theme.palette.secondary.main, // Green
        accent1: theme.palette.info.main, // Light gold
        accent2: theme.palette.warning.main, // Warning gold
        accent3: "#60a5fa", // Blue accent
      };
    } else {
      return {
        primary: theme.palette.primary.main, // Blue in light mode
        secondary: "#a5b4fc", // Indigo
        accent1: "#93c5fd", // Light blue
        accent2: "#ddd6fe", // Violet
        accent3: "#60a5fa", // Blue accent
      };
    }
  };

  const colors = getAuroraColors();

  // Get goldish colors for spotlight
  const getSpotlightColors = () => {
    if (theme.palette.mode === "dark") {
      return {
        center: "hsl(45, 100%, 85%)", // Light gold
        main: "hsl(45, 100%, 75%)", // Gold
        secondary: "hsl(40, 100%, 65%)", // Deeper gold
      };
    } else {
      return {
        center: "hsl(45, 80%, 90%)", // Very light gold
        main: "hsl(45, 90%, 80%)", // Light gold
        secondary: "hsl(40, 85%, 70%)", // Medium gold
      };
    }
  };

  const spotlightColors = getSpotlightColors();

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease",
        ...sx,
      }}
      className={className}
      {...props}
    >
      {/* Aurora Background Container */}
      {/* <Box
        sx={{
          position: "absolute",
          //   inset: 0,
          top: "-70vh",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          maskImage: showRadialGradient
            ? "radial-gradient(circle at 50% 20%, black 15%, transparent 50%)"
            : "none",
          WebkitMaskImage: showRadialGradient
            ? "radial-gradient(circle at 50% 20%, black 15%, transparent 50%)"
            : "none",
        }}
      > */}
      {/* Aurora Effect Layer */}
      {/* <Box
          sx={{
            position: "absolute",
            inset: "-10px",
            pointerEvents: "none",
            opacity: 0.5,
            filter: "blur(10px)",
            willChange: "transform",
            animation: "aurora 120s linear infinite",
            backgroundImage:
              theme.palette.mode === "dark"
                ? `repeating-linear-gradient(100deg, transparent 0%, transparent 7%, transparent 10%, transparent 12%, transparent 16%), repeating-linear-gradient(90deg, ${colors.primary} 10%, ${colors.secondary} 15%, ${colors.accent1} 20%, ${colors.accent2} 25%, ${colors.accent3} 30%)`
                : `repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%), repeating-linear-gradient(90deg, ${colors.primary} 10%, ${colors.secondary} 15%, ${colors.accent1} 20%, ${colors.accent2} 25%, ${colors.accent3} 30%)`,
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: "difference",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundImage:
                theme.palette.mode === "dark"
                  ? `repeating-linear-gradient(100deg, transparent 0%, transparent 7%, transparent 10%, transparent 12%, transparent 16%), repeating-linear-gradient(90deg, ${colors.primary} 10%, ${colors.secondary} 15%, ${colors.accent1} 20%, ${colors.accent2} 25%, ${colors.accent3} 30%)`
                  : `repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%), repeating-linear-gradient(90deg, ${colors.primary} 10%, ${colors.secondary} 15%, ${colors.accent1} 20%, ${colors.accent2} 25%, ${colors.accent3} 30%)`,
              backgroundSize: "100%, 50%",
              backgroundAttachment: "fixed",
              mixBlendMode: "difference",
              animation: "aurora 120s linear infinite",
            },
          }}
        />
      </Box> */}

      {/* Animated Goldish Spotlight Effect */}
      {showSpotlight && (
        <Box
          sx={{
            position: "absolute",
            transformOrigin: "center top",
            height: "40vh",
            left: "1.05vw",
            top: 0,
            width: "98.5vw",
            zIndex: -5,
            background: `conic-gradient(
              at 50% -45vh,
              transparent 43%,
              ${spotlightColors.center} 47%,
              ${spotlightColors.main} 50%,
              ${spotlightColors.secondary} 53%,
              transparent 57.5%
            ) 50% 0px / 100% 100%`,
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "screen",
            filter: "blur(10px)",
            WebkitMaskImage: `radial-gradient(
              circle at 50% 0%,
              black 5%,
              transparent 50%
            )`,
            maskImage: `radial-gradient(
              circle at 50% -20%,
              black 0%,
              transparent 50%
            )`,
            animation:
              "spotlightRotate 8s ease-in-out infinite, spotlightPulse 4s ease-in-out infinite",
            willChange: "transform, filter, opacity",
          }}
        />
      )}

      {/* Content */}
      {children}
    </Box>
  );
};
