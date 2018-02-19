$(document).ready(function(){

//set all ids to variables


    var twilight = $("#twilight");
    var celestia = $("#celestia");
    var discord = $("#discord");
    var nightmare = $("#nightmare");


  
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
   // var heroHealthNum = 0; 
   // var challengerHealthNum = 0; 


    function attackTime () {
        if (heroId==="twilight"){
            heroAttack = 5;
        } else if (heroId==="celestia"){
            heroAttack = 20;
        } else if (heroId==="discord"){
            heroAttack = 15;
        } else if (heroId==="nightmare"){
            heroAttack = 10;
        } 
        if (challengerId==="twilight"){
            challengerAttack = 5;
        } else if (challengerId==="celestia"){
            challengerAttack = 20;
        } else if (challengerId==="discord"){
            challengerAttack = 15;
        } else if (challengerId==="nightmare"){
            challengerAttack = 10;
        }

        currentAttack += heroAttack;
        console.log("hero attack: " + heroAttack + " challenger attack: " + challengerAttack + "current Attack: " + currentAttack);
        heroHealth -= challengerAttack;
        if (heroHealth<=0) {
            isHeroDefeated = true;
            $("#message-box").append("You lost!");
        }
        console.log("hero health: " + heroHealth);
        challengerHealth -= currentAttack;
        if (challengerHealth<=0 && heroHealth >0) {
            $(challenger).attr("class", "red-border");
            $("#challenger-box").empty();
            $("#enemy-box").append(challenger);
            isChallengerDefeated = true;
            console.log(isChallengerDefeated);
            $("#message-box").append("you defeated your opponent! choose another challenger");
        } 
        console.log("challenger health: " + challengerHealth);
        $("#hero-health").text("Your health: " + heroHealth);
        $("#challenger-health").text("Challenger health: " + challengerHealth);
    
    } 

    function chooseNewChallenger() {
        isChallengerChosen= false;
        isChallengerDefeated = false;
        challenger = "";
        challengerId = "";
        challengerHealth = 0;
        $("#challenger-health, #attack-button").empty();
    }


    $(".pony").on("click", function() {
        if (isHeroChosen) {
            return false;
        } else {
        $("#enemy-box").append(celestia, discord, twilight, nightmare);
        $("#hero-box").append(this);
        hero = this;
       // $(this).attr("class", "heroClass");
        heroId = $(this).attr("id");
        heroHealth = parseInt($(this).attr("value"));
        $("#hero-health").append("Your health: " + heroHealth);
        isHeroChosen= true; 
       // $(".heroClass").attr("value", "22");
        console.log(hero);
        }
    });

    $(".pony").on("click", function chooseChallenger(){
        if (isChallengerChosen || this===hero || isHeroChosen===false) {
            return false;
        } else {
        $("#message-box").empty();
        $("#challenger-box").append(this);
        challenger = this;
        challengerId= $(this).attr("id");
        isChallengerChosen = true;
        challengerHealth = parseInt($(this).attr("value"));
        $("#challenger-health").append("Challenger health: " + challengerHealth);
        $("#attack-button").append("<button>ATTACK!</button>");
        };
    }); 


    $("#attack-button").on("click", function() {
        if (isChallengerDefeated || allEnemiesDefeated || isHeroDefeated) {
            return false;
       /* }
        if (heroHealth<=0) {
            isHeroDefeated = true;
            $("#message-box").text("You lost!");
            return;
        } else if (challengerHealth<=0) {
            $(challenger).attr("class", "red-border");
            $("#challenger-box").empty();
            $("#enemy-box").append(challenger);
            isChallengerDefeated = true;
            $("#message-box").text("you defeated your opponent! choose another challenger");
            //chooseNewChallenger(); */
        } else {
        attackTime();}
        if (isChallengerDefeated) {
            chooseNewChallenger();
        }
   
    });


/*
    if (heroHealth<=0) {
        isHeroDefeated = true;
        $("#message-box").append("You lost!");
    }
     if (challengerHealth<=0 && heroHealth >0) {
        $(challenger).attr("class", "red-border");
        $("#challenger-box").empty();
        $("#enemy-box").append(challenger);
        isChallengerDefeated = true;
        $("#message-box").append("you defeated your opponent! choose another challenger");
    } 
    if (isChallengerDefeated) {
        chooseNewChallenger();
    } */




}); //closes document.ready


//you should use return fase.
//isFighterChosen = false
//inside of my normal function first write
//if (isFighterChosen) {
 //   return false;
//} return false exits the function.
//if (!fighter || )

//dustin created an object of methods. had  variable operator is the string