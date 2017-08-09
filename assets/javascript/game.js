//on click to select your character. This hides "Your Character" section and makes vs section visible, 
		//moves your character to vs section, & moves remaining characters to enemy section.
//on click to select enemy. Moves selected enemy to the vs section.
//Assign attack power variable for each character.
//on click for attak button removes hp from defender and additional hp from your character.
//if your character hp reaches 0 or below, you lose, else if defender hp reaches 0 defender disappears & you pick a new enemy.
//if all enemies are defeated, you win.
//Option to start new game?

//your character selection

$(document).ready(function() {

	//variables
	var hero;
	var villain;
	var villainChosen = false;
	var zimHP = 150;
	var girHP = 160;
	var gazHP = 180;
	var dibHP = 140;
	var zimAttack = 10;
	var girAttack = 15;
	var gazAttack = 25;
	var dibAttack = 5;

	//Select your character
	$(".character").on("click", function() {
		$("#vs").removeClass("hidden");
		$("#select").addClass("hidden");
		hero = $(this).attr('id');
		console.log(hero);
		if (hero === "zim") {
			$("#badGir, #badGaz, #badDib").removeClass("hidden");
			$("#yourZim").removeClass("hidden");
		}
		else if (hero === "gir") {
			$("#badZim, #badGaz, #badDib").removeClass("hidden");
			$("#yourGir").removeClass("hidden");
		}
		else if (hero === "gaz") {
			$("#badZim, #badGir, #badDib").removeClass("hidden");
			$("#yourGaz").removeClass("hidden");
		}
		else if (hero === "dib") {
			$("#badZim, #badGir, #badGaz").removeClass("hidden");
			$("#yourDib").removeClass("hidden");
		}
	});

	//Select your enemy
	$(".enemy").on("click", function() {
		if (villainChosen === false) {
			$("#tag").removeClass("hidden");
			$("button").removeClass("hidden");
			villain = $(this).attr('id');
			console.log(villain);
			villainChosen = true;
			if (villain === "badZim") {
				$("#defendZim").removeClass("hidden");
				$("#badZim").addClass("hidden");
			}
			else if (villain === "badGir") {
				$("#defendGir").removeClass("hidden");
				$("#badGir").addClass("hidden");
			}
			else if (villain === "badGaz") {
				$("#defendGaz").removeClass("hidden");
				$("#badGaz").addClass("hidden");
			}
			else if (villain === "badDib") {
				$("#defendDib").removeClass("hidden");
				$("#badDib").addClass("hidden");
			}
		}
		else if (villainChosen === true) {
			null;
		}

	});	
	

//dont forget to 'enable' other enemies when game is won

});