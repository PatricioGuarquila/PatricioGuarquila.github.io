let block = document.getElementById("block");
let hole = document.getElementById("hole");
let bird = document.getElementById("bird");
let game = document.getElementById("game");
let jumping = 0;
let count_score = 0;

// audio 

let GameOverSound = new Audio("src/perdiste1.mp3");
let score_sound = new Audio("src/score.mp3");

hole.addEventListener('animationiteration', () => {


    let random = (Math.random() * 3);
    let top = (random*100)+150;
    hole.style.top = -(top) + "px";
    count_score +=50;
    score_sound.play();
});

setInterval(function () {
    let bird_top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    if (jumping == 0) {
        bird.style.top = (bird_top + 2) + "px";
    }

    let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    let hole_top = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

    bird_top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    let char_top = -(100-bird_top);

  
    if((bird_top >480) || ((block_left<40) && (block_left > -50)  && ((char_top < hole_top -20) || (char_top >hole_top+160))))
    {
        GameOverSound.play();

        game.innerHTML= `<div class="gameOverDiv"><h1 class= "gameover">Game Over! <br><span>Score ${count_score}</span></h1>
        <a href="inicio.html">Start Again</a></div> `;

        bird.style.top = 100+"px";
        count_score = 0;
        hole.style.animation = "";
        block.style.animation = "";
    }

}, 10);



function jump_bird()
{
    jumping = 1;
    let jump_count=0;


    let jump_interval = setInterval(function(){

 
        let bird_top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

        if((bird_top>6) && (jump_count<15))
        {
            bird.style.top = (bird_top-4)+"px";            
        }

        if(jump_count>20)
        {
            clearInterval(jump_interval);
            jumping = 0;
            jump_count = 0;
        }
        jump_count++;

    },10);

}


