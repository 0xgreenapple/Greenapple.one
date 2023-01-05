import Home from "../pages";

// landing component
export default function Landing() {
    return (
      <section className="landing_section">
        <div className="container">
          <div className="content-wrap">
            <div className="text">
              <h3 className="typing">Hi! i'm</h3>
              <h1>
                green <span>apple</span>
              </h1>
              <p>
                I'm the guy who loves coding, playing games, and creating 3D
                stuffs in my spare time.
              </p>
            </div>
            <div className="button">
              <a
                href="https://twitter.com/0xgreenapple"
                target={"_blank"}
                className="twitter"
              >
                twitter
              </a>
              <a
                href="https://discord.gg/wC37kY3qwH"
                target={"_blank"}
                className="discord"
              >
                discord
              </a>
              <a
                href="https://instagram.com/0xgreenapple"
                target={"_blank"}
                className="instagram"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}