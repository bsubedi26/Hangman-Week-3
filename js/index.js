var words = {
    "korea": {
        picture: "korea.jpg"
    },
    "ukraine": {
        picture: "ukraine.jpg"
    },
    "brazil": {
        picture: "brazil.jpg"
    },
    "nepal": {
        picture: "nepal.jpg"
    },
    "vietnam": {
        picture: "vietnam.jpg"
    },
    "norway": {
        picture: "norway.jpg"
    },
    "denmark": {
        picture: "denmark.jpg"
    },
    "hungary": {
        picture: "hungary.jpg"
    },
    "mexico": {
        picture: "mexico.jpg"
    },
    "egypt": {
        picture: "egypt.jpg"
    },
    "france": {
        picture: "france.jpg"
    },
    "germany": {
        picture: "germany.jpg"
    }
}
var wordKeys = Object.keys(words);
var randomWord = wordKeys[Math.floor(Math.random() * wordKeys.length)];
var randomWordSplit = randomWord.split(''); //Array value
var wrong = 9;
var matchedLetters = [];
var win = [];
var loss = [];
var correctWord = randomWord.split('');
//Display correct amount of underscores
for (var i = 0; i < randomWordSplit.length; i++) {
    randomWordSplit[i] = "_ ";
}
$("#wordbox").append(randomWordSplit);
document.onkeyup = function(e) {
    var userKeyPress = String.fromCharCode(e.keyCode).toLowerCase(); //string value
    var wordIndex = correctWord.indexOf(userKeyPress); //Number value
    console.log(wordIndex);
    //Wrong Guess
    if (wordIndex < 0) {
        //No duplicate letters
        if (!(loss.includes(userKeyPress))) {
            loss += userKeyPress;
            $('#chancesLeft').html("Number of remaining chances: " + wrong--);
            $('#wrongLetters').html("Wrong Letters: " + loss);
        }
    }
    if (wordIndex >= 0) {
        //No duplicate letters (if statement)
        randomWordSplit.splice(wordIndex, 1, correctWord[wordIndex]);
        $("#wordbox").html(randomWordSplit);
        console.log("^^^Correct index number of word");
        if (!(win.includes(userKeyPress))) {
            win += userKeyPress;
        }
        if (win.length === correctWord.length) {
            confirm("Winner! Try again?");
            location.reload();
        }
    }
    if (wrong === -1) {
        confirm("You Lost! Try again?");
        location.reload();
    }
};