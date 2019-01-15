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
} else if (season === "summer")
    score = score + "2"
    return score; 
}

var scoreTwo = "0"

function ques2(time){
    if(time === "evening"){
    scoreTwo = scoreTwo + "4";
    return score;
} else if (time === "morning")
    scoreTwo = scoreTwo + "2"
    return scroreTwo;
}

var scoreThree = "0"

function ques3(element){
    if (element === "earth"){
    scoreThree = scoreThree + "4"
    return scoreThree; 
} else if (element === "fire")
    scoreOne = scoreThree + "2"
    return scoreThree; 
}

var scoreFour = "0"

function ques4(color){
    if (color === "yellow"){
    scoreFour = scoreFour + "4"
    return scoreFour;
} else if (color === "black")
    scoreFour = scoreFour + "2"
    return scoreFour; 
}

totalScore = console.log()

function 




