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
const cardsAvailable = deck;
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

MOVED SHUFFLE FUNCTION INTO GAME OBJECT AS GAME METHOD
**********/ 

const player = {
	name: "",
	hand: [],
	getHandVal () {
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			total = total + this.hand[i].weight;
		} 
		return total;
	},
	hit () {
		this.hand.push(cardsAvailable[0]);
		cardsAvailable.splice(0, 1);
	},
	stay() {
		return true;
	},
	doubleDown() {

	},
	split() {

	}

}

const dealer = {
	hand: [],
	getHandVal () {
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			total = total + this.hand[i].weight;
		} 
		return total;
	},
	hit() {
		if(this.getHandVal() <= 17 && this.getHandVal() <= player.getHandVal()) {
			this.hand.push(cardsAvailable[0]);
			cardsAvailable.splice(0, 1);
		}
	}
}

// begin building game object
const game = {
	check() {
		if(player.stay() && this.dealerWins() === false) {
			dealer.hit();
		} this.updateStats();
	},
	playerWins() {
		if(player.getHandVal() <= 21 && player.getHandVal() > dealer.getHandVal()) {
			return true;
		}
	},
	dealerWins() {
		if(dealer.getHandVal() > player.getHandVal() && dealer.getHandVal() <= 21) {
			return true;
		}
	}, 
	updateStats() {
		// just testing to make sure we can compare hand values and get a result after one deal
		if(player.getHandVal() <= 21 && player.getHandVal() > dealer.getHandVal()) {
			console.log('player wins');
		} else if(dealer.getHandVal() <= 21 && dealer.getHandVal() > player.getHandVal()) {
			console.log('dealer wins');
		} else if(dealer.getHandVal() === player.getHandVal()) {
			console.log('push');
		} else if(dealer.getHandVal() > 21) {
			console.log('dealer busts')
		} else {
			console.log('player busts')
		}
	},
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
			$('#playerHand').text(player.getHandVal());
			$('#dealerHand').text(dealer.getHandVal());
	}
};

$('#playerHand').on('click', () => {
	player.hit();
	$('#playerHand').text(player.getHandVal());
})

game.shuffle(deck);
game.deal();
console.log(player.hand);
console.log(dealer.hand);
// player.hit();
// dealer.hit();
// console.log(player.getHandVal());
// console.log(dealer.getHandVal());
console.log(cardsAvailable);
// dealer.hit();
game.check();