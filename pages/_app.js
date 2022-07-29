import "../styles/main.scss";
import { useState } from "react";
import Head from "next/head";
import {
  lightTheme,
  darkTheme,
  blueTheme,
  redTheme,
  yellowTheme,
  pinkTheme,
} from "../ThemeConfig"; 
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import Link from "next/link";


function getThemeType(theme) {
  if (theme == 'light'){
    return lightTheme

  }
  else{
    return darkTheme
  }
}
function MyApp({ Component, pageProps }) {
    // const [theme, setTheme] = useState("light");
    const [theme, setTheme] = useState(lightTheme);

    
    const toggleTheme = (col) => {
        switch (col) {
          case "dark":
            setTheme(darkTheme);
            break;
          case "red":
            setTheme(redTheme);
            break;
          case "blue":
            setTheme(blueTheme);
            break;
          case "yellow":
            setTheme(yellowTheme);
            break;
          case "pink":
            setTheme(pinkTheme);
            break;
          case "light":
          default:
            setTheme(lightTheme);
            break;
        }
        // theme == 'light' ? setTheme('dark') : setTheme('light')
    }
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            property="og:title"
            content="average green apple enjoyer"
            key="ogtitle"
          />
          <meta property="og:description" content="green apple?" key="ogdesc" />
          <meta property="og:image" content="https://greenapple.one/images/preview.png" key="ogimg" />
          <title>green apple</title>
        </Head>

        <div className="playground_btn container">
          <div className="themeselector">
            <div className="activecolor">
              <h4>colour</h4>
              <div className="btngroup">
                <button
                  className="light"
                  onClick={() => {
                    toggleTheme("light");
                  }}
                ></button>
                <button
                  className="dark"
                  onClick={() => {
                    toggleTheme("dark");
                  }}
                ></button>
                <button
                  className="red"
                  onClick={() => {
                    toggleTheme("red");
                  }}
                ></button>
                <button
                  className="blue"
                  onClick={() => {
                    toggleTheme("blue");
                  }}
                ></button>
                <button
                  className="yellow"
                  onClick={() => {
                    toggleTheme("yellow");
                  }}
                ></button>
                <button
                  className="pink"
                  onClick={() => {
                    toggleTheme("pink");
                  }}
                ></button>
              </div>
            </div>
          </div>
          <Link href="/playground">
            <a className="plbtn">playground</a>
          </Link>
        </div>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
