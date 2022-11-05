import {
  lightTheme,
  darkTheme,
  blueTheme,
  redTheme,
  yellowTheme,
  pinkTheme,
  cyanTheme,
  lightdarkTheme,
  whiteTheme,
} from "../ThemeConfig";
import { use, useState } from "react";


export function useThemeState(themeType){
    const [theme, setTheme] = useState(themeType);

    return [theme,setTheme]
}

