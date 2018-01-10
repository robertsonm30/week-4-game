
$(document).ready(function () 
{
	var wins = 0;
	var losses = 0;

	var score = 0;
	var red = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var blue = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var yellow = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var green = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var targetScore = Math.floor(Math.random() * (120 - 19)) + 19 ;

	// This Function resets the Variables when the game is over
	function reset() 
		{
		 score = 0;
		 red = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 blue = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 yellow = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 green = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 targetScore = Math.floor(Math.random() * (120 - 19)) + 19 ;

		};

	
	// This Function is The Game it is set this way to make the scores show up correctly in the DOM
	function game() 

		{
			

		
			// assigns click event to variable 	
			var userChoice = $(this).attr("value");

			// Compare Click Variable to Diamond Variable and increase the score based on value
			if (score < targetScore) {

				switch (userChoice) {
					case "red": 
					    score += red;
					    break;
				    case "blue":
				    	score += blue;
				    	break;
			    	case "yellow":
			    		score += yellow;
			    		break;
		    		case "green":
		    			score += green;
		    			break;
				}




			// When Score is equal to target score set win  and reset
			} else if (score == targetScore) {
				wins++;
				reset();
				console.log("wins" + wins)
				console.log("losses" + losses)

			// When Score is higher to target score set loss and reset
			} else if (score > targetScore) {
				losses++;
				reset();	
				console.log("wins" + wins)
				console.log("losses" + losses)
			}

			// Print Score to DOM
			$("#YOURSCORE").text(score);
			$("#GOAL").text(targetScore);
			$("#SCOREBOARD").text("Wins: " + wins + "   " + "Losses " +losses)

		}

	// This gets the Click event
	$(".button").on("click", game) ;

	// This runs the game function
	game();

});