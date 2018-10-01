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
	score: 0,
	name: "",
	hand: [],
	getHandVal () {
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			total = total + this.hand[i].weight;
		} 
		return total;
	},
	// player hits. can not hit if they bust. bust message will appear.
	hit () {
		if(this.getHandVal() < 21) {
			this.hand.push(cardsAvailable[0]);
			cardsAvailable.splice(0, 1);
		};
		if(this.getHandVal() > 21) {
			game.updateStats();
		}
	},
	stay: null,

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
	// if the dealers hand is less than or equal to seventeen and is less than or equal to player hand, the dealer will hit
	hit() {
		while(player.stay && this.getHandVal() <= 17 && this.getHandVal() <= player.getHandVal()) {
			this.hand.push(cardsAvailable[0]);
			cardsAvailable.splice(0, 1);
			$('#dealerHand').text(dealer.getHandVal());
		}
	}
}

// begin building game object
// need a better way to have dealer process automate
const game = {
	play() {
		this.shuffle(deck);
		this.deal();
		this.checkWinner();
	},
	checkWinner() {
		if(this.playerWins() || this.dealerWins() || this.push() || this.bust()) {
			this.updateStats();
			console.log(player.score);
		}
		
	},
	playerWins() {
		if(player.stay === true && player.getHandVal() <= 21 && player.getHandVal() > dealer.getHandVal()) {
			player.score += 1;
			return true;		
		}
	},
	dealerWins() {
		if(player.stay === true && dealer.getHandVal() > player.getHandVal() && dealer.getHandVal() <= 21) {
			return true;
		}
	},
	push() {
		if(player.stay === true && dealer.getHandVal() === player.getHandVal()) {
			return true;
		}
	},
	bust() {
		if(player.getHandVal() > 21 || dealer.getHandVal() > 21) {
			return true;
		}
	},
	updateStats() {
		// just testing to make sure we can compare hand values and get a result after one deal
		if(this.playerWins()) {
			console.log('player wins');
		} else if (this.dealerWins()) {
			console.log('dealer wins');
		} else if (this.push()) {
			console.log('push');
		} else if(player.getHandVal() > 21) {
			console.log('player busts');
		} else if (dealer.getHandVal() > 21) {
			player.score += 1;
			console.log('dealer busts');
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

$('#hit').on('click', () => {
	player.hit();
	$('#playerHand').text(player.getHandVal());
})

$('#stay').on('click', () => {
	player.stay = true;
	dealer.hit();
	game.checkWinner();
})

game.play();