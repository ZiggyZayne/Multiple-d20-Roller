//getVal is the rolling function. Uses a for loop to decrement the value of the input and calls an iteration of the d20Roll function each time.

function getVal() {
    for (var diceNum = document.getElementById("numDice").value; diceNum > 0; diceNum--) {
        document.getElementById("jsRoll").innerHTML += d20Roll(1, 20) + "\n";
    }
} 

//d20Roll is the random number generator, above I passed 1, 20 as the range for a d20.

function d20Roll(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

//This just refreshes the page. A bit more convenient that mousing all the way up for people who don't know about hotkeys!

function reset() {
    window.location.reload();
}