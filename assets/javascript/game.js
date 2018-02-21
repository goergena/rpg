$(document).ready(function(){

//set all ids to variables
    var twilight = $("#twilight");
    var celestia = $("#celestia");
    var discord = $("#discord");
    var nightmare = $("#nightmare");
    var runAndHide = 6;

    twilight.attr("attack", 14);
    twilight.attr("loser-img", "assets/images/twilight-defeated.jpeg");
    celestia.attr("attack", 22);
    celestia.attr("loser-img", "assets/images/celestia-defeated.png");
    discord.attr("attack", 18);
    discord.attr("loser-img", "assets/images/discord-defeated.png");
    nightmare.attr("attack", 10);
    nightmare.attr("loser-img", "assets/images/nightmare-defeated.png");
  
    var isHeroChosen = false;
    var isChallengerChosen = false;
    var isChallengerDefeated = false;
    var isHeroDefeated = false;
    var hero = "";
    var challenger = "";
    var heroHealth = 100;
    var challengerHealth = 100;
    var heroAttack = 0;
    var challengerAttack = 0;
    var currentAttack = 0;
    var wins = 0;
    var restartBtn = $("<button>Restart</button>");
    var attackBtn = $("<button>ATTACK!</button>");
    attackBtn.attr("type", "button");
    attackBtn.addClass("btn btn-dark");
    var heroLoserImg = "";
    var chalLoserImg = "";

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
            heroLoserImg = $(hero).attr("loser-img");
            $(hero).attr("src", heroLoserImg);
            makeRestartBtn();
        };

        challengerHealth -= currentAttack;
        if (challengerHealth<=0 && heroHealth >0) {
            wins ++;
            chalLoserImg = $(challenger).attr("loser-img");
            $(challenger).attr("src", chalLoserImg);
            $(challenger).removeClass("pony");
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
        $(hero).addClass("selected-img");
        heroHealth = parseInt($(this).attr("value"));
        heroAttack = parseInt($(this).attr("attack"));
        $("#hero-health").append("Health: " + heroHealth);
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
        $(challenger).addClass("selected-img");
        isChallengerChosen = true;
        challengerHealth = parseInt($(this).attr("value"));
        challengerAttack = parseInt($(this).attr("attack"));
        $("#challenger-health").append("Challenger Health: " + challengerHealth);
        $("#attack-button").append(attackBtn);
        
    }); 


    $("#attack-button").on("click", function() {
        if (isChallengerDefeated || isHeroDefeated) {
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