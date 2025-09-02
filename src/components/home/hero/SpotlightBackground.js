import React from "react";
import { Box } from "@mui/material";
import { Spotlight } from "./Spotlight";

export function SpotlightBackground({
  children,
  spotlightProps = {},
  sx = {},
  ...props
}) {
  return (
    <Spotlight
      showRadialGradient={true}
      sx={{
        overflow: "hidden",
        WebkitFontSmoothing: "antialiased",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: { xs: "flex-start", md: "center" },
        ...sx,
      }}
      {...spotlightProps}
      {...props}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          mx: "auto",
          width: "100%",
          maxWidth: "80rem",
          p: 2,
          pt: { xs: 10, md: 0 },
        }}
      >
        {children}
      </Box>
    </Spotlight>
  );
}
