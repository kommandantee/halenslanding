"use client";

import { Container, Box } from "@mui/material";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Hero />
      </Box>
    </Container>
  );
}
