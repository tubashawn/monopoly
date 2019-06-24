

function diceRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

function displayRoll() {
    document.getElementById("diceRoll").addEventListener("click", function() {
        let firstRoll = diceRoll();
        let secondRoll = diceRoll();
        let total = firstRoll + secondRoll;
        console.log("You clicked the button");
        document.getElementById("firstDie").innerHTML = "Your first die is " + firstRoll;
        document.getElementById("secondDie").innerHTML = "Your second die is " + secondRoll;
        document.getElementById("total").innerHTML = "Your total is " + total;
        
    });
}

displayRoll();
