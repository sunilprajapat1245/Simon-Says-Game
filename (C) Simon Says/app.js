let doc = document.querySelector(".container") ;
let gameSeq = [] ;
let userSeq = [] ;

let start = false ;
let level = 0 ;

let h4 = document.querySelector("h4") ;
let btn = ["red" , "blue" , "yellow" , "purple"] ;


document.addEventListener("keypress" , () =>{
    if(start == false){
        startGame() ;
        start = true ;
    }

}) ;

function flash(el){

    el.classList.add("flash") ;
    setTimeout(()=>{

        el.classList.remove("flash") ;

    } ,300 ) ;

}


function startGame(){
    userSeq = [] ;
    level++ ;
    h4.innerText = `Level: ${level}` ;

    let randIdx = (Math.floor(Math.random() * 4 ))   ;
    let randBtn = btn[randIdx] ;
    let selBtn = document.querySelector(`.${randBtn}`) ;

    gameSeq.push(randBtn) ;
    flash(selBtn) ;

}


function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length == gameSeq.length){

            setTimeout(() =>{
                startGame() ;

            } , 1000) ;
        }

  }else{
    h4.innerText = `Wrong Press Your Score Is: ${level} Press Any Key To ReStart` ;
    reset() ;
  }
}


function btnClick(){
    let curBtn = this ;
    flash(curBtn) ;
    let curClr = curBtn.getAttribute("id") ;
    userSeq.push(curClr) ;

    checkAns(userSeq.length-1) ;

}


let allBtn = document.querySelectorAll(".btn") ;

for(ab of allBtn){
    ab.addEventListener("click", btnClick) ;
}


function reset(){

    level = 0 
    userSeq = [] ;
    gameSeq = [] ;
    start = false ;

}