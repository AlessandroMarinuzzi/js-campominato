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
console.log(randomNumbers(1, 100));
// Let's create an array to contain the 16 random numbers
var bombs = [];

// Let's use our function in a While cycle to repeat the process till we get 16 numbers. 
// Numbers must be all different.
while (bombs.length < 16){
    var pcNumber = randomNumbers(1, 100)

    if (!bombs.includes(pcNumber)){
        bombs.push(pcNumber)
    }

}
console.log(bombs);