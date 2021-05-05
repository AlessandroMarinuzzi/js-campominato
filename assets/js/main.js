// ******CAMPO MINATO****************************************
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// ***********************************************************

// Computer must generate 16 random numbers between 1 and 100.
// Let's first create a function to generate a random number.
function randomNumbers (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Let's create difficulty levels to pick limits from and change max attempts number in accordance to the choice.
var level = parseInt(prompt("Choose Difficulty Level: [0/1/2]"));
var limit;
switch (level) {

    case 1:
        // 80 numbers

        //number = randomNumbers(1, 80);
        limit = 80;
        break;

    case 2:
        // 50 numbers
        //number = randomNumbers(1, 50);
        limit = 50;
        break;

    default:
        // 100 numbers
        //number = randomNumbers(1, 100);
        limit = 100;
        break;
}
console.log(limit);
// Let's create an array to contain the 16 random numbers
var bombs = [];

// Let's use our function in a While cycle to repeat the process till we get 16 numbers. 
// Numbers must be all different.
while (bombs.length < 16){
    var pcNumber = randomNumbers(1, limit)
    // Let's verify all numbers in the array are different and if so push them into the array.
    if (!bombs.includes(pcNumber)){
        bombs.push(pcNumber)
    }

}
console.log(bombs);

// Let's ask the user for (100-16) times to insert always a different number till the end, obviously within 1-100 range.
// Let's create an array to contain the user number.
var userArray = [];

// Let's create a FOR Cycle to repeat the request.
for (i = 1; i <= (limit - 16); i ++){
    var userNumber = parseInt(prompt("Insert a number between 1 and " + limit + "."))
    
    // We now need to verify through a WHILE cycle if the number inserted respects all prompt criterias.
    while (userNumber < 1 || userNumber > limit || isNaN(userNumber)){
        alert("You must insert a valid number to play!")
        userNumber = parseInt(prompt("Insert a number between 1 and " + limit + "."))
    }

    // We also need to verify if the numbers inserted match the numbers contained in the bombs array.
    if (!userArray.includes(userNumber)){
        if(bombs.includes(userNumber)){
            alert("You picked a bomb! You Lost! Your Score is:" + userArray.length);
            break;
        }
        userArray.push(userNumber);
        console.log(userArray);

    } else {
        alert("You already inserted this number!");
        i--;
    }

}


if(userArray.length === (limit - 16)) {
    alert("You Won! Your Score:" + userArray.length);
}
