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
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import Link from "next/link";
import Seo from "../components/Seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Header from "../components/header";


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
  const [theme, setTheme] = useState(lightTheme);
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
        {/* <div className="playground_btn container">
          <div className="themeselector">
            <div className="activecolor">
              <h4>colour</h4>
              <div className="btngroup">
                <button
                  className="light"
                  onClick={() => {
                    toggleTheme("light",setTheme);
                  }}
                ></button>
                <button
                  className="dark"
                  onClick={() => {
                    toggleTheme("dark", setTheme);
                  }}
                ></button>
                <button
                  className="red"
                  onClick={() => {
                    toggleTheme("red", setTheme);
                  }}
                ></button>
                <button
                  className="blue"
                  onClick={() => {
                    toggleTheme("blue", setTheme);
                  }}
                ></button>
                <button
                  className="yellow"
                  onClick={() => {
                    toggleTheme("yellow", setTheme);
                  }}
                ></button>
                <button
                  className="pink"
                  onClick={() => {
                    toggleTheme("pink", setTheme);
                  }}
                ></button>
              </div>
            </div>
          </div>

          <Link href="/playground">
            <a className="plbtn">playground</a>
          </Link>
          <Link href="/">
            <a className="plbtn">home</a>
          </Link>
        </div> */}
        <Header setTheme = {setTheme}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
