//create the word array

var words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

//variable array to store computer choice
var computerChoice = [];

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
    //now let the computer make a random choice from the word array when you press any key
    document.onkeyup = function(event) {
        var computerChoice = words[Math.floor(Math.random() * words.length)].split("");

    //write dashes in the displayArray for each letter in the chosen word
    for (var i=0; i<computerChoice.length; i++) {
        displayArray.push("_")
        }
    alert("Guess letter using keyboard")
    }

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if (computerChoice[i] === userGuess) {
            displayArray[i] = userGuess
            correctGuess = true
        }
        else {
            correctGuess = false
            guessedLetters.push ("userGuess" + ", ");
            guessesLeft = guessesLeft - 1
            document.getElementById("guesses-left").innerHTML = guessesLeft;


}

//function checkLetter(){
    //var userGuess = "";
    //var correctGuess = false
    for (var i = 0; i < computerChoice.length; i++ ) {
       

        }
    }
    if (incorrectGuess) {
        //decrement guesses
            //gheck if that was the last 
    }

}
