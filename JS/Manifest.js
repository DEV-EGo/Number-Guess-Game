$(document).ready(function () {
    var ComPick = Math.floor(Math.random() * 4) + 1;
    var LockTheGame = false;

    // Logging the Computers pick inside the console log incase i have to troubel shoot

    console.log(" Computer pick " + ComPick);

    // creating the "Click" event that receives the users pick

    $(".btn-choice").on("click", function () {

        // this line will prevent the user from changing the option after the game is done

        var UserPick = $(this).val();
        console.log(" you have chosen " + UserPick);

        // this line reveals the computer choice inside the html

        // if the choice matches the computers pick this line of code will let you know

        if (parseInt(UserPick) === ComPick) {
            $("#result").text(" BINGO! YOU GOT IT!! Refresh to play again");
            LockTheGame = true;

        }
        // if the choice doesnt match, this line of code will run

        else {
            $("#result").text(" Nope! refresh and try again");
            LockTheGame = true;
        }

    });
});