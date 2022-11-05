import Link from "next/link";
import { toggleTheme } from "../pages/_app";
// nav bar header 
export default function Header({setTheme}) {
  return (
    <>
      <section className="header_section">
        <div className="container">
          <div className="H_main_wrap">
            <div className="H_wrap">
              <div className="meta_wrap">
                <div className="logo">
                  <Link href="/" passHref>
                    <img src="/images/greenlogo.svg" />
                  </Link>
                </div>
                <div className="button_wrapper">
                  <ul className="wrapper_btns theme theme_wrapper">
                    <li
                      className="dark"
                      onClick={() => {
                        toggleTheme("dark", setTheme);
                      }}
                    ></li>
                    <li
                      className="white"
                      onClick={() => {
                        toggleTheme("white", setTheme);
                      }}
                    ></li>
                    <li
                      className="lightdark"
                      onClick={() => {
                        toggleTheme("lightdark", setTheme);
                      }}
                    ></li>
                    <li
                      className="light"
                      onClick={() => {
                        toggleTheme("light", setTheme);
                      }}
                    ></li>
                    <li
                      className="blue"
                      onClick={() => {
                        toggleTheme("blue", setTheme);
                      }}
                    ></li>
                    <li
                      className="cyan"
                      onClick={() => {
                        toggleTheme("cyan", setTheme);
                      }}
                    ></li>
                    <li
                      className="pink"
                      onClick={() => {
                        toggleTheme("pink", setTheme);
                      }}
                    ></li>
                    <span>theme</span>
                  </ul>
                  <div className="link_btns">
                    <Link className="wrapper_btns home" href="/" passHref>
                      home
                    </Link>
                    <Link
                      className="wrapper_btns playground"
                      href="/playground"
                      passHref
                    >
                      playground
                    </Link>
                    <Link
                      className="wrapper_btns links"
                      href="/about/links"
                      passHref
                    >
                      links
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}