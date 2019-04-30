/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});

var score = "0";

function ques1(season){
    if (season === "winter"){
    score = score + "4"
    return score;
} else if (season === "summer"){
    score = score + "2"
    return score; 
}

var scoreTwo = "0"

function ques2(time){
    if(time === "evening"){
    scoreTwo = scoreTwo + "4";
    return score;
} else if (time === "morning"){
    scoreTwo = scoreTwo + "2"
    return scroreTwo;
}

var scoreThree = "0"

function ques3(element){
    if (element === "earth"){
    scoreThree = scoreThree + "4"
    return scoreThree; 
} else if (element === "fire"){
    scoreOne = scoreThree + "2"
    return scoreThree; 
}

var scoreFour = "0"

function ques4(color){
    if (color === "yellow"){
    scoreFour = scoreFour + "4"
    return scoreFour;
} else if (color === "black"){
    scoreFour = scoreFour + 2;
    return scoreFour; 
}
}

var totalScore = score + scoreTwo + scoreThree + scoreFour;
console.log()
    if(totalScore >10){
    alert("You are Damon");
    } else{
        alert("You are Stefan");
    }
var userInput1;
var userInput2;
var userInput3;
var userInput4;
    
$(button).click(function(){
    userInput1=$("#question1").val();
    userInput2=$("#question2").val();
    userInput3=$("#question3").val();
    userInput4=$("#question4").val();
    totalScore(userInput1, userInput2, userInput3, userInput4);
});

// var Scoring = getScore() + getScore1() + getScore2() + getScore3() + getScore4();
// function totalScore( ques1, ques2, ques3, ques4 )
// });



