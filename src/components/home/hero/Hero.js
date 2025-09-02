import React from "react";
import { Typography, Box } from "@mui/material";
import { SpotlightBackground } from "./SpotlightBackground";

export function Hero() {
  return (
    <SpotlightBackground>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            background: "linear-gradient(to bottom, #fafafa, #a3a3a3)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            fontWeight: "bold",
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Halens Premium Akademi
          <br />
          Yeni Trend.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            mt: 2,
            maxWidth: "32rem",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 400,
            color: "#d4d4d4",
            lineHeight: 1.6,
          }}
        >
          Premium finansal ticaret ve kripto eğitimi platformu. Spotlight
          efekti, sayfanın belirli bir bölümüne dikkat çekmek için harika bir
          yoldur. Burada, sayfanın metin bölümüne dikkat çekiyoruz.
        </Typography>
      </Box>
    </SpotlightBackground>
  );
}
