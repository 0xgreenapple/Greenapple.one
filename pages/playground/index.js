import Calc from "../../components/calc";
import Link from "next/link";
import Footer from "../../components/footer";


//playground
export default function playground() {
  return (
    <>
      <section>
      
        <div className="container">
          <div className="wrapper">
            <div className="wrap-head">
              <h1>choose one</h1>
            </div>

            <div className="p-menu-wrap">
              <div className="p-menu">
                <Link href="/playground/calculator" passHref>
                  calculator
                </Link>
                <Link className="gameoflife" href="/playground/gameoflife" passHref>
                 Game of Life
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
