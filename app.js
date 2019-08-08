// GLOBAL VARIABLES
// This array that will be used to save what cards are displayed on the players game card
// As well as used to identify if the player has won or not
var cardsOnGameCard = [];

// This array will save the cards that have been drawn, to check if the winner has won
var cardsDrawn = [];

// We will keep "deck" as the original, untouched deck, and use this deep copy to shuffle and manipulate
var shuffledDeck = [...deck];

var beanCount = 0;

var interval;

// This function will shuffle the deck, known as the Fisher-Yates shuffle
function randomizeDeck(arrayOfDeck){
  var currentIndex = arrayOfDeck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrayOfDeck[currentIndex];
    arrayOfDeck[currentIndex] = arrayOfDeck[randomIndex];
    arrayOfDeck[randomIndex] = temporaryValue;
  }

  return arrayOfDeck;
}

// Draw a card and display it
function drawCard(){
	if (shuffledDeck.length > 0){
		// Pops off the card drawn...
		var drawnCard = shuffledDeck.pop();
		// Display the card
		document.getElementById("card-image").setAttribute("src", drawnCard.src);
		// Pushing the card onto the cardsDrawn array
		cardsDrawn.push(drawnCard);
	}
	else{
		endGame();
	}
}

// When start button is clicked the game will begin...
document.getElementById("vamonos").addEventListener("click", function(){
	// Change the start button to display "start over"
	document.getElementById("vamonos").style.visibility = "hidden";
	document.getElementById("message").style.visibility = "hidden";

	// Display "Start Over" button
	document.getElementById("start-over").style.visibility = "visible";

	// Shuffle and save the shuffled deck of cards to use to make gameCard
	shuffledDeck = randomizeDeck(shuffledDeck);

	// Print shuffled deck so that we know it's different from the second shuffled deck
	console.log(shuffledDeck);
	
	// Slice first 16 of shuffled deck and update cardsOnGameCard to make the gameCard
	cardsOnGameCard = shuffledDeck.slice(0, 16);
	console.log(cardsOnGameCard);

	// Display the cards onto the Game Card
	displayGameCard();

	// Re-shuffle the deck, and this will be the deck that calls out the cards
	shuffledDeck = randomizeDeck(shuffledDeck);
	
	// Print newly shuffled deck so that we know it's different from the precious shuffled deck
	console.log(shuffledDeck);

	// Here we tell the drawCard function to draw a card every three seconds
	interval = setInterval(drawCard, 2000);

	// Display and draw cards by calling on the drawCard function
	drawCard();

	// When box is clicked on, display pinto bean
	displayBean();
});

// This function will be used to identify whether or not the player has won
function showWinButton(){
	// If all the boxes have been clicked, then enable the "Buenas" button
	if(beanCount == 16){
		console.log("Hello!!");
		// Unhide "Buenas" button
		document.getElementById("buenas").style.visibility = "visible";
		// Enable "Buenas" button and when it's clicked... 
		document.getElementById("buenas").addEventListener("click", endGame);
	}
}

function endGame(){
	// Stop drawing cards....drawCard function
	clearInterval(interval);
	interval = null;
	console.log("Game over!");
	removeAllClicks();
	checkingWin();
}

function checkingWin(){
	document.getElementById("message").style.visibility = "visible";
	if(beanCount < 16 && shuffledDeck == 0){
		document.getElementById("message").innerText = "TIME RAN OUT. YOU WERE TOO SLOW.";
		return;
	}
	else{
		for(var i = 0; i < cardsOnGameCard.length; i++){
			if(cardsDrawn.includes(cardsOnGameCard[i])){
				document.getElementById("message").innerText = "BUENAS! TE GANASTE LA LOTERIA!"
			}
			else{
				document.getElementById("message").innerText = "LOOKS LIKE YOU THOUGHT YOU WON...BUT YOU DIDN'T. BETTER LUCK NEXT TIME.";
				break;
			}
		}
	}
}


// // Restarting the game
// function restartGame () {
// 	// Display "Start Over" button
// 	document.getElementById("start-over").style.visibility = "visibility";
// 	// Clearing the newDeck when the game is restarted
// 	//cardsDrawn === [];
// 	// Changing the text of the button to go back to original display
// }