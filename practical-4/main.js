
let dices = 6;

let winner = document.getElementById('winner');
let firstPlayerRandomDice;
let secondPlayerRandomDice;

function roll1(){
   firstPlayerRandomDice = Math.floor(Math.random() * dices + 1);
let firstPlayerRandomImage = 'media/dice' + firstPlayerRandomDice + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstPlayerRandomImage);
}

function roll2(){
   secondPlayerRandomDice = Math.floor(Math.random() * dices + 1);
let secondPlayerRandomImage = 'media/dice' + secondPlayerRandomDice + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondPlayerRandomImage); 
showWinner();
}

function showWinner(){
    if (firstPlayerRandomDice > secondPlayerRandomDice) {
        winner.innerHTML = "First player wins";
    }else if (firstPlayerRandomDice < secondPlayerRandomDice) {
        winner.innerHTML = "Second player wins";
    }else {
        winner.innerHTML = "Its a draw";
    }
}



