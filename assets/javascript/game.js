//on click to select your character. This hides 'Your Character' section and makes vs section visible, 
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
  var hp = {
    zim: 130,
    gir: 150,
    gaz: 180,
    dib: 100
  }
  var heroHp;
  var heroAdd;
  var villainHp;
  var heroAttack;
  var counterAttack;
  var counter = 1;
  var wins = 0;

  $('#message').html('Select your character!');

  //Select your character
  $('.character').on('click', function() {
    $('#vs, #enemies').removeClass('hidden');
    $('#select').addClass('hidden');
    hero = $(this).attr('id');
    $('.yourCharacter').removeClass('hidden');
    var heroName = hero.toUpperCase();
    $('.goodCharName').html(heroName);
    $('#goodImg').attr('src', 'assets/images/' + hero + '.jpg');
    if (hero === 'zim') {
      $('.goodHp').html(hp.zim);
      $('#badzim').addClass('hidden');
    }
    else if (hero === 'gir') {
      $('.goodHp').html(hp.gir);
      $('#badgir').addClass('hidden');
    }
    else if (hero === 'gaz') {
      $('.goodHp').html(hp.gaz);
      $('#badgaz').addClass('hidden');
    }
    else if (hero === 'dib') {
      $('.goodHp').html(hp.dib);
      $('#baddib').addClass('hidden');
    }
    $('#message').html('You have chosen ' + heroName + '!<br>Select your enemy!');
  });

  //Select your enemy
  $('.enemy').on('click', function() {
    if (villainChosen === false) {
      $('button').prop("disabled",false);
      villainChosen = true;
      $('#tag, button').removeClass('hidden');
      villain = $(this).attr('id').substring(3);
      $('.defender').removeClass('hidden');
      var villainName = villain.toUpperCase();
      $('.badCharName').html(villainName);
      //$('.badHp').html('hp.' + villain); //object not working correctly
      $('#badImg').attr('src', 'assets/images/' + villain + '.jpg');
      if (villain === 'zim') {
      $('.badHp').html(hp.zim);
      $('#badzim').addClass('hidden');
    }
    else if (villain === 'gir') {
      $('.badHp').html(hp.gir);
      $('#badgir').addClass('hidden');
    }
    else if (villain === 'gaz') {
      $('.badHp').html(hp.gaz);
      $('#badgaz').addClass('hidden');
    }
    else if (villain === 'dib') {
      $('.badHp').html(hp.dib);
      $('#baddib').addClass('hidden');
    }
      $('#message').html('You have chosen ' + villainName + '!<br>Click the Attack button to attack your enemy!');
      if (wins === 2) {
        $('#enemyAvailable').html("No More Enemies");
      }
    }
  });

  //Attack Button
  $('button').on('click', function() {
    if ($('button').text() === 'Attack') {
      heroHp = parseInt($(".goodHp").text());
      villainHp = parseInt($(".badHp").text());
      hero = $(".goodCharName").text();
      villain = $(".badCharName").text();
      if (hero === "ZIM") {
        heroAttack = 8 * counter; 
      }
      else if (hero === 'GIR') {
        heroAttack = 25 * counter;
      }
      else if (hero === 'GAZ') {
        heroAttack = 20 * counter;
      }
      else if (hero === 'DIB') {
        heroAttack = 10 * counter;
      }
      else {}
      if (villain === 'ZIM') {
        counterAttack = 8;
      }
      else if (villain === 'GIR') {
        counterAttack = 25;
      }
      else if (villain === 'GAZ') {
        counterAttack = 20;
      }
      else if (villain === 'DIB') {
        counterAttack = 10;
      }
      else {}
      $('#message').html("You attacked " + villain + " for " + heroAttack + " damage.<br>" 
        + villain + " attacked you back for " + counterAttack + " damage." );
      $('#message').css({fontSize: 25});
      villainHp -= heroAttack;
      $(".badHp").html(villainHp);
      if (villainHp > 0) {
        heroHp -= counterAttack;
      }
      $('.goodHp').html(heroHp);
      heroAttack += heroAdd;
      counter++;
      winLose();
      if (wins === 3) {
        $('#message').html('You are victorious!<br>Click Restart to play again!');
        $('button').html('Restart');
        $('button').prop("disabled",false);
        $('button').on('click', function() {
        location.reload();
      });
      }
    }
  });

  //determine if player has won or lost
  function winLose () {
    if (heroHp <= 0 && villainHp > 0) {
      $('#message').html('You have been defeated!<br>Click Restart to play again!');
      $('button').html('Restart');
      $('button').on('click', function() {
        location.reload();
      });
    }
    else if (villainHp <= 0 && heroHp > 0 && wins <= 2) {
      $('#message').html('You are victorious!<br>Choose another opponent!');
      $('button').prop("disabled",true);
      villainChosen = false;
      wins++;
    }
    else if (villainHp <= 0 && heroHp <= 0) {
      $('#message').html("It's a draw!<br>Click Restart to play again!");
      $('button').html('Restart');
      $('button').on('click', function() {
        location.reload();
      });
    }
  }

});