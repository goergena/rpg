$(document).ready(function(){

//set all ids to variables
    var twilight = $("#twilight");
    var celestia = $("#celestia");
    var discord = $("#discord");
    var nightmare = $("#nightmare");

    twilight.attr("attack", 5);
    celestia.attr("attack", 20);
    discord.attr("attack", 15);
    nightmare.attr("attack", 10);

    var ponyArray = [twilight, celestia, discord, nightmare];
  
    isHeroChosen = false;
    isChallengerChosen = false;
    isChallengerDefeated = false;
    allEnemiesDefeated = false;
    isHeroDefeated = false;
    var hero = "";
    var heroId = "";
    var challenger = "";
    var challengerId = "";
    var heroHealth = 100;
    var challengerHealth = 100;
    var heroAttack = 0;
    var challengerAttack = 0;
    var currentAttack = 0;
    var wins = 0;
    var restartBtn = $("<button>Restart</button>");

    function makeRestartBtn() {
        restartBtn.addClass("btn btn-success");
        $("#restart").append(restartBtn);
    }

    function attackTime () {
        currentAttack += heroAttack;
        heroHealth -= challengerAttack;
        if (heroHealth<=0) {
            isHeroDefeated = true;
            $("#message-box").append("You lost!");
            makeRestartBtn();
        };

        challengerHealth -= currentAttack;
        if (challengerHealth<=0 && heroHealth >0) {
            wins ++;
            $(challenger).attr("class", "red-border img");
            $("#challenger-box").empty();
            $("#enemy-box").append(challenger);
            isChallengerDefeated = true;
            $("#message-box").append("You defeated your opponent! Choose another challenger");
        } 
        $("#attack-nar").text("You attacked for " + currentAttack + " damage! Your opponent attacked and you took " + challengerAttack + " damage!");
        $("#hero-health").text("Your health: " + heroHealth);
        $("#challenger-health").text("Challenger health: " + challengerHealth);
    } ;

    function chooseNewChallenger() {
        isChallengerChosen= false;
        isChallengerDefeated = false;
        challenger = "";
        challengerId = "";
        challengerHealth = 0;
        $("#challenger-health, #attack-button, #attack-nar").empty();
    };

    function youWon() {
        $("#attack-nar").empty();
        $("#message-box").text("You have defeated all 3 enemies! You win!");
        makeRestartBtn();
    };


    $(".pony").on("click", function() {
        if (isHeroChosen) {
            return false;
        } else {
        $("#enemy-box").append(celestia, discord, twilight, nightmare);
        $("#hero-box").append(this);
        hero = this;
        heroId = $(this).attr("id");
        heroHealth = parseInt($(this).attr("value"));
        heroAttack = parseInt($(this).attr("attack"));
        $("#hero-health").append("Your health: " + heroHealth);
        isHeroChosen= true; 
        console.log(hero);
        }
    });

    $(".pony").on("click", function chooseChallenger(){
        if (isChallengerChosen || this===hero || isHeroChosen===false) {
            return false;
        } 
        $("#message-box").empty();
        $("#challenger-box").append(this);
        challenger = this;
        challengerId= $(this).attr("id");
        isChallengerChosen = true;
        challengerHealth = parseInt($(this).attr("value"));
        challengerAttack = parseInt($(this).attr("attack"));
        $("#challenger-health").append("Challenger health: " + challengerHealth);
        $("#attack-button").append("<button>ATTACK!</button>");
        
    }); 


    $("#attack-button").on("click", function() {
        if (isChallengerDefeated || allEnemiesDefeated || isHeroDefeated) {
            return false;
        } else {
            attackTime();
        }
        if (isChallengerDefeated) {
            chooseNewChallenger();
        }
        if (wins===3) {
            youWon();
        }
   
    });

    $("#restart").on("click", function () {
        document.location.reload(true);
    });


}); //closes document.ready

//dustin created an object of methods. had  variable operator is the string