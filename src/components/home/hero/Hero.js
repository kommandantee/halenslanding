import React, { useState, useEffect } from "react";
import { Typography, Box, Container } from "@mui/material";
import { SpotlightBackground } from "./SpotlightBackground";
import LightRays from "./LightRays";
import Particles from "./Particles";

export function Hero() {
  const [prices, setPrices] = useState({
    BTC: { price: "43,250", change: "+2.34%" },
    ETH: { price: "2,680", change: "+1.85%" },
    BIST100: { price: "9,847", change: "-0.42%" },
    GOLD: { price: "2,045", change: "+0.78%" },
  });

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => ({
        BTC: {
          price: (43000 + Math.random() * 1000)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          change: `${Math.random() > 0.5 ? "+" : "-"}${(
            Math.random() * 5
          ).toFixed(2)}%`,
        },
        ETH: {
          price: (2600 + Math.random() * 200)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          change: `${Math.random() > 0.5 ? "+" : "-"}${(
            Math.random() * 5
          ).toFixed(2)}%`,
        },
        BIST100: {
          price: (9800 + Math.random() * 200)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          change: `${Math.random() > 0.5 ? "+" : "-"}${(
            Math.random() * 3
          ).toFixed(2)}%`,
        },
        GOLD: {
          price: (2000 + Math.random() * 100)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          change: `${Math.random() > 0.5 ? "+" : "-"}${(
            Math.random() * 2
          ).toFixed(2)}%`,
        },
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CornerElement = ({ position, asset, price, change }) => {
    const isTop = position.includes("top");
    const isLeft = position.includes("left");

    // Generate path that starts from screen edge
    const getPath = () => {
      if (position === "top-left") {
        return "M0,0 Q80,20 200,80 Q250,100 300,150";
      } else if (position === "top-right") {
        return "M300,0 Q220,20 100,80 Q50,100 0,150";
      } else if (position === "bottom-left") {
        return "M0,150 Q80,130 200,70 Q250,50 300,0";
      } else {
        return "M300,150 Q220,130 100,70 Q50,50 0,0";
      }
    };

    const path = getPath();
    const pathLength = 400; // Approximate path length for animation

    return (
      <Box
        sx={{
          position: "absolute",
          [isTop ? "top" : "bottom"]: "15%",
          [isLeft ? "left" : "right"]: "0%",
          width: "300px",
          height: "150px",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        {/* SVG with passive line and animated beam */}
        <svg
          width="300"
          height="150"
          viewBox="0 0 300 150"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            {/* Static gradient for passive line */}
            <linearGradient
              id={`static-gradient-${position}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 215, 0, 0.1)" />
            </linearGradient>

            {/* Animated beam gradient */}
            <linearGradient
              id={`beam-gradient-${position}`}
              x1={position.includes("right") ? "100%" : "0%"}
              y1="0%"
              x2={position.includes("right") ? "0%" : "100%"}
              y2="0%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0)" />
              <stop offset="20%" stopColor="rgba(255, 235, 59, 1)" />
              <stop offset="50%" stopColor="rgba(255, 215, 0, 0.8)" />
              <stop offset="80%" stopColor="rgba(255, 215, 0, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />

              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values={
                  position.includes("right")
                    ? "300,0; 300,0; -300,0; -300,0; 300,0"
                    : "-300,0; -300,0; 300,0; 300,0; -300,0"
                }
                keyTimes="0; 0.2; 0.7; 0.9; 1"
                dur="4s"
                // begin={
                //   position === "top-left"
                //     ? "0s"
                //     : position === "top-right"
                //     ? "1s"
                //     : position === "bottom-left"
                //     ? "2s"
                //     : "3s"
                // }
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          {/* Passive background line */}
          <path
            d={path}
            stroke={`url(#static-gradient-${position})`}
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />

          {/* Animated beam line */}
          <path
            d={path}
            stroke={`url(#beam-gradient-${position})`}
            strokeWidth="2"
            fill="none"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))",
            }}
          >
            <animate
              attributeName="opacity"
              values="0; 0; 0.8; 1; 0.8; 0; 0"
              keyTimes="0; 0.15; 0.25; 0.5; 0.75; 0.85; 1"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </Box>
    );
  };

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
          }}
        >
          <Particles
            particleCount={200}
            particleSpread={3}
            speed={0.1}
            particleColors={["#ffd700", "#ffeb3b", "#fff176", "#ffffff"]}
            alphaParticles={true}
            particleBaseSize={40}
            sizeRandomness={0.1}
            cameraDistance={25}
            disableRotation={false}
            className="hero-particles"
          />
        </div>
      </div>

      {/* Corner Elements */}
      <CornerElement
        position="top-left"
        asset="BTC"
        price={prices.BTC.price}
        change={prices.BTC.change}
      />
      <CornerElement
        position="top-right"
        asset="ETH"
        price={prices.ETH.price}
        change={prices.ETH.change}
      />
      <CornerElement
        position="bottom-left"
        asset="BIST100"
        price={prices.BIST100.price}
        change={prices.BIST100.change}
      />
      <CornerElement
        position="bottom-right"
        asset="GOLD"
        price={prices.GOLD.price}
        change={prices.GOLD.change}
      />

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
