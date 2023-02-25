import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { createTheme, ThemeProvider } from "@pankod/refine-mui";
import { DarkTheme, LightTheme } from "@pankod/refine-mui";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

const myLightTheme = createTheme ({
  palette: {
      background: {
        default: "#fafafa",
        paper: "#fff"
      },
      text : {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      primary: {
          main: "#a5e887",
          light: "rgb(183, 236, 159)",
          dark: "rgb(115, 162, 94)",
          contrastText: "rgba(0, 0, 0, 0.87)",
      },
      secondary: {
          main: "#AA0015",
          light: "rgb(187, 51, 67)",
          dark: "rgb(118, 0, 14)",
          contrastText: "#fff",
      },
      error: {
          main: "#f44336",
          light: "#e57373",
          dark: "#d32f2f",
          contrastText: "#fff",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#fff",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
  },
});

const myDarkTheme = createTheme ({
  palette: {
      background: {
        default: "#303030",
        paper: "#424242"
      },
      text : {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      primary: {
          main: "#a5e887",
          light: "rgb(183, 236, 159)",
          dark: "rgb(115, 162, 94)",
          contrastText: "rgba(0, 0, 0, 0.87)",
      },
      secondary: {
          main: "#AA0015",
          light: "rgb(187, 51, 67)",
          dark: "rgb(118, 0, 14)",
          contrastText: "#fff",
      },
      error: {
          main: "#f44336",
          light: "#e57373",
          dark: "#d32f2f",
          contrastText: "#fff",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#fff",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
  },
});

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider theme={mode === "light" ? myLightTheme : myDarkTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
