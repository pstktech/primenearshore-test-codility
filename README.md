PRIME NEARSHORE - Code assessment
Provided by Codility
Author: Pedro Leal 
Date: 12/04/2023

------------------------------------
TASK #1 - Prompt

"You are given a string representing a sequence of N arrows, each pointing in on of the four cardinal directions: up ('^'). down ('v'), left ('<') or right ('>').

Write a function solution in JavaScript that, given a string S denoting the directions of the arrows, returns the minimun number of arrows that must be rotated to make them all point in the same direction.

Examples: Given S = "^vv<v", the function should return 2. After rotating both the first ('^') and fourth ('<') arrows downwards ('v'), all of the arrows would point down.

Example 2: Given S = "v>>>vv", the function should return 3, After rotating the first, fifth and sixth arrow rightwards, all of the arrows would point right.

Assume that:
-N is an interger within the range [1...100];
-string S is made only of the following characters: '^', 'v', '<' and/or '>'

In your solution, focus on correctness, The perfomance of your solution will not be the focus of the assessment."



// Pedro Leal's coments on the task
// The code worked sucessfully and the solution has been delivered = primenearshore-test-v1.js

LOGS FROM CODILITY TEST OUTPUT
"Compilation successful.

Example test:   '^vv<v'
Output:
2
3
3
18
6
19
17
OK

Example test:   'v>>>vv'
Output:
2
3
3
18
6
19
17
OK

Example test:   '<<<'
Output:
2
3
3
18
6
19
17
OK"

 

------------------------------------

TASK #2 - Prompt

"Your task is to implement a React component that renders a board representing the sliding puzzle called 15-puzzle. The board consists of 15 numbered square tiles (from 1 up to 15) and one empty space. The aim of the puzzle is to place the tiles in order by making sliding moves that use the empty space.

Requirements

1. The root of the component tree is a div element with class name board.

2. Each of the tiles should be rendered as a direct child of the div element and be a div element with class name tile. The empty space should additionally contain an empty class.

3. The component receives two props: initialConfiguration and onSolveCallback. The first one is an array of length 16 that contains a permutation of the set { 0, 1, 2, ..., 15 }. Each number represents the number that should be placed on a corresponding tile in the initial arrangement. The 0 element refers to the empty space. The callback onSolveCallback should be called when the puzzle is correctly sorted into order the first time.

4. The first element of the initialConfiguration array corresponds to the topleft tile, the second element to the next tile along the top row, the third to the tile to the left of the top-right tile, and so forth up to the 16th element, which corresponds to the bottom-right tile.


Assumptions: 

You can assume the initial board's configuration is not the puzzle's solution. At least one move is necessary to reach a solution. You can assume the initial board's configuration is a valid configuration which means that it's possible to make such sliding moves that lead to the solution.

The "Preview" tab will display your component. You can use it for testing purposes. Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements. Using classes: board, tile and empty gives neat styling. 

The following imports are allowed: react (v16.12.0) and classnames (v2.2.6). You can find both at the top of the starting code. 
You can use console.log and console.error for debugging purposes via your browser's developer tools."



// Pedro Leal's coments on the task
// The code worked sucessfully and the solution has been delivered = primenearshore-test-v2.jsx

LOGS FROM CODILITY TEST OUTPUT

"Compilation successful.

Solution with board config: config1 should contain exactly one board and exactly 16 tiles
OK

Solution with board config: config1 there should be exactly one empty tile
OK

Solution with board config: config1 each number from the permutation { 1, ..., 15 } is included among the tiles
OK

Solution with board config: config1 initial rendering gives the board that is compatible with the initial configuration
OK

Solution with board config: config1 clicking at a vertically adjacent tile (the top-left tile) does not cause any effect
OK

Solution with board config: config1 clicking at a vertically adjacent tile (the top-right tile) does not cause any effect
OK

Solution with board config: config1 clicking at a vertically adjacent tile (the bottom-left tile) does not cause any effect
OK

Solution with board config: config1 clicking at a vertically adjacent tile (the bottom-right tile) does not cause any effect
OK

Solution with board config: config1 clicking at empty field does not cause any effect
OK

Solution with board config: config1 clicking at the rest of tiles does not cause any effect
OK

Solution with board config: config1 clicking at the field that is on the left from the empty field swaps the fields
OK

Solution with board config: config1 clicking at the field that is on the right from the empty field swaps the fields
OK

Solution with board config: config1 clicking at the field that is on the top from the empty field swaps the fields
OK

Solution with board config: config1 clicking at the field that is on the bottom from the empty field swaps the fields
OK

Solution with board config: config1 the empty tile moves to: top, left
OK

Solution with board config: config1 the empty tile moves to: right, bottom
OK

Solution with board config: config1 the empty tile moves to: top, left, bottom, right
OK

Solution with board config: config1 the empty tile moves to: bottom, right, top, left
OK

Solution with board config: config1 the empty tile moves to: right, top, left, left, bottom, left
OK

Solution with board config: config1 the empty tile moves to: bottom, right, bottom, left, left, top, left, top, top, right, bottom, right
OK

Solution with board config: config1 the empty tile moves to the top-right corner and verify that clicking at 14 tiles does not cause any effect
OK

Solution with board config: config1 the empty tile moves to: left, left and verify that clicking at 14 tiles does not cause any effect
OK

Solution with board config: config1 the empty tile moves to the right and verify that clicking at 14 tiles does not cause any effect
OK

Solution with board config: config1 the empty tile moves to: bottom, left and verify that clicking at 14 tiles does not cause any effect
OK

Solution with board config: config2 should contain exactly one board and exactly 16 tiles
OK

Solution with board config: config2 there should be exactly one empty tile
OK

Solution with board config: config2 each number from the permutation { 1, ..., 15 } is included among the tiles
OK

Solution with board config: config2 initial rendering gives the board that is compatible with the initial configuration
OK

Solution with board config: config2 the empty tile follows the shortest path to the solution
OK

Solution with board config: config2 the empty tile follows an alternate, longer path to the solution
OK

Solution with board config: config2 should not display popup second time in case when component will be re-rendered
OK"





