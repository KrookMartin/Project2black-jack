let cardDeck;

let cardType = ['C', 'D', 'H', 'S'];
 let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K'];
 

 window.onload = function() {
     createDeck();
     cardShuffle();
 }
 /**
  * Loops thru all values and pairs cardType and cardValue and creats an array
  */
 function createDeck() {

    let cardType = ['C', 'D', 'H', 'S'];
    let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K'];
    cardDeck = [];   


     for(let i = 0; i < cardType.length; i++) {
         for(j = 0; j < cardValue.length; j++){
             cardDeck.push(cardValue[j] + '-' + cardType[i]); 
         }
     }
     console.log(cardDeck);
 }

 function cardShuffle () {
     for(let i = 0; i <cardDeck.length; i++){
        let j = Math.floor(Math.random() * cardDeck.length);
        let swap = cardDeck[i];
        cardDeck[i] = cardDeck[j];
        cardDeck[j] = swap;
     }
     console.log(cardDeck);
    }