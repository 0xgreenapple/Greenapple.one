import "../styles/main.scss";
import { useState ,useEffect} from "react";
import Head from "next/head";
import {
  lightTheme,
  darkTheme,
  blueTheme,
  redTheme,
  yellowTheme,
  pinkTheme,
  cyanTheme,
  lightdarkTheme,
  whiteTheme
} from "../ThemeConfig"; 
import { ThemeProvider,ThemeUpdateContext,ThemeContext } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import Link from "next/link";
import Seo from "../components/Seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Header from "../components/header";
import {useThemeState} from "../components/toggletheme";

function getThemeType(theme) {
  if (theme == 'light'){
    return lightTheme

  }
  else{
    return darkTheme
  }
}
export function toggleTheme(col, setTheme) {
     switch (col) {
       case "dark":
         setTheme(darkTheme);
         break;
       case "cyan":
         setTheme(cyanTheme);
         break;
       case "blue":
         setTheme(blueTheme);
         break;
       case "lightdark":
         setTheme(lightdarkTheme);
         break;
       case "pink":
         setTheme(pinkTheme);
         break;
       case "white":
         setTheme(whiteTheme);
         break;
       case "light":
        setTheme(lightTheme);
        break
       default:
         setTheme(lightTheme);
         break;
     }
     // theme == 'light' ? setTheme('dark') : setTheme('light')
   };
function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useThemeState(lightTheme);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);
  
   

  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Seo />
          <Component setTheme = {setTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
