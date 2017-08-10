//on click to select your character. This hides "Your Character" section and makes vs section visible, 
//moves your character to vs section, & moves remaining characters to enemy section.
//on click to select enemy. Moves selected enemy to the vs section.
//Assign attack power variable for each character.
//on click for attak button removes hp from defender and additional hp from your character.
//if your character hp reaches 0 or below, you lose, else if defender hp reaches 0 defender disappears & you pick a new enemy.
//if all enemies are defeated, you win.
//Option to start new game?

$(document).ready(function() {

    //variables
    var hero;
    var villain;
    var villainChosen = false;
    var zimHP = 120;
    var girHP = 150;
    var gazHP = 180;
    var dibHP = 100;
    var zimAttack = 8;
    var girAttack = 20;
    var gazAttack = 25;
    var dibAttack = 5;

    $("#message").html("Select your character!");

    //Select your character
    $(".character").on("click", function() {
      $("#vs, #enemies").removeClass("hidden");
      $("#select").addClass("hidden");
      hero = $(this).attr('id');
      $("#your" + hero).removeClass("hidden");
      $("#bad" + hero).addClass("hidden");
      $("#message").html("Select your enemy!");
    });

    //Select your enemy
    $(".enemy").on("click", function() {
      if (villainChosen === false) {
        $("#tag, button").removeClass("hidden");
        villain = $(this).attr('id');
        villainChosen = true;
        $("#defend" + villain).removeClass("hidden");
        $("#" + villain).addClass("hidden");
        $("#message").html("Click the Attack button to attack your enemy!");
      }
    });

    var test = $('#goodGuy').find('div:visible:first').text('id');
    console.log(test);

    //Attack Button
    $("button").on("click", function() {
      var test = $('#goodGuy').find('div:visible:first').text('id');
      console.log(test);

   });



    //dont forget to 'enable' other enemies when game is won

});