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

const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

const suits = ['hearts', 'diamonds', 'spades', 'clubs'];

let deck = [];
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
	deck[0].image = "images/2-hearts.png";
	deck[1].image = "images/2-diamonds.png";
	deck[2].image = "images/2-spades.png";
	deck[3].image = "images/2-clubs.png";
	deck[4].image = "images/3-hearts.png";
	deck[5].image = "images/3-diamonds.png";
	deck[6].image = "images/3-spades.png";
	deck[7].image = "images/3-clubs.png";
	deck[8].image = "images/4-hearts.png";
	deck[9].image = "images/4-diamonds.png"
	deck[10].image = "images/4-spades.png";
	deck[11].image = "images/4-clubs.png";
	deck[12].image = "images/5-hearts.png";
	deck[13].image = "images/5-diamonds.png"
	deck[14].image = "images/5-spades.png";
	deck[15].image = "images/5-clubs.png";
	deck[16].image = "images/6-hearts.png";
	deck[17].image = "images/6-diamonds.png"
	deck[18].image = "images/6-spades.png";
	deck[19].image = "images/6-clubs.png";
	deck[20].image = "images/7-hearts.png";
	deck[21].image = "images/7-diamonds.png"
	deck[22].image = "images/7-spades.png";
	deck[23].image = "images/7-clubs.png";
	deck[24].image = "images/8-hearts.png";
	deck[25].image = "images/8-diamonds.png"
	deck[26].image = "images/8-spades.png";
	deck[27].image = "images/8-clubs.png";
	deck[28].image = "images/9-hearts.png";
	deck[29].image = "images/9-diamonds.png"
	deck[30].image = "images/9-spades.png";
	deck[31].image = "images/9-clubs.png";
	deck[32].image = "images/10-hearts.png";
	deck[33].image = "images/10-diamonds.png"
	deck[34].image = "images/10-spades.png";
	deck[35].image = "images/10-clubs.png";
	deck[36].image = "images/jack-hearts.png"
	deck[37].image = "images/jack-diamonds.png"
	deck[38].image = "images/jack-spades.png"
	deck[39].image = "images/jack-clubs.png"
	deck[40].image = "images/queen-hearts.png"
	deck[41].image = "images/queen-diamonds.png"
	deck[42].image = "images/queen-spades.png"
	deck[43].image = "images/queen-clubs.png"
	deck[44].image = "images/king-hearts.png"
	deck[45].image = "images/king-diamonds.png"
	deck[46].image = "images/king-spades.png"
	deck[47].image = "images/king-clubs.png"
	deck[48].image = "images/ace-hearts.png"
	deck[49].image = "images/ace-diamonds.png"
	deck[50].image = "images/ace-spades.png"
	deck[51].image = "images/ace-clubs.png" 
}




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
	bank: 1000,
	name: "",
	hand: [],
	stay: null,
	hasHit: null,
	getHandVal () {
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			total = total + this.hand[i].weight;
		} 
		return total;
	},
	// player hits. can not hit if they bust. bust message will appear.
	// create state of hasHit to allow for the 4th card played to render. should do same for dealer

	hit () {
		if(this.hasHit === null && this.getHandVal() < 21) {
			this.hand.push(deck[0]);
			deck.splice(0, 1);
			$('#playerHand').text('Player: ' + player.getHandVal());
			$('#hitCard1').attr('src', player.hand[2].image);
			$('#hitCard1').velocity('transition.flipYIn', 1000);
		} else if(this.hasHit) {
			this.hand.push(deck[0]);
			deck.splice(0, 1);
			$('#playerHand').text('Player: ' + player.getHandVal());
			$('#hitCard2').attr('src', player.hand[3].image);
			$('#hitCard2').velocity('transition.flipYIn', 1000);
		}
	},
	doubleDown() {

	},
	split() {

	}
}

const dealer = {
	hand: [],
	checkAces() {
		for(let i = 0; i < this.hand.length; i++) {
			if(this.hand[i].value === 'A') {
				return true;
			}
		}
	},
	getHandVal () {
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			total = total + this.hand[i].weight;
		}
		return total;
	},
	// if the dealers hand is less than or equal to seventeen and is less than or equal to player hand, the dealer will hit
	hit() {
		while(this.getHandVal() <= 17 && this.getHandVal() <= player.getHandVal() && player.getHandVal() <= 21) {
			this.hand.push(deck[0]);
			deck.splice(0, 1);
			$('#dealerHit').attr('src', dealer.hand[2].image);
			$('#dealerHit').velocity('transition.flipYIn', 1000);	
			}
// can I do this with a loop...
			if(dealer.hand.length >= 4) {
				$('#dealerHit2').attr('src', dealer.hand[3].image);
				$('#dealerHit2').velocity('transition.flipYIn', 1000);
		} $('#dealerHand').text('Dealer: ' + dealer.getHandVal());
	}
}

