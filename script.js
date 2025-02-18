let boxes = ["", "", "", "", "", "", "", "", ""]

let buttonX = document.getElementById("X");
let buttonO = document.getElementById("O");

let currentPlayer = "X";


let index = document.getElementById("insertNum").addEventListener("input", function () {
    index = this.value;
});

function checkWinner(player) {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winCombos.length; i++) {
        const combo = winCombos[i];
        if (boxes[combo[0]] === player &&
            boxes[combo[1]] === player &&
            boxes[combo[2]] === player) {
           
            combo.forEach(i => {
                document.getElementsByClassName("box")[i].style.backgroundColor = "#4CAF50";
            });
            return true;
        }
    }
    return false;
}

function clickX() {
   buttonX.addEventListener("click", function () {
        if (index >= 0 && index < 9 && boxes[index] === "") {
            boxes[index] = "X";
            document.getElementsByClassName("box")[index].textContent = "X";
            
            if (checkWinner("X")) {

                setTimeout(function () {
                    alert("X Wins!");
                    location.reload();
                }, 1000);
            } else{
                 buttonO.disabled = false;
                buttonX.disabled = true;
            }
        }
    });
}


function clickO() {
   buttonO.addEventListener("click", function () {
        if (index >= 0 && index < 9 && boxes[index] === "") {
            boxes[index] = "O";
            document.getElementsByClassName("box")[index].textContent = "O";
            if (checkWinner("O")) {
                setTimeout(function () {
                    alert("O Wins!");
                    location.reload();
                }, 1000);
            } else{
                buttonO.disabled = true;
                buttonX.disabled = false;
            }
        }
    });
}


buttonO.disabled = true;
buttonX.disabled = false;
clickX();
clickO();