import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";
import {useThemeState} from "../../components/toggletheme";
import { darkTheme, lightTheme, pinkTheme } from "../../ThemeConfig";
import { ThemeContext } from "styled-components";
import { useContext,createContext } from "react";
import { ThemeProvider } from "styled-components";
import getLinksData from "../../utils/getLinks";
import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";
export async function getStaticProps() {
  const alllinksdata = getLinksData();
  return {
    props: {
      alllinksdata,
    },
  };
}

export default function links({ alllinksdata,setTheme }) {
  return (
    <main className="main_section link_main">
      <div className="head_section">
        <Header setTheme={setTheme} />
        <section className="link_section">
          <div className="container link_container">
            <div className="link_wrapper">
              <header className="link_head">
                <h2>links</h2>
                <p> my social links </p>
                <div className="link_nav">
                  <div className="img_wrap">
                    {alllinksdata.map(({ theme, logo, link }) => (
                      <Link href={link} target="_blank" className="link">
                        <img href={link} src={logo} />
                      </Link>
                    ))}
                  </div>
                </div>
              </header>
              <ul className="list_wrapper">
                {alllinksdata.map(({ name, logo, theme, link }) => (
                  <Link href={link} target="_blank" className="link">
                    <Links theme={theme}>
                      <Wrapper>
                        <Leftwrapper theme={theme}>
                          <img src={logo} />
                          <h1>{name}</h1>
                        </Leftwrapper>
                        <Rightwrapper theme={theme}>
                          <div className="logo">
                            <img src="/images/external_link.svg" />
                          </div>
                        </Rightwrapper>
                      </Wrapper>
                    </Links>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}


// styles
const Links = styled.li`
  background: ${(props) => props.theme.color};
  color: ${(props) => (props.theme.mode == "dark" ? "black" : "white")};
  border: 2px solid black;
  border-radius: 15px;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 25px;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 0.01s;

  :hover {
    box-shadow: 3px 3px 0px #000000;
    transform: scale(1.01);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;
const Leftwrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1 {
    margin-left: 10px;
  }
  img {
    height: 32px;
    ${(props) =>
      props.theme.logo_theme == "dark" ? "filter: invert(1);" : ""};
  }
`;
const Rightwrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .logo {
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;

    img {
      height: 32px;
      ${(props) => (props.theme.mode == "dark" ? "filter: invert(1);" : "")};
    }
  }
`;
