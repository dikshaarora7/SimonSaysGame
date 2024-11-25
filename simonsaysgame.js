let gameSeq=[];
let userSeq=[];


let started=false;
let level=0;
let highestScore=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("Game is started")
        started=true;
        
    }
    levelUp();
});
function levelUp()
{

    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randColor=btns[randomIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
}
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},200);
};
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function btnPress()
{
    let btn=this;
    // console.log(btn);
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}



function checkAns(idx)
{
    // console.log("curr level:",level);
    
    if(userSeq[idx]==gameSeq[idx])
    {
        // console.log("same value");
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
       
        
    }
    else
    {
        if(level>highestScore)
        {
            highestScore=level;
        }
        h2.innerHTML=`Game Over!Your Score was <b>${level}<b>.
        <br>Highest Score:${highestScore}<br>Press any key to start. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";  
        },150);
        reset();
    }
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function()
{
    btn.classList.remove("userFlash");
},250);
}


function reset()
{
  started=false;
  gameSeq=[];
  userSeq=[];
 
  level=0;  
}