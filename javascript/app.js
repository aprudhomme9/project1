/**********************************
Create a card class
Create a deck array (array of objects)
Use two for loops to loop through values and suits and push into deck array
Instantiate each card by using the Card constructor method
Include weight for J Q K A
**********************************/
console.log("running");
class Card {
	constructor(suit, value, weight) {
		this.suit = suit;
		this.value = value;
		this.weight = weight;
	}
};

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suits = ['hearts', 'diamonds', 'spades', 'clubs'];

const deck = [];

const buildDeck = () => {
	for(let i = 0; i < values.length; i++) {
		for(let j = 0; j < suits.length; j++) {
			let weight = parseInt(values[i]);
			if(values[i] === 'J' || values[i] === 'Q' || values[i] === 'K') {
				weight = 10;
			}	else if(values[i] === 'A') {
				weight = 11;
			}
			let card = new Card(suits[j], values[i], weight);
			deck.push(card);
		} 
	} 
}

buildDeck();
// console.log(deck);

/********* 
shuffle using fisher-yates
generate random int
set temporary card to array[index]
set array[index] to array[random int]
set array[random int] to temporary card
return array
**********/ 

// const shuffle = (array) => {
// 	for(i = array.length - 1; i > 0; i--) {
// 		let rand = Math.floor(Math.random() * i);
// 		let temp = array[i];
// 		array[i] = array[rand];
// 		array[rand] = temp;

// 	} return array;
// }

// shuffle(deck);
// console.log(deck);


// build player object

const player = {
	name: "",
	hand: [],
	hit () {

	},
	stay() {

	},
	doubleDown() {

	},
	split() {

	}

}

const dealer = {
	hand: [],
	hit() {

	}
}

// begin building game object
const cardsAvailable = deck;
const game = {
	shuffle(array) {
		for(i = array.length - 1; i > 0; i--) {
			let rand = Math.floor(Math.random() * i);
			let temp = array[i];
			array[i] = array[rand];
			array[rand] = temp;

		} return array;
	},

	deal() {
		for(let i = 0; i < 2; i ++) {
			player.hand.push(cardsAvailable[0]);
			cardsAvailable.splice(0, 1);
			dealer.hand.push(cardsAvailable[0]);
			cardsAvailable.splice(0,1);
		}
	}
};



game.shuffle(cardsAvailable);
game.deal();
console.log(player.hand);
console.log(dealer.hand);
console.log(cardsAvailable);