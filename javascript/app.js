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
			$('#hitCard1').show();
			$('#hitCard1').attr('src', player.hand[2].image);
		};
		if(this.getHandVal() > 21) {
			game.updateStats();
		}
	},
	// switches to true when they stay, which triggers other functionality like dealer hits.
	stay: null,

	doubleDown() {

	},
	split() {

	},
	renderCards() {
		$('#card1').attr('src', player.hand[0].image);
		$('#card2').attr('src', player.hand[1].image);
		$('#hitCard1').hide();
		$('#dealerHit').hide();
		$('#dealer1').attr('src', 'images/card-back.png');
		$('#dealer2').attr('src', dealer.hand[1].image);
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
			$('#dealerHit').show();
			$('#dealerHit').attr('src', dealer.hand[2].image);
		} $('#dealerHand').text(dealer.getHandVal());
	}
}

// begin building game object
// need a better way to have dealer process automate
const game = {
	play() {
		// this.reset();
		this.shuffle(deck);
		this.deal();
		player.renderCards();
		// this.checkWinner();
	},
	checkWinner() {
		if(this.playerWins() || this.dealerWins() || this.push() || this.playerBust() || this.dealerBust()) {
			this.updateStats();
			console.log(player.score);
			// this.reset();
			// this.shuffle(deck);
			// this.deal();
		}
		
	},
	// this will reset after a winner is decided so that we can play again
	reset() {
		player.hand = [];
		dealer.hand = [];
		// $('#playerHand').text('player');
		// $('#dealerHand').text('dealer');
		this.shuffle(deck);
		this.deal();
	},
	playerWins() {
		if(player.stay === true && player.getHandVal() <= 21 && player.getHandVal() > dealer.getHandVal()){
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
	playerBust() {
		if(!this.playerWins() && player.getHandVal() > 21) {
			return true;
		}
	},
	dealerBust() {
		if(!this.dealerWins() && dealer.getHandVal() > 21) {
			player.score += 1;
			return true
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
			$('#dealerHand').text(dealer.hand[1].weight);
	}

};

$('#hit').on('click', () => {
	player.hit();
	$('#playerHand').text(player.getHandVal());
})

$('#stay').on('click', () => {
	player.stay = true;
	$('#dealer1').attr('src', dealer.hand[0].image);
	dealer.hit();
	game.checkWinner();
})

// render cards


game.play();