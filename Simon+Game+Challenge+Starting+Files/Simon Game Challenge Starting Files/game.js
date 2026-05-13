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
    
});

function nextSequence(){
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