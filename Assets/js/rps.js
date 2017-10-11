var arr = ["rock", "paper", "scissors"];
var chosen = arr[Math.floor(Math.random()*arr.length)];
var selected;
var winner;
var userWins = 0;
var compWins = 0;

function compare(choice1, choice2){

	if (choice1 === choice2){
		result("Tie");
		return;
	}

	if(choice1 === "rock") {
	    if(choice2 === "scissors") {
	        result("rock beats scissors");
	        winner = "rock";
	    } else {
	        result("paper beats rock");
	        winner = "paper";
	    }
	}

	if(choice1 === "paper") {
	    if(choice2 === "rock") {
	        result("paper beats rock");
	        winner = "paper";
	    } 
	    else{
	        if(choice2 === "scissors") {
	            result("scissors beat paper");
	            winner = "scissors";
	   		}
		}
	}	

	if(choice1 === "scissors") {
	    if(choice2 === "rock") {
	        result("rock beats scissors");
	        winner = "rock";
	    } 
	    else {
	        if(choice2 === "paper") {
	           result("scissors beat paper");
	           winner = "scissors";
	        }
	    }
	}

	if(choice1 === winner){
		$('#result').html("You win!");
		userWins += 1;
	}
	else if(choice2 === winner){
		$('#result').html("Computer wins!");
		compWins += 1;
	}
}

$('#rock').on("click", function(){
	selected = "rock";
	compare(selected, chosen);
})

$('#paper').on("click", function(){
	selected = "paper";
	compare(selected, chosen);
})

$('#scissors').on("click", function(){
	selected = "scissors";
	compare(selected, chosen);
})


$('#reset').on("click", function(){
	$('#h1').html("Let's rock paper scissors...");
	$('#reset').fadeToggle(100);
	chosen = arr[Math.floor(Math.random()*arr.length)];
	$('span#choices').delay(400).fadeToggle(500,function(){
		$('div#message').html( );
	});
	
	$('#message').html("Select an item to throw");
	$('#result').html("");
})

function result(string){
	$('span#choices').fadeToggle(500,function(){
		$('#message').html("");
		$('#h1').html(string);
	});

	$('#result').delay(2000).fadeIn(500);
	$('#reset').delay(500).fadeToggle(1000);
}
