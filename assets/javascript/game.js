var wins = 0;
var losses = 0;
var numbAchieve = Math.floor(Math.random() * 120) + 19;
var totalScore = 0;
var randomValue = [];

$("#totalScore").text(totalScore);
$("#wins").text(wins);
$("#losses").text(losses);

function update() {
    totalScore = 0;
    numbAchieve = Math.floor(Math.random() * 120) + 19;

    $("#totalScore").text(totalScore);
    $("#numbAchieve").text(numbAchieve);

    randomValue = [];
    for (i = 0; i < 4; i++) {
        var randomCrystalValue = Math.floor(Math.random() * 12) + 1;
        randomValue.push(randomCrystalValue);
    }    

    console.log(randomValue);

    $("#gem1").attr("data-value", randomValue[0]);
    $("#gem2").attr("data-value", randomValue[1]);
    $("#gem3").attr("data-value", randomValue[2]);
    $("#gem4").attr("data-value", randomValue[3]);

}    

randomValue = [];
for (i = 0; i < 4; i++) {
    var randomCrystalValue = Math.floor(Math.random() * 12) + 1;
    randomValue.push(randomCrystalValue);
}    

console.log(randomValue);

$("#gem1").attr("data-value", randomValue[0]);
$("#gem2").attr("data-value", randomValue[1]);
$("#gem3").attr("data-value", randomValue[2]);
$("#gem4").attr("data-value", randomValue[3]);

$(".crystals").on("click", "button", function() {
    console.log(this);
    var userClickValue = $(this).attr("data-value");
    console.log(userClickValue);
    userClickValue = parseInt(userClickValue);
    
    totalScore = totalScore + userClickValue;
    $("#totalScore").text(totalScore);
    console.log(totalScore);

    if (totalScore === numbAchieve) {
        alert("You Win!");
        wins++;
        update();
    }

    if (totalScore >= numbAchieve) {
        alert("You Lose!");
        losses++;
        update();
    }

    $("#wins").text(wins);
    $("#losses").text(losses);

});

$("#numbAchieve").text(numbAchieve);