let buttons=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let msg=document.querySelector(".msg_cont");
let wins=document.querySelector(".win");
let hides=wins.classList.add("hide");
let newgame=document.querySelector(".newg");


let turnX=true;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let countbox=0;
buttons.forEach((box) => {
    box.addEventListener("click",()=>{
        countbox++;
    let counting=countbox;
    const draw=(counting)=>{
        if(countbox==9){
            wins.innerText="Match draw\n Please Start a New Game";
            wins.classList.remove("hide");
        }
    }
    draw();
})})

buttons.forEach((box) => {
    box.addEventListener("click",()=>{
       if(turnX){
            box.innerText=('X');
            box.classList.add("colorX");
            box.classList.remove("colorY");
            turnX=false; 
        } else{
            box.innerText=('O');
            box.classList.remove("colorX");
            box.classList.add("colorY");
            turnX=true;
        }
        box.disabled=true;
        checkWin();
    })
});

const disableBox=() => {
    for(let box of buttons){
        box.disabled=true;
    }
};

const enableBox=()=>{
    
    for(let box of buttons){
        box.disabled=false;
        box.innerText="";
    }
};

const showWin=(winner)=>{
        wins.innerText=`Congratulations the Winner is ${winner}!`;
        wins.classList.remove("hide");
        disableBox();
};

const checkWin=()=>{
    for(let pattern of win){
        let pos1=buttons[pattern[0]].innerText;
        let pos2=buttons[pattern[1]].innerText;
        let pos3=buttons[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWin(pos1);
        }
    }
  }
};

const newgames=()=>{
    turnX=true;
    enableBox();
    wins.classList.add("hide");
    countbox=0;
}

newgame.addEventListener("click",newgames);
