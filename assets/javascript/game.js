// define computer options in alphabet
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// establish initial variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// guessesSoFar is an array that will hold all the user's guesses in each round
var guessesSoFar = [];
// userGuess by pressing a key
var userGuess = null;
// computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

var updateGuessesLeft = function (){
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var updateLettersToBeGuessed = function (){
};

var updateguessesSoFar = function (){
	document.querySelector("#guessesSoFar").innerHTML = guessesSoFar.join(" ");
};

var reset = function (){
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		updateGuessesLeft();
		updateLettersToBeGuessed();
		updateguessesSoFar();

};


// game events
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to guessesSoFar array but 
	// only if it has not been picked, and is within
	// the alphabet, not special character
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter, decrease guessesLeft by 1
		guessesLeft--;
	}

	// if letterToBeGuessed is same as userGuess then record it as a win
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (letterToBeGuessed == userGuess) {
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		console.log("You won!");
		reset();

		//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		document.querySelector("#losses").innerHTML = losses;
		console.log("You lost!");
		reset();
		//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// Displaying progress to HTML
	//var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	//updateletterToBeGuessed() = letters[Math.floor(Math.random() * letters.length)];
	//updateLetterToGuess();
    updateGuessesLeft();
    updateguessesSoFar();
	//testing below

	//document.querySelector("#userGuess").innerHTML = userGuess;
	//document.querySelector("#wins").innerHTML = wins;
	//document.querySelector("#losses").innerHTML = losses;
	//document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	//document.querySelector("#guessesSoFar").innerHTML = guessesSoFar;
	console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

	// place html into the game ID
	//document.querySelector("#game").innerHTML = html;

}
