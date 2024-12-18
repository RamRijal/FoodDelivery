"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#ff6b6b", // Vibrant red for primary branding
        },
        secondary: {
          main: "#ffa500", // Orange for secondary branding
        },
        background: {
          default: "#f5f5f5", // Light background
          paper: "#ffffff", // White background for cards/containers
        },
        text: {
          primary: "#333333", // Dark text for readability
          secondary: "#666666", // Slightly lighter text for secondary content
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#ff6b6b", // Vibrant red for primary branding
        },
        secondary: {
          main: "#ffa500", // Orange for secondary branding
        },
        background: {
          default: "#121212", // Dark background
          paper: "#1e1e1e", // Slightly lighter background for cards/containers
        },
        text: {
          primary: "#f5f5f5", // Light text for readability
          secondary: "#b3b3b3", // Slightly darker text for secondary content
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
