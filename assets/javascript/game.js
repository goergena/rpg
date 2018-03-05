$(document).ready(function () {

    //set all ids to variables
    var twilightImg = $("#twilight");
    var celestiaImg = $("#celestia");
    var discordImg = $("#discord");
    var nightmareImg = $("#nightmare");


    var allPonies = {
        twilight: {
            health: 180,
            attack: 14,
            counter: 30,
            loserImg: "twilight-defeated.jpeg",
        },
        celestia: {
            health: 350,
            attack: 16,
            counter: 40,
            loserImg: "celestia-defeated.png"
        },
        discord: {
            health: 200,
            attack: 18,
            counter: 25,
            loserImg: "discord-defeated.png"
        },
        nightmare: {
            health: 250,
            attack: 16,
            counter: 10,
            loserImg: "nightmare-defeated.png"
        }
    };

    var hero = "";
    var challenger = "";
    var myChallenger = "";
    var currentAttack = 0;
    var wins = 0;
    var restartBtn = $("<button>Restart</button>");
    var attackBtn = $("<button>ATTACK!</button>");
   // attackBtn.attr("type", "button");
    attackBtn.addClass("btn btn-dark");

    function heroAttack() {
        currentAttack += hero.attack;
        challenger.health -= currentAttack;
        $("#attack-nar").text("You attacked for " + currentAttack + " damage!")
        $("#challenger-health").text(challenger.health);
        if (challenger.health <= 0 && hero.health > 0) {
            challengerDied();
        };

    }

    function counterAttack() {
        if (challenger.health > 0) {
            hero.health -= challenger.counter;
            if (hero.health <= 0) {
                $("#message-box").append("You lost!");
                $(".hero-class").html("<img src=assets/images/" + hero.loserImg + ">");
                makeRestartBtn();
                $("#attack-button").empty();
            };
            $("#attack-nar").append("<div>Your opponent attacked and you took " + challenger.counter + " damage!</div>");
            $("#hero-health").text(hero.health);
        }
    };

    function challengerDied() {
        wins++;
        $(".challenger-class").html("<img src=assets/images/" + challenger.loserImg + ">");
        $(".challenger-class").attr("class", "defeated-class");
        $("#challenger-body, #challenger-health, #attack-button").empty();
        $("#enemy-body").append(myChallenger);
        //isChallengerDefeated = true;
        $("#message-box").append("You defeated your opponent! Choose another challenger");
        challenger = "";
        myChallenger = "";
    }

    function youWon() {
        $("#attack-nar").empty();
        $("#message-box").text("You have defeated all 3 enemies! You win!");
        makeRestartBtn();
    };

    function makeRestartBtn() {
        restartBtn.addClass("btn btn-success");
        $("#restart").append(restartBtn);
    }


    $(".pony").on("click", function () {
        if (!hero) {
            hero = allPonies[$(this).val()];
            heroIsHere();
            $("#hero-body").append(this);
            $("#hero-health").append(hero.health);
            $(this).attr("class", "hero-class btn-block");
        }
        //when you choose a hero, you generate the enemy and hero boxes everyone goes to the enemies      
    });

    $("#enemy-box").on("click", ".pony", function chooseChallenger() {
        if (!myChallenger) {
            $("#message-box, #attack-nar").empty();
            myChallenger = this;
            challenger = allPonies[$(this).val()];
            $(this).attr("class", "challenger-class btn-block");
            $("#challenger-body").append(this);
            $("#challenger-health").append(challenger.health);
            $("#attack-button").append(attackBtn);
        }
    });

    function heroIsHere() {
        $("#enemy-box").removeClass("hidden");
        $("#enemy-body").append(twilightImg, celestiaImg, discordImg, nightmareImg);
        $("#hero-box").removeClass("hidden");
        $("#challenger-box").removeClass("hidden");
    };

    $("#attack-button").on("click", function () {
        heroAttack();
        counterAttack();
        if (wins === 3) {
            youWon();
        }
    });

    $("#restart").on("click", function () {
        document.location.reload(true);
    });

}); //closes document.ready