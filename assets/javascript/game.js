$(document).ready(function(){

//set all ids to variables
    
    var twilightImg = $("#twilight");
    var celestiaImg = $("#celestia");
    var discordImg = $("#discord");
    var nightmareImg = $("#nightmare");
    
    //var health = 0;
    //var attack = 0;
    //var loserImg = "";

    //var heroSelect = "";
  /*  var twilight =  {
            health: 180,
            attack:  14,
            loserImg: "assets/images/twilight-defeated.jpeg",
        };
    var celestia =  {
            health: 420,
            attack: 22,
            loserImg: "assets/images/celestia-defeated.png"
        };
    var discord=  {
            health: 260,
            attack: 18,
            loserImg: "assets/images/discord-defeated.png"
        };
    
    var nightmare = {
            health: 200,
            attack: 10,
            loserImg: "assets/images/nightmare-defeated.png"
        }; */

       /* var twilight = {};
        var celestia = {};
        var discord = {};
        var nightmare = {}; */
        
    var allPonies = {
        twilight: {
            health: 180,
            attack:  14,
            loserImg: "assets/images/twilight-defeated.jpeg",
        },
        celestia:  {
            health: 420,
            attack: 22,
            loserImg: "assets/images/celestia-defeated.png"
        },
        discord:  {
            health: 260,
            attack: 18,
            loserImg: "assets/images/discord-defeated.png"
        },
        nightmare: {
            health: 200,
            attack: 10,
            loserImg: "assets/images/nightmare-defeated.png"
        }
    }
/*
    var allPonies = {
        health: {
            twilight: 180,
            celestia: 420,
            discord: 260,
            nightmare: 200,
        },
        attack: {
            twilight: 14,
            celestia: 22,
            discord: 260,
            nightmare: 200,
        },
        loserImg: {
            twilight: "assets/images/twilight-defeated.jpeg",
            celestia: "assets/images/celestia-defeated.png",
            discord: "assets/images/discord-defeated.png",
            nightmare: "assets/images/nightmare-defeated.png"
        },
    };
*/
     
   //var pleaseWork = allMyPonies[twilight](18, 7);
   //console.log(pleaseWork);
    
/*
    var images = ["twilight.png", "celestia.png", "nightmare.png", "discord.png"];
    for (i=0; i<images.length; i++) {
        var createImage = $("<img>");
        createImage.attr("src", "assets/images/" + images[i]);
        createImage.addClass("img pony");
        $("#option-box").append(createImage);
    }  */
    
   /* var heroAttacks = {
        twilight: function(challengerHealth, ) {
            return 
        }

    };

*/
    
    var isHeroChosen = false;
    var isChallengerChosen = false;
    var isChallengerDefeated = false;
    var isHeroDefeated = false;
    //var hero = {};
    //var challenger = {};
    //var heroSelect = "";
    var hero = {};
    var challenger = "";
   // var challengerSelect = "";
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
/*

    function heroAttack() {
        if (isHeroDefeated) {
            return;
        }
        currentAttack += allPonies.attack.hero;
        allPonies.health.challenger -= currentAttack;
        $("#attack-nar").text("You attacked for " + currentAttack + " damage!")
        $("#challenger-health").text(allPonies.health.challenger);
        if (allPonies.health.challenger<=0 && allPonies.health.hero >0) {
            challengerDied();            
        };
    }
    function counterAttack() {
        if (isChallengerDefeated) {
            return;
        }
        allPonies.health.hero -= allPonies.attack.challenger;
        if (allPonies.health.hero<=0) {
            isHeroDefeated = true;
            $("#message-box").append("You lost!");
            $(".hero-class").attr("src", allPonies.loserImg.hero);
            makeRestartBtn();
        };
        $("#attack-nar").append("Your opponent attacked and you took " + allPonies.attack.challenger + " damage!");
        $("#hero-health").text(allPonies.health.hero);
    } ;
    */

    function challengerDied() {
        wins ++;
       // $(".challenger-class").attr("src", allPonies.challenger.loserImg);
        $("#challenger-box").empty();
        $("#enemy-body").append(myChallenger);
        isChallengerDefeated = true;
        $("#message-box").append("You defeated your opponent! Choose another challenger");
    }

    function chooseNewChallenger() {
        isChallengerChosen= false;
        isChallengerDefeated = false;
        challenger = "";
        //challengerHealth = 0;
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
           // heroSelect = $(this).attr("value");
           // console.log(heroSelect);
            //console.log(allMyPonies.heroSelect.health);
            myHero= this;
           // hero = $(this).val();
            //heroSelect = $(this).val();
            //heroSelect = twilight;
            //hero = allPonies.twilight;
            //console.log(hero);
            //console.log(allMyPonies[hero]());
           hero = allPonies[$(this).val()];
            console.log(allPonies[$(this).val()]);
            //hero = allPonies["twilight"];
            console.log($(this).val());
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
        if (isHeroChosen) {
            myChallenger = this;
            //challenger = $(this).val();
           // challenger = discord;
           // challengerSelect = $(this).val();
           // challenger = allPonies.challengerSelect;
           challenger = allPonies[$(this).val()];
            $(this).attr("class", "challenger-class");
            isChallengerChosen = true;
            $("#challenger-body").append(this);
            $("#challenger-health").append(challenger.health);
            $("#attack-button").append(attackBtn);
        } 
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