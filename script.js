alert('X starts the game');
const boxes = document.getElementsByClassName("box");
const x_score=document.getElementsByClassName("p1");

const o_score=document.getElementsByClassName("p2");

let turn = 1;
let winner = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
    [1, 5, 9], [3, 5, 7]             // Diagonals
];
let temp_x = [];
let temp_o = [];

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];

    // Mouseover and mouseout for visual effect
    

    // Handle click event
    box.addEventListener("click", function() {
        console.log('box', i);
        if (box.innerHTML === "") {
            if (turn % 2 == 0) {
                box.innerHTML = "O";
                temp_o.push(i + 1); // Track 'O' moves
                if (checkWinner(temp_o)) {
                    alert("O wins!");
                    // for (let j = 0; j < 5; j++) {
                    //     const o_element=o_score[0];
                    //     let child=o_element.children[j+1];
                    //     if (child.innerHTML==0) {
                    //         child.innerHTML=1;
                    //     }
                            
    
                        
                    // }
                    // x_score.innerHTML=""
                    resetGame();
                }
            } else {
                box.innerHTML = "X";
                temp_x.push(i + 1); // Track 'X' moves
                if (checkWinner(temp_x)) {
                    alert("X wins!");
                    // for (let j = 0; j <5; j++) {
                    //     const x_element = x_score[0];
                    //     let child=x_element.children[j+1];
                    //     console.log(child);
                    //     if (child.innerHTML===0) {
                    //         child.innerHTML=1;
                    //     }
                            
    
                        
                    // }

                    resetGame();
                }
                
            }
            turn++;
        }
    });
}

// Function to check if a player has won
function checkWinner(moves) {
    for (let combo of winner) {
        if (combo.every(num => moves.includes(num))) {
            return true; // A winning combination is found
        }
    }
    return false; // No winning combination
}

// Function to reset the game (Optional Implementation)
function resetGame() {
    for (let box of boxes) {
        box.innerHTML = "";
    }
    turn = 1;
    temp_x = [];
    temp_o = [];
}



