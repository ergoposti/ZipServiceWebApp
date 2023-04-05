import {
  ThemeProvider as MuiThemeProvider,
  type PaletteMode,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { components } from "./components.js";
import palettes from "./palettes.js";
import * as typography from "./typography.js";


export function useTheme(name: PaletteMode) {
  const { palette } = createTheme({ palette: palettes[name] });
  return createTheme(
    {
      palette,
      typography: typography.options,
      components: components(palette),
    },
    {
      typography: typography.overrides,
    },
  );
}

export function ThemeProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <MuiThemeProvider theme={useTheme("light")} {...props} />;
}
