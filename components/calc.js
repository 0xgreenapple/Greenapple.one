
import Footer from "./footer";
export default function calc() {
  var temp = "";
  var comma = false;
  !["+", "-", "*", "%"].includes();

  const changevalue = (value) => {
    if (value !== 'ac' && temp.length === 20) {
      var result =temp
      if (value === '='){
        result = eval(temp)
        
      }
      console.log(value)
      console.log(result)
      console.log(temp)
      document.getElementById("screen").value = result;
      temp = String(result);
      return
    }

    if (value === "=") {
      if (["*", "/"].includes(temp.charAt(0))) {
        document.getElementById("screen").value = 0;
        temp = "";
        return;
      }
      if (!["+", "-", "*", "/","."].includes(temp.slice(-1))) {
        var value1 = eval(temp);
        if (value1 === Infinity) {
          document.getElementById("screen").value = value1;
          temp = "";
        } else if (value1 === undefined){
            document.getElementById("screen").value = 0;
            temp = "";
        }
        else {
          document.getElementById("screen").value = value1;
          temp = `${value1}`;
        }
      } else {
        document.getElementById("screen").value = temp;
      }
    } else if (value === "ac") {
      document.getElementById("screen").value = temp.slice(0, - 1);
      temp = temp.slice(0,-1);
    } else {
      if (temp.slice(-1) === value && temp.slice(-1) === value) {
        document.getElementById("screen").value = temp;
      } else {
        if (
          ["*", "/", "-", "+"].includes(value) &&
          ["*", "/", "-", "+"].includes(temp.slice(-1))
        ) {
          document.getElementById("screen").value = temp;
        } else {
          if (value === '.'){
            if (!comma) {
              temp = temp + value;
              document.getElementById("screen").value = temp;
              comma = true
            }
            else{
              temp = temp;
              document.getElementById("screen").value = temp;
            }
          }
          else{
            if (["*", "/", "-", "+"].includes(value)){
              temp = temp + value;
              document.getElementById("screen").value = temp;
              comma = false;
            } 
            else{
               temp = temp + value;
               document.getElementById("screen").value = temp;
            }
          }
          
        }
      }
    }
  };

  return (
        <div className="container">
          <div className="calc-wrap">
            <div className="calc">
              <input disabled id="screen" className="screen" value="0" />
              <div className="btnwrap">
                <div className="buttons">
                  <div className="left-btn">
                    <ul className="numbers">
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(1);
                          }}
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(2);
                          }}
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(3);
                          }}
                        >
                          3
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(4);
                          }}
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(5);
                          }}
                        >
                          5
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(6);
                          }}
                        >
                          6
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(7);
                          }}
                        >
                          7
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(8);
                          }}
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                          className="clcbtn1"
                          onClick={() => {
                            changevalue(9);
                          }}
                        >
                          9
                        </button>
                      </li>
                    </ul>
                    <div className="bottom-btn">
                      <ul>
                        <li>
                          <button
                            className="zero"
                            onClick={() => {
                              changevalue(0);
                            }}
                          >
                            0
                          </button>
                        </li>
                        <li>
                          <button
                            className="clcbtn1"
                            onClick={() => {
                              changevalue(".");
                            }}
                          >
                            .
                          </button>
                        </li>
                        <li>
                          <button
                            className="equal"
                            onClick={() => {
                              changevalue("=");
                            }}
                          >
                            =
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right-btn">
                  <ul className="oprators">
                    <li>
                      <button
                        className="ac"
                        onClick={() => {
                          changevalue("ac");
                        }}
                      >
                        AC
                      </button>
                    </li>
                    <li>
                      <button
                        className="clcbtn1"
                        onClick={() => {
                          changevalue("+");
                        }}
                      >
                        +
                      </button>
                    </li>
                    <li>
                      <button
                        className="clcbtn1"
                        onClick={() => {
                          changevalue("-");
                        }}
                      >
                        -
                      </button>
                    </li>
                    <li>
                      <button
                        className="clcbtn1"
                        onClick={() => {
                          changevalue("*");
                        }}
                      >
                        *
                      </button>
                    </li>
                    <li>
                      <button
                        className="clcbtn1"
                        onClick={() => {
                          changevalue("/");
                        }}
                      >
                        /
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
                        
        </div>
  );
}
