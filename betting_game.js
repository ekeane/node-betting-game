
var prompt = require('prompt-sync')();
var colors = require('colors');
// var jsdom = require('node-jsdom').jsdom;
// var document = jsdom();

// Listed variables at top:

// betAmount  - user
//guessNumber - user
// correctAnswer - from computer
// initialMoney - user


// Receives users name
// function Name() {
//   var person = prompt("Please enter your name", "Gambler");
  
//   if (person != null) {
//       document.getElementById("name").innerHTML =
//       "Hello " + person + "! How much would you like to bet?";
//   }
// }


function Game(){

	// you have to ask the user how much they are betting
	// Ask the guess

	var initialMoney = 100;  //constant can be left outside of loop
	


	while (initialMoney > 5) {

	var betAmount =  prompt("Enter bet amount:"); // probs not proper syntax 
	var guessNumber = prompt("Enter guess (1-10):");
	var correctAnswer = Math.floor((Math.random() * 10) + 1);

		if (guessNumber == correctAnswer) {
				initialMoney += (betAmount * 2);
				console.log(colors.green("Your money is now:" + initialMoney + ", " + "you won:" + (betAmount * 2))); //multipled by 2 x 5 
		    
		} else if (guessNumber == (correctAnswer - 1 || correctAnswer + 1  )) {
		   initialMoney += 0;
		   	console.log(colors.yellow("Within 1: No loss"));
		} else {
		    initialMoney -= betAmount;
		    console.log(colors.red("Your money is now:" + initialMoney + ", " + "you lost:" + (betAmount)));
		}

	}
	


}

Game();



// logic:

// makes bet:
// 3 scenarios 
// 1. correct then double bet and add to bankroll
// 2. draw bank is left untouched
// 3. loose lost the amount waged 
