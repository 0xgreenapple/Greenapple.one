import Calc from "../../components/calc";
import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Head from "next/head";

//playground
export default function playground({setTheme}) {
  return (
    <>
      <main className="main_section play_main">
        <div className="head_section">
          <Header setTheme={setTheme} />
          <section className="playground_section">
            <div className="container">
              <div className="ply_wrapper">
                <div className="ply_head">
                  <h1>playground</h1>
                  <p> some of my projects that i made for fun</p>
                </div>
                <div className="ply_meta">
                  <ul className="ply_lists">
                    <li>
                      <Link
                        className="tall box red"
                        href="playground/gameoflife"
                      >
                        Game of life
                      </Link>
                    </li>
                    <li>
                      <Link className="short box" href="playground/calculator">
                        calculator
                      </Link>
                    </li>
                    <li>
                      <Link className="short box blue" href="/">
                        comming soon
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
