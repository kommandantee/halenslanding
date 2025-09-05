import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { SpotlightBackground } from "./SpotlightBackground";
import LightRays from "./LightRays";
import Particles from "./Particles";

export function Hero() {
  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffd700"
          raysSpeed={0.7}
          lightSpread={0.9}
          rayLength={1.5}
          followMouse={false}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
          pulsating={false}
          fadeDistance={0.8}
          saturation={1.2}
          className="hero-light-rays"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, 0%)",
            width: "50%",
            height: "50%",
            mask: "radial-gradient(circle at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
            WebkitMask:
              "radial-gradient(circle at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
            // background:
            //   "radial-gradient(circle at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
            // WebkitBackground:
            //   "radial-gradient(circle at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Particles
            particleCount={200}
            particleSpread={3}
            speed={0.1}
            particleColors={["#ffd700", "#ffeb3b", "#fff176", "#ffffff"]}
            alphaParticles={true}
            particleBaseSize={30}
            sizeRandomness={0.1}
            cameraDistance={25}
            disableRotation={false}
            className="hero-particles"
          />
        </div>
      </div>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
      </Container>
    </Box>
  );
}
