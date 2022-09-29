//header

import Link from "next/link";
import { toggleTheme } from "../pages/_app";
export default function Header({setTheme}) {
  return (
    <>
      <div className="container">
        <div className="H_main_wrap">
          <div className="H_wrap">
            <div className="meta_wrap">
              <div className="logo">
                <img src="images/greenlogo.svg" />
              </div>
              <div className="button_wrapper">
                <ul className="theme_wrapper">
                  <li
                    className="dark"
                    onClick={() => {
                      toggleTheme("dark", setTheme);
                    }}
                  ></li>
                  <li className="white"
                    onClick={() => {
                      toggleTheme("white", setTheme);
                    }}>
                  </li>
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
                  theme
                </ul>

                <Link href="/">
                  <a className="home">home</a>
                </Link>
                <Link href="/playground">
                  <a className="playground">playground</a>
                </Link>
                <Link href="/playground">
                  <a className="links">links</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}