import "../styles/main.scss";
import { useState } from "react";
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
      <head>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        ></meta>
        <title>Green apple</title>
      </head>
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

      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
