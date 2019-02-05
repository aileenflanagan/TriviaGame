let timeLeft=60;
let questionIndex=0;
let numCorrect=0;
let numIncorrect=0;

let questionZero={
    question:"Which one of the following events is not a Women's Artistic Gymnastics Apparatus?",
    answers: ["Vault", "Uneven Bars", "Balance Beam", "Ribbon"],
    correctAnswer: "Ribbon"};

// let questionArray=[questionZero, questionOne, questionTwo, questionThree, questionFour];





$( document ).ready(function() {

    $("#start-button").on("click",function(){
        startGame();
        $("#start-button").hide();
    });

    function startGame(){
        $("#next-button").show();
        $("#time-remaining").show();
        $("#seconds-left").show();
        console.log("ready!");
        displayQuestion();
        countDown();
    }

    function countDown(){
        setInterval(decrement, 1000);
        
    }

    function decrement(){
        timeLeft--;
        $("#seconds-left").text("0:"+timeLeft);
    }

    function displayQuestion(){
        $("#trivia-questions").append("<h3 id='current-question'>");
        $("#current-question").text(questionZero.question);
        $("#trivia-questions").append("<input type='radio' id='option-one'>");
        $("#option-one").attr("value", questionZero.answers[0]);
        $("#option-one").text(questionZero.answers[0]);

        
    }
});