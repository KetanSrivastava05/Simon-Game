alert("Welcome to the Simon Game");
alert("In this game, you need to click the buttons in the order in which they appear to be pressed");
alert("For example if in level 1, if  you see yellow is getting pressed.. you need to click one yellow");
alert("In level 2 if blue is getting pressed by the website.. you need to click yellow first and then blue");
alert("In level 3 if green is getting pressed by the website.. the order in which the buttons need to be clicked is yellow, blue and then green");
alert("You can either click on the respective button or press r key for Red, y for Yellow, g for Green and b for Blue");
alert("To start the game, kindly press any key except r,g,b and y");
alert("Enjoy the Game :)");




var buttonColours=["red","blue","green","yellow"]
var gamePattern=[];
var uCP=[];
var level=0;
var started = false;
function nextSequence(){
    uCP=[];
    
    level++;


    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(((Math.random()*4)));
    var rCC=buttonColours[randomNumber];
    gamePattern.push(rCC);
    $("#"+rCC).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/" + rCC + ".mp3");
    audio.play();
    
}
$(".btn").click(function(event){
    handler(event.target.id);
    playSound(event.target.id);
    animatePress(event.target.id);
    checkAnswer(uCP.length-1);
});
function handler(idd){
    var uCC=idd;
    uCP.push(idd);
    console.log(uCP);
    
}
function playSound(name){
    var audio=new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}
function animatePress(cC){
    $("#"+cC).addClass("pressed");
    setTimeout(function() {
        $("#" + cC).removeClass("pressed");
    }, 100);
    
}
$(document).keypress(function() {
    if (!started) {
        
        
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currLev){
    if (gamePattern[currLev] === uCP[currLev]) {
        
        console.log("success");
        
       
        if (uCP.length === gamePattern.length){
            
            
            setTimeout(function () {
                nextSequence();
            }, 1000);
            
        }
        
    } else {
        
        console.log("wrong");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        
    }
    
}
function startOver(){
    level=0;
    gamePattern=[];
    started= false;
}
function playSoundk(name){
    switch(name){
        case "r":
            var audio=new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "b":
            var audio=new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "g":
            var audio=new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "y":
            var audio=new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        default:
    }
    
    
}
function handlerk(idd){
    switch(idd){
        case "r":
            uCP.push("red");
            console.log(uCP);
            break;
        case "b":
            uCP.push("blue");
            console.log(uCP);
            break;
        case "g":
            uCP.push("green");
            console.log(uCP);
            break;
        case "y":
            uCP.push("yellow");
            console.log(uCP);
            break;
        default:
    }
    
    
}
function animatePressk(cC){
    switch(cC){
        case "r":
            $("#red").addClass("pressed");
            setTimeout(function() {
            $("#red").removeClass("pressed");
            }, 100);
            break;
        case "b":
            $("#blue").addClass("pressed");
            setTimeout(function() {
            $("#blue").removeClass("pressed");
            }, 100);
            break;;
        case "g":
            $("#green").addClass("pressed");
            setTimeout(function() {
            $("#green").removeClass("pressed");
            }, 100);
            break;
        case "y":
            $("#yellow").addClass("pressed");
            setTimeout(function() {
            $("#yellow").removeClass("pressed");
            }, 100);
            break;
        default:
    }
    
    
}
$(document).keypress(function(event){
    handlerk(event.key);
    playSoundk(event.key);
    animatePressk(event.key);
    checkAnswer(uCP.length-1);
})