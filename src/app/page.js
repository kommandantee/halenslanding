import { Container, Typography, Box } from "@mui/material";

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
          textAlign: "center",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Halens Premium Akademi
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Premium finansal ticaret ve kripto eğitimi platformu
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Proje başarıyla başlatıldı. Navbar ve Hero bölümü geliştirmeye hazır.
        </Typography>
      </Box>
    </Container>
  );
}
