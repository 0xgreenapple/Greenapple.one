import Head from "next/head";
import { event } from "nextjs-google-analytics";
import { useState, useEffect } from "react";

const boxheight = 100;
const boxwidth = 100;

function check_neighbor(array, oldarray, pos_x, pos_y) {
  let sum = 0;

  if (pos_y + 1 < boxheight) {
    sum += array[pos_x][pos_y + 1];
  } else {
    sum += array[pos_x][0];
  }
  if (pos_y - 1 >= 0) {
    sum += array[pos_x][pos_y - 1];
  } else {
    sum += array[pos_x][boxheight - 1];
  }
  if (pos_x + 1 < boxwidth) {
    sum += array[pos_x + 1][pos_y];
  } else {
    sum += array[0][pos_y];
  }
  if (pos_x - 1 >= 0) {
    sum += array[pos_x - 1][pos_y];
  } else {
    sum += array[boxwidth - 1][pos_y];
  }
  if (pos_x + 1 < boxwidth && pos_y + 1 < boxheight) {
    sum += array[pos_x + 1][pos_y + 1];
  } else {
    sum += array[0][0];
  }
  if (pos_x - 1 >= 0 && pos_y - 1 >= 0) {
    sum += array[pos_x - 1][pos_y - 1];
  } else {
    sum += array[boxwidth - 1][boxheight - 1];
  }
  if (pos_x + 1 < boxwidth && pos_y - 1 >= 0) {
    sum += array[pos_x + 1][pos_y - 1];
  } else {
    sum += array[0][boxheight - 1];
  }
  if (pos_x - 1 >= 0 && pos_y + 1 < boxheight) {
    sum += array[pos_x - 1][pos_y + 1];
  } else {
    sum += array[boxwidth - 1][0];
  }

  /*
     Any live cell with two or three live neighbours survives.
     Any dead cell with three live neighbours becomes a live cell.
     All other live cells die in the next generation. Similarly, all other dead cells stay dead.
     */
  if (sum < 2) {
    oldarray[pos_x][pos_y] = 0;
  } else if (sum >= 2 && sum <= 3 && array[pos_x][pos_y] == 1) {
    oldarray[pos_x][pos_y] = 1;
  } else if (sum == 3 && array[pos_x][pos_y] == 0) {
    oldarray[pos_x][pos_y] = 1;
  } else if (sum > 3 && array[pos_x][pos_y] == 1) {
    oldarray[pos_x][pos_y] = 0;
  }
}

function getValus(rn) {
  let array = [];
  if (rn) {
    for (let i = 0; i < boxheight; i++) {
      array.push([0]);
      for (let j = 0; j < boxwidth; j++) {
        array[i][j] = Math.floor(Math.random() * 2);
      }
    }
  } else {
    for (let i = 0; i < boxheight; i++) {
      array.push([0]);
      for (let j = 0; j < boxwidth; j++) {
        array[i][j] = 0;
      }
    }
  }

  return array;
}

export default function gameoflife() {
  let array = getValus(true);
  let temparray = getValus();
  let isrunning = false;
  let paused = false;

  function reset(array, temparray) {
    array = getValus(true);
    temparray = getValus();
  }
  function init() {
    let canvas;
    let context;
    try {
      canvas = document.getElementById("game_window");
      context = canvas.getContext("2d");
    } catch (error) {
      return;
    }
    if (!(canvas && context)) {
      return;
    }

    clear(context, canvas);

    for (let i = 0; i < boxheight; i++) {
      for (let j = 0; j < boxwidth; j++) {
        temparray[i][j] = array[i][j];
      }
    }
    for (let i = 0; i < boxheight; i++) {
      for (let j = 0; j < boxwidth; j++) {
        if (array[i][j] == 1) {
          context.fillStyle = "white";
          context.fillRect(10 * i, 10 * j, 10, 10);
        } else if (array[i][j] == 0) {
          context.fillStyle = "black";
          context.fillRect(10 * i, 10 * j, 10, 10);
        }
        if (!paused) {
          check_neighbor(array, temparray, i, j);
        }
      }
    }
    for (let i = 0; i < boxheight; i++) {
      for (let j = 0; j < boxwidth; j++) {
        array[i][j] = temparray[i][j];
      }
    }

    // Start the first frame request

    window.requestAnimationFrame(init);
  }

  function clear(context, canvas) {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  }

  return (
    <>
      <div className="container">
        <div className="game_w">
          <div className="game">
            <canvas id="game_window" width="800" height="600"></canvas>
          </div>

          <div className="buttons">
            <a
              id="gamebutton"
              className="gamebutton"
              onClick={() => {
                if (isrunning) {
                  if (paused) {
                    paused = false;
                    document.getElementById("gamebutton").innerHTML = "pause";
                  } else {
                    paused = true;
                    document.getElementById("gamebutton").innerHTML = "play";
                  }
                } else {
                  init();
                  isrunning = true;
                }
              }}
            >
              play
            </a>
            <a
              className="gamebutton"
              onClick={() => {
                array = getValus(true);
                temparray = getValus();
              }}
            >
              reset
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
