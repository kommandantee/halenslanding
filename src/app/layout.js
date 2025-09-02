import { Geist, Geist_Mono } from "next/font/google";
import CustomThemeProvider from "../components/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Halens Premium Akademi",
  description: "Premium finansal ticaret ve kripto eğitimi platformu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
