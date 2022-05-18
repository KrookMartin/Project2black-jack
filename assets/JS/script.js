let cardDeck;

let cardType = ['C', 'D', 'H', 'S'];
 let cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K'];
 

 window.onload = function() {
     createDeck();
 }
 /**
  * 
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