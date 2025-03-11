let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerO

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    })
})

const checkWinner = () =>{
    for(let patterns of winpattern){
       let pos1val = boxes[patterns[0]].innerText;
       let pos2val = boxes[patterns[1]].innerText;
       let pos3val = boxes[patterns[2]].innerText;

       if(pos1val !=""&& pos2val != ""&& pos3val !=""){
         if(pos1val === pos2val && pos2val === pos3val){
            console.log("WINNER",pos1val);
            showWinner(pos1val)
         }
       }
    }
};
const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;   
     }
};
const ennableboxex = () =>{
    for(let box of boxes){
        box.disabled = false;   
        box.innerText ="";
     }
};



const showWinner = (Winner) =>{
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const resetgame = () =>{
    turnO = true;
    ennableboxex();
    msgcontainer.classList.add("hide");
}
newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

