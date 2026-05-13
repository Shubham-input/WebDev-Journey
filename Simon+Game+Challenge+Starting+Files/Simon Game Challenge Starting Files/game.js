let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(".btn").on("click", function(){
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound("sounds/" +userChosenColour + ".mp3");
    checkAnswer(userClickedPattern.length-1);
    
});

function nextSequence(){
    userClickedPattern = []
    level+=1;
    $("h1").text("Level " + level );
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).delay(25).fadeOut().fadeIn();
    playSound("sounds/" +randomChosenColour + ".mp3");
    
    
}

function playSound(name){
    let audio = new Audio(name);
    audio.play();
}
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

 $(document).on("keypress", function(){     
    if (gameStarted != true){
        gameStarted = true;
        nextSequence();
    }
});
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
        
    }
    else{
        console.log("Wrong");
        let audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart" );
        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = false;
}