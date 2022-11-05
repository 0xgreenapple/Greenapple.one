import styled from "styled-components";

export default function Link({ alllinksdata }) {
    

  return (
    <section className="link_section">
      <div className="container">
        <div className="link_wrapper">
          <header className="link_head">
            <h2>links</h2>
            <div className="link_nav">
              <div className="img_wrap">
                {alllinksdata.map(({ theme, logo, link }) => (
                  <Link href={link} target="_blank" className="link">
                    <img src={logo} />
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
