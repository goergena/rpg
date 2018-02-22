$(document).ready(function(){

//set all ids to variables
    
    var twilightImg = $("#twilight");
    var celestiaImg = $("#celestia");
    var discordImg = $("#discord");
    var nightmareImg = $("#nightmare");
     
        
    var allPonies = {
        twilight: {
            health: 180,
            attack:  14,
            loserImg: "twilight-defeated.jpeg",
        },
        celestia:  {
            health: 420,
            attack: 22,
            loserImg: "celestia-defeated.png"
        },
        discord:  {
            health: 260,
            attack: 18,
            loserImg: "discord-defeated.png"
        },
        nightmare: {
            health: 200,
            attack: 10,
            loserImg: "nightmare-defeated.png"
        }
    };
    
    var isHeroChosen = false;
    var isChallengerChosen = false;
    var isChallengerDefeated = false;
    var isHeroDefeated = false;
    var hero = "";
    var challenger = "";
    var myHero = "";
    var myChallenger = "";
    var currentAttack = 0;
    var wins = 0;
    var restartBtn = $("<button>Restart</button>");
    var attackBtn = $("<button>ATTACK!</button>");
    attackBtn.attr("type", "button");
    attackBtn.addClass("btn btn-dark");


    function makeRestartBtn() {
        restartBtn.addClass("btn btn-success");
        $("#restart").append(restartBtn);
    }

    function heroAttack() {
        if (isHeroDefeated) {
            return;
        }
        currentAttack += hero.attack;
        challenger.health -= currentAttack;
        $("#attack-nar").text("You attacked for " + currentAttack + " damage!")
        $("#challenger-health").text(challenger.health);
        if (challenger.health<=0 && hero.health >0) {
            challengerDied();            
        };
    }
    function counterAttack() {
        if (isChallengerDefeated) {
            return;
        }
        hero.health -= challenger.attack;
        if (hero.health<=0) {
            isHeroDefeated = true;
            $("#message-box").append("You lost!");
            $(".hero-class").attr("src", hero.loserImg);
            makeRestartBtn();
        };
        $("#attack-nar").append("Your opponent attacked and you took " + challenger.attack + " damage!");
        $("#hero-health").text(hero.health);
    } ;

    function challengerDied() {
        wins ++;
        $(".challenger-class").html("<img src=assets/images/" + challenger.loserImg + ">")
        $("#challenger-box").empty();
        $("#enemy-body").append(myChallenger);
        isChallengerDefeated = true;
        $("#message-box").append("You defeated your opponent! Choose another challenger");
    }

    function chooseNewChallenger() {
        isChallengerChosen= false;
        isChallengerDefeated = false;
        challenger = "";
        myChallenger = "";
        console.log(challenger);
        console.log(isChallengerChosen);
        $("#challenger-health, #attack-button, #attack-nar").empty();
    };

    function youWon() {
        $("#attack-nar").empty();
        $("#message-box").text("You have defeated all 3 enemies! You win!");
        makeRestartBtn();
    };

        
    $(".pony").on("click", function chooseHero(){
        if (isHeroChosen) {
            return false;
        }
            myHero= this;
            hero = allPonies[$(this).val()];
            heroIsHere();
            $("#hero-body").append(this);
            $("#hero-health").append(hero.health);
            $(this).attr("class", "hero-class");
            isHeroChosen = true;
            //when you choose a hero, you generate the enemy and hero boxes everyone goes to the enemies      
    }); 

    $(".pony").on("click", function chooseChallenger(){
        if (isChallengerChosen || this===myHero) {
            return false;
        }
            myChallenger = this;
            challenger = allPonies[$(this).val()];
            $(this).attr("class", "challenger-class");
            isChallengerChosen = true;
            $("#challenger-body").append(this);
            $("#challenger-health").append(challenger.health);
            $("#attack-button").append(attackBtn); 
    });

    function heroIsHere () {
        $("#enemy-box").removeClass("hidden");
        $("#enemy-body").append(twilightImg, celestiaImg, discordImg, nightmareImg);
        $("#hero-box").removeClass("hidden");
       // $("#hero-health").append(hero.health);
        $("#challenger-box").removeClass("hidden");
    };

    $("#attack-button").on("click", function() {
        if (isChallengerDefeated || isHeroDefeated) {
            return false;
        } else {
            heroAttack();
            counterAttack();
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