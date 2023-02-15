import depthFirst from './src/depth-first.js';

const WIDTH = 50;
const HEIGHT = 50;
const STARTING_POS = [0, 0];
const target = document.querySelector('#target');

const maze = [];
let solution = [];

const initMazeArray = (w, h) => {
  for (let i = 0; i < h; i++) {
    let row = new Array(w).fill('1111');
    maze.push(row);
  }
};
initMazeArray(WIDTH, HEIGHT);

const renderMazeHtml = arr => {
  let output = '';

  for (let i = 0; i < arr.length; i++) {
    output += '<tr>';
    for (let j = 0; j < arr[0].length; j++) {
      if (position && position[0] === j && position[1] === i) {
        output += `<td id="${arr[i][j]}" class="current" />`;
      } else if (j === 0 && i === 0) {
        output += `<td id="${arr[i][j]}" class="start" />`;
      } else if (j === WIDTH - 1 && i === HEIGHT - 1) {
        output += `<td id="${arr[i][j]}" class="end" />`;
      } else if (arr[i][j] !== '1111') {
        output += `<td id="${arr[i][j]}" class="prev" />`;
      } else {
        output += `<td id="${arr[i][j]}" />`;
      }
    }
    output += '</tr>';
  }

  target.innerHTML = output;
};

function mainLoop() {
  // step algoritm forward and update variables
  [position, updatedMaze, history] = depthFirst(position, updatedMaze, history);
  // render updated document html
  renderMazeHtml(updatedMaze);

  // if (position[0] === WIDTH - 1 && position[1] === HEIGHT - 1) {
  //   solution = [...history];
  //   console.log(solution);
  // }

  // set timeout for next loop
  const loop = setTimeout(() => {
    if (history.length > 0) {
      mainLoop();
    } else {
      clearTimeout(loop);
      console.log('Maze generated!');
      console.log(maze);
    }
  }, 0);
}

// initialize variables for maze recursion
let position;
let updatedMaze;
let history;

// begin algorithm with initial values
[position, updatedMaze, history] = depthFirst(STARTING_POS, maze, []);
// build initial document html
renderMazeHtml(maze);

// begin recursion
mainLoop();
