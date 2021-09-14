"use strict";

// document.querySelector(".message").textContent = "👏Correct Number";

// document.querySelector(".number").textContent = 13;


// document.querySelector(".guess").value = 10; 



let secretNum = Math.trunc(Math.random()*25) + 1;
let score = 25;
let highscore = 0;


document.querySelector(".btn_check").addEventListener('click',function (){
 const guess = Number(document.querySelector('.guess').value);

// document.querySelector('.message').textContent ="Correct Number!🎉";
console.log( guess,typeof guess);

    if(!guess){
            document.querySelector(".message").textContent=" No Number ⛔";
            } else if (guess===secretNum) {
                
            document.querySelector(".message").textContent = "Correct Number! 🎉";

            document.querySelector('.number').textContent=secretNum;

            document.querySelector('body').style.backgroundColor="#FDBC32";

            if( score > highscore){
                highscore = score;
                document.querySelector("#highscore").textContent = highscore;         
            }

            } else if( guess > secretNum){
                if(score > 0) {
                document.querySelector(".message").textContent = "Guess is very High ☹ ";
                score=score-1;
                document.querySelector("#score").textContent=score;
   
            } else  { 
                document.querySelector(".message").textContent = "You Lost the Game ";
            }
        }else if( guess < secretNum){
                document.querySelector(".message").textContent = "Guess is very Low ☹ ";
                score=score-1;
                document.querySelector("#score").textContent=score;


            }
            //  score=score-1;
            //  document.querySelector("score").textContent=score;
        
});
               document.querySelector(".btn_again").addEventListener('click',function (){
                 score = 25; 
                 secretNum = Math.trunc(Math.random()*25) + 1;

                document.querySelector('.message').textContent="Start Guessing...";

                document.querySelector('.number').textContent="?";

                document.querySelector('#score').textContent=score;

                document.querySelector('.guess').value= '';

                document.querySelector('body').style.backgroundColor="#222";

                document.querySelector('number').style.width="15 rem";

                

               });


            // }
               


