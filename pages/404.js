import Head from "next/head";
import Link from "next/link";

import Landing from "../components/Landing";
import Draggable from "react-draggable";
export default function custom404() {



  return (
    <section>
      <div className="mian">
        <div className="container">
          <div className="main404">
            <Draggable>
              <h1 className="404">404</h1>
            </Draggable>
            <div className="buttons">
              <Link href="/">
                <a className="footbtm">home</a>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
