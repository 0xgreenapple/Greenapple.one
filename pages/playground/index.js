import Calc from "../../components/calc";
import Link from "next/link";
import Footer from "../../components/footer";
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
                <Link href="/playground/calculator">
                  <a>calculator</a>
                </Link>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </section>
    </>
  );
}