/********************
Ace logic...
If the hand of the player or dealer is > 21 and contains one or more aces, the weight of the aces converts to 1 rather than 11.
Check if hand is > 21
Check if hand contains ace using a loop
If it contains an ace
The weight of the ace is 1
********************/

// begin building game object
// need a better way to have dealer process automate
const game = {
	renderCards() {
		$('#deal').hide();
		$('#card1').attr('src', player.hand[0].image);
		$('#card2').attr('src', player.hand[1].image);
		$('#hitCard1').hide();
		$('#hitCard2').hide();
		$('#dealerHit').hide();
		$('#dealerHit2').hide();
		$('#dealer1').attr('src', 'images/card-back.png');
		$('#dealer2').attr('src', dealer.hand[1].image);
	},
	play() {
		buildDeck();
		this.shuffle(deck);
		this.deal();
		this.renderCards();
		this.checkWinner();
	},
	checkWinner() {
		if(this.playerWins() || this.dealerWins() || this.push() || this.playerBust() || this.dealerBust()) {
			$('#deal').show();
			this.updateStats();
		}
	},
	// this will reset after a winner is decided so that we can play again
	reset() {
		if(deck.length < 20) {
			deck = [];
			this.makeNewDeck();
		}
		$('#deal').hide();
		this.clearHands();
		this.shuffle(deck);
		this.deal();
		this.renderCards();
		// this.checkWinner();
	},
	clearHands() {
		player.hand=[];
		dealer.hand=[];
		player.hasHit = null;
	},
	makeNewDeck() {
		this.clearHands();
		buildDeck();
		this.shuffle(deck);
		this.deal();
		this.renderCards();
	},
	playerWins() {
		if(player.stay === true && player.getHandVal() <= 21 && player.getHandVal() > dealer.getHandVal()) {
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
	playerBust() {
		if(!this.playerWins() && player.getHandVal() > 21) {
			return true;
		}
	},
	dealerBust() {
		if(!this.dealerWins() && dealer.getHandVal() > 21) {
			return true
		}
	},
	updateStats() {
		// just testing to make sure we can compare hand values and get a result after one deal
		if(this.playerWins()) {
			player.bank += 100;
			$('#bank').text('BANK: $'+player.bank);
			$('#bank').velocity('callout.flash', 2000);
			$('#message').text('YOU WIN');
			$('#message').velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if (this.dealerWins()) {
			player.bank -= 100;
			$('#bank').text('BANK: $'+player.bank);
			$('#bank').velocity('callout.flash', 2000);
			$('#message').text('DEALER WINS');
			$('#message').velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if (this.push()) {
			$('#bank').text('BANK: $'+player.bank);
			$('#bank').velocity('callout.shake', 2000);
			$('#message').text('PUSH');
			$('#message').velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if(player.getHandVal() > 21) {
			player.bank -= 100;
			$('#bank').text('BANK: $'+player.bank);
			$('#bank').velocity('callout.flash', 2000)
			player.stay === true;
			this.dealerFlipCard();
			$('#message').text('YOU BUST');
			$('#message').velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if (dealer.getHandVal() > 21) {
			player.bank += 100;
			$('#bank').text('BANK: $'+player.bank);
			$('#bank').velocity('callout.flash', 2000);
			$('#message').text('DEALER BUSTS');
			$('#message').velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
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
			player.hand.push(deck[0]);
			deck.splice(0, 1);
			dealer.hand.push(deck[0]);
			deck.splice(0,1);
		} 
			$('#playerHand').text('Player: ' + player.getHandVal());
			$('#dealerHand').text('Dealer: ' + dealer.hand[1].weight);
			$('#deck').text('Deck: ' + deck.length);
	},
	dealerFlipCard() {
		$('#dealer1').attr('src', dealer.hand[0].image);
		$('#dealer1').velocity('transition.flipYIn', 1000);
	},
	showWinner() {
		if(this.playerWins()) {

		}
	}

};

$('#hit').on('click', () => {
	player.hit();
	player.hasHit = true;
	if(player.getHandVal() > 21) {
		game.dealerFlipCard();
		game.checkWinner();
	}
})

$('#stay').on('click', () => {
	player.stay = true;
	game.dealerFlipCard();
	dealer.hit();
	game.checkWinner();
})

$('#deal').on('click', () => {
	game.reset();
})
// bet button --> need
// 
// render cards


game.play();