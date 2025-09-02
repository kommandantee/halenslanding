"use client";

import React from "react";
import { useThemeMode } from "../../theme/ThemeProvider";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />;
};

export default NavbarWrapper;
