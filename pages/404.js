import Head from "next/head";
import Link from "next/link";

import Landing from "../components/Landing";
import Draggable from "react-draggable";

// called when a page not found
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
              <Link className="footbtm" href="/" passHref>
                home
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
