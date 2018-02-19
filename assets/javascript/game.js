$(document).ready(function(){

//set all ids to variables

    var twilight = $("#twilight");
    var celestia = $("#celestia");
    var discord = $("#discord");
    var nightmare = $("#nightmare");

    var ponyStats = {
        //nest functions
    }

    isHeroChosen = false;
    isChallengerChosen = false;
    isEnemyDefeated = false;
    var hero = "";


    $(".pony").on("click", function() {
        if (isHeroChosen) {
            return false;
        }
        $("#enemy-box").append(celestia, discord, twilight, nightmare);
        $("#hero-box").append(this);
        hero = this;
         isHeroChosen= true; 
    });
    $(".pony").on("click", function(){
        if (isChallengerChosen || this===hero) {
            return false;
        }
        $("#challenger-box").append(this);
        challenger= this;
        isChallengerChosen = true;
    })
    


}); //closes document.ready


//you should use return fase.
//isFighterChosen = false
//inside of my normal function first write
//if (isFighterChosen) {
 //   return false;
//} return false exits the function.
//if (!fighter || )

//dustin created an object of methods. had  variable operator is the string