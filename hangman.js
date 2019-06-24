//create the word array

$(document).ready(function() {

var words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

//variable array to store computer choice
var computerChoice;

//variable array to store the user's guessed letters, starts as dashes
var displayArray = [];

//variable to store wrong guesses
var guessedLetters = [];

//variable to store the number of remaining guesses
var guessesLeft = 5;

//how the game starts and resets
alert("Press Any Key To Start");

function resetGame() {
    guessesLeft = 5;
    guessedLetters = [];
    displayArray = [];
    document.getElementById("guessed-letters").innerHTML = " "
    document.getElementById("guesses-left").innerHTML = "5"

    //now let the computer make a random choice from the word array when you press any key
    computerChoice = words[Math.floor(Math.random() * words.length)].split("");
    console.log(computerChoice)
    //reset the targetword as blank
    document.getElementById("targetWord").innerHTML = " "

    //document.onkeyup = function(event) {
    //write dashes in the displayArray for each letter in the chosen word
    
    
    for (var i=0; i<computerChoice.length; i++) {
        
        displayArray.push("_ ")
        document.getElementById("targetWord").innerHTML += "_ ";
        }
    alert("Guess letter using keyboard")
    //}
    var userGuess;
    var correctGuess = false
    
    document.onkeyup = function(event) {
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //console.log(userGuess)
        for (var i=0; i<computerChoice.length; i++) { 
        if (computerChoice[i] === userGuess) {
            displayArray[i] = userGuess
            correctGuess = true
            document.getElementById("targetWord").innerHTML = displayArray.join(" ");
            //console.log(displayArray)
            if (victory(displayArray,computerChoice)) {
                alert("YOU WIN!!!!")
                resetGame();
            }

        }
    }

    if (correctGuess === false) {
        guessedLetters.push ("userGuess" + ", ");
        guessesLeft = guessesLeft - 1
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("guessed-letters").innerHTML += userGuess + " ";
        if (guessesLeft === 0) {
            alert("GAME OVER!!!");
            resetGame();
        }
        
    }
    correctGuess = false
}

    function victory(array1,array2) {
        for (var i=0; i<array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            } 
        }
        return true;
    }


//function checkLetter(){
    //var userGuess = "";
    //var correctGuess = false
   // for (var i = 0; i < computerChoice.length; i++ ) {
       

     //   }
    //}
    //if (incorrectGuess) {
        //decrement guesses
            //gheck if that was the last 
   // }
}


resetGame();

});

