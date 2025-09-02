"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useTheme,
  alpha,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { LightMode, DarkMode, Menu as MenuIcon } from "@mui/icons-material";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Hide on scroll component
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Animated logo component
const AnimatedLogo = ({ isDark, theme }) => {
  return (
    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          whileHover={{ x: 5, filter: "brightness(1.1)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 40,
              transition: "all 0.3s ease",
            }}
          >
            <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
              <Image
                src={
                  isDark
                    ? "/logo/halens_logo_dark.svg"
                    : "/logo/halens_logo_dark.svg"
                }
                alt="Halens Logo"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <Box
                sx={{
                  background: isDark
                    ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  fontSize: "1.7rem",
                  fontFamily: '"Geist", sans-serif',
                  letterSpacing: "-0.02em",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: isDark
                      ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                      : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    borderRadius: 1,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                Halens Premium
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </motion.div>
    </Link>
  );
};

// Animated navigation item
const NavItem = ({ children, delay = 0, isDark, theme, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <Button
        {...props}
        sx={{
          mx: 1,
          px: 2,
          py: 1,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          position: "relative",
          overflow: "hidden",
          background: isDark
            ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`
            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: '"Geist", sans-serif',
          letterSpacing: "-0.02em",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: isDark
              ? `linear-gradient(90deg, transparent, ${alpha(
                  theme.palette.primary.main,
                  0.2
                )}, transparent)`
              : `linear-gradient(90deg, transparent, ${alpha(
                  theme.palette.primary.main,
                  0.2
                )}, transparent)`,
            transition: "left 0.5s ease",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 2,
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
              : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            borderRadius: 1,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          },
          "&:hover::before": {
            left: "100%",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
          },
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            transform: "translateY(-2px)",
          },
          ...props.sx,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

// Animated action button
const ActionButton = ({
  children,
  variant = "outlined",
  delay = 0,
  isDark,
  theme,
  ...props
}) => {
  const primaryColor = theme.palette.primary.main;
  const primaryHover = theme.palette.primary.dark;
  const primaryDark = theme.palette.primary.dark;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={variant}
        {...props}
        sx={{
          mx: 1,
          px: 3,
          py: 1.2,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          position: "relative",
          overflow: "hidden",
          fontFamily: '"Geist", sans-serif',
          letterSpacing: "-0.02em",
          ...(variant === "contained" && {
            background: `linear-gradient(45deg, ${primaryColor} 30%, ${primaryHover} 90%)`,
            color: isDark
              ? theme.palette.background.default
              : theme.palette.primary.contrastText,
            boxShadow: `0 3px 5px 2px ${alpha(primaryColor, 0.3)}`,
            "&:hover": {
              background: `linear-gradient(45deg, ${primaryHover} 30%, ${primaryDark} 90%)`,
              boxShadow: `0 6px 10px 4px ${alpha(primaryColor, 0.3)}`,
              transform: "translateY(-2px)",
            },
          }),
          ...(variant === "outlined" && {
            borderColor: primaryColor,
            background: isDark
              ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`
              : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.dark} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 2,
              background: isDark
                ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              borderRadius: 1,
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease",
            },
            "&:hover": {
              borderColor: primaryHover,
              backgroundColor: alpha(primaryColor, 0.1),
              transform: "translateY(-2px)",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
            },
          }),
          ...props.sx,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Çözümler", href: "/solutions" },
    { label: "Nasıl Çalışır", href: "/how-it-works" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled
            ? alpha(theme.palette.background.paper, 0.95)
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
            : "none",
          transition: "all 0.3s ease-in-out",
          py: 1,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1 }}>
          {/* Logo */}
          <Box
            sx={{
              flexGrow: 0,
              minWidth: { md: "280px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <AnimatedLogo isDark={isDarkMode} theme={theme} />
          </Box>

          {/* Navigation Items - Center */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              mx: 4,
            }}
          >
            <AnimatePresence>
              {navItems.map((item, index) => (
                <NavItem
                  key={item.label}
                  delay={index * 0.1}
                  color="inherit"
                  href={item.href}
                  isDark={isDarkMode}
                  theme={theme}
                >
                  {item.label}
                </NavItem>
              ))}
            </AnimatePresence>
          </Box>

          {/* Right Side Actions */}
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              minWidth: { md: "280px" }, // Match approximately the logo section width
              justifyContent: "flex-end",
            }}
          >
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                onClick={onThemeToggle}
                sx={{
                  mx: 1,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    transform: "rotate(180deg)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {isDarkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </motion.div>

            {/* Action Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavItem
                delay={0.6}
                href="/login"
                isDark={isDarkMode}
                theme={theme}
              >
                Giriş Yap
              </NavItem>

              <NavItem
                delay={0.8}
                href="/courses"
                isDark={isDarkMode}
                theme={theme}
              >
                Eğitimler
              </NavItem>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{
                    color: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
