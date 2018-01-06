
$(document).ready(function () 
{
	var wins = 0;
	var losses = 0;
	console.log("wins" + wins)
	console.log("losses" + losses)

	var score = 0;
	var red = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var blue = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var yellow = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var green = Math.floor(Math.random() * (12 - 1)) + 1 ;
	var targetScore = Math.floor(Math.random() * (120 - 19)) + 19 ;

	function reset() 
		{
		 score = 0;
		 red = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 blue = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 yellow = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 green = Math.floor(Math.random() * (12 - 1)) + 1 ;
		 targetScore = Math.floor(Math.random() * (120 - 19)) + 19 ;

		};

	

	function game() 

		{
			

			
			console.log(red)
			console.log(blue)
			console.log(yellow)
			console.log(green)
			console.log(targetScore)

			var userChoice = $(this).attr("value");
			// console.log(choice)
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




			
			} else if (score == targetScore) {
				wins++;
				reset();
				console.log("wins" + wins)
				console.log("losses" + losses)

			} else if (score > targetScore) {
				losses++;
				reset();	
				console.log("wins" + wins)
				console.log("losses" + losses)
			}

			console.log(score)
			$("#YOURSCORE").text(score);
			$("#GOAL").text(targetScore);

		}

	$(".button").on("click", game) ;

	game();

});