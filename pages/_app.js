import "../styles/main.scss";
import { useState ,useEffect} from "react";
import Head from "next/head";
import React from "react";

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
import Router from "next/router";
import { ThemeProvider,ThemeUpdateContext,ThemeContext } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import Link from "next/link";
import Seo from "../components/Seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Header from "../components/header";
import {useThemeState} from "../components/toggletheme";
import loader from "../components/loader";
import { useRouter } from "next/router";
function getThemeType(theme) {
  if (theme == 'light'){
    return lightTheme

  }
  else{
    return darkTheme
  }
}
const MemoizedThemeProvider = React.memo(
  ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  (prevProps, nextProps) => prevProps.theme === nextProps.theme
);
export function toggleTheme(col, setTheme) {
    let theme;
     switch (col) {
       case "dark":
         theme = darkTheme;
         break;
       case "cyan":
         theme =cyanTheme;
         break;
       case "blue":
         theme =blueTheme;
         break;
       case "lightdark":
         theme =lightdarkTheme;
         break;
       case "pink":
         theme = pinkTheme;
         break;
       case "white":
         theme = whiteTheme;
         break;
       case "light":
        theme = lightTheme;
        break
       default:
         theme = lightTheme;
         break;

     }
     // theme == 'light' ? setTheme('dark') : setTheme('light')
    setTheme(theme);
    window.localStorage.setItem("theme", theme);

   };
function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState("light");
   let default_theme = null;
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [theme, setTheme] =
    useThemeState(darkTheme
     );
    
   
  useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true));
        Router.events.on("routeChangeComplete", () => setLoading(false));
        Router.events.on("routeChangeError", () => setLoading(false));
        return () => {
          Router.events.off("routeChangeStart", () => setLoading(true));
          Router.events.off("routeChangeComplete", () => setLoading(false));
          Router.events.off("routeChangeError", () => setLoading(false));
        };


  }, [Router.events]);
  if (loading){
    return(
        <>
          <div id="globalLoader">
            <div className="loader">
              <div />
              <div />
            </div>
          </div>
        </>)
  }
 

  return (
    <>
      <GoogleAnalytics />
      <MemoizedThemeProvider theme={theme}>
        <GlobalStyles />
        <Seo />
        <Component setTheme={setTheme} {...pageProps} />
      </MemoizedThemeProvider>
    </>
  );
}

export default MyApp;
