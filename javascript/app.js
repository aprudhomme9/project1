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
	betAmount: 0,
	hand: [],
	stay: null,
	hasHit: null,
	split1: [],
	split2: [],
	getHandTotal() {
		let aces = 0;
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			if(this.hand[i].value === 'A') {
					aces += 1;
			}
			total = total + this.hand[i].weight;
		}
		if(aces > 0 && total > 21) {
			total = total - (10 * aces);
		} return total;
	},
	hit () {
		if(this.hasHit === null && this.getHandTotal() < 21) {
			this.hand.push(deck[0]);
			deck.splice(0, 1);
			$('#playerHand').text('Player: ' + this.getHandTotal());
			$('#hitCard1').attr('src', this.hand[2].image);
			$('#hitCard1').velocity('transition.flipYIn', 1000);
		} else if(this.hasHit) {
			this.hand.push(deck[0]);
			deck.splice(0, 1);
			$('#playerHand').text('Player: ' + this.getHandTotal());
			$('#hitCard2').attr('src', this.hand[3].image);
			$('#hitCard2').velocity('transition.flipYIn', 1000);
		} if (this.hand.length >= 5) {
			$('#hitCard3').attr('src', this.hand[4].image);
			$('#hitCard3').velocity('transition.flipYIn', 1000);
		}
	},
	doubleDown() {

	},
	split() {
		// move first card into new hand and second card into new hand
		// need to hit for both hands by pushing card from deck into both
		// first, the first split card is shown and hit
		// player can then hit or stay on that hand
		// if hit, another card is added and you need to check winner
		// if stay, the second split card is brought in
		// then, the second split card is shown and hit
		// player can then hit or stay on that hand
		// if hit, another card is added and winner is checked
		this.split1.push(this.hand[0]);
		this.split2.push(this.hand[1]);
		$('#playerHand').text('Player: ' + this.split1[0].weight + ', ' + this.split2[0].weight);
	},
	hitOnSplit() {
		this.split1.push(deck[0]);
		deck.splice(0, 1);
		this.split2.push(deck[0]);
		deck.splice(0, 1);
	},
	getSplitValue() {
		let firstTotal = 0;
		let secondTotal = 0;
		for(let i = 0; i < split1.length; i++) {
			firstTotal = firstTotal + this.split1[i].weight;
			secondTotal = secondTotal + this.split2[i].weight;
		} console.log(firstTotal);
			console.log(secondTotal);
	}
}
const dealer = {
	hand: [],
	getHandTotal() {
		let aces = 0;
		let total = 0;
		for(let i = 0; i < this.hand.length; i++) {
			if(this.hand[i].value === 'A') {
				aces += 1;
			}

			total = total + this.hand[i].weight;
		}

		if(aces > 0 && total > 21) {
			
			total = total - (10 * aces);

		} return total;
	},
	// if the dealers hand is less than or equal to seventeen and is less than or equal to player hand, the dealer will hit
	hit() {
		while(this.getHandTotal() <= 17 && this.getHandTotal() <= player.getHandTotal() && player.getHandTotal() <= 21) {
			this.hand.push(deck[0]);
			deck.splice(0, 1);
			$('#dealerHit').attr('src', this.hand[2].image);
			$('#dealerHit').delay(1000).velocity('transition.flipYIn', 1000);	
			}

		if(this.hand.length >= 4) {
			$('#dealerHit2').attr('src', this.hand[3].image);
			$('#dealerHit2').delay(1000).velocity('transition.flipYIn', 1000);
		} 
		if(this.hand.length >= 5) {
			$('#dealerHit3').attr('src', this.hand[4].image);
			$('#dealerHit3').delay(1000).velocity('transition.flipYIn', 1000);
		}

		$('#dealerHand').delay(2000).text('Dealer: ' + this.getHandTotal());
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
const game = {
	renderCards() {
		$('#splitHit').hide();
		$('#splitStay').hide();
		$('#split').hide();
		$('#deal').hide();
		$('#card1').attr('src', player.hand[0].image);
		$('#card2').attr('src', player.hand[1].image);
		$('#hitCard1').hide();
		$('#hitCard2').hide();
		$('#hitCard3').hide();
		$('#dealerHit3').hide();
		$('#dealerHit').hide();
		$('#dealerHit2').hide();
		$('#dealer1').attr('src', 'images/card-back.png');
		$('#dealer2').attr('src', dealer.hand[1].image);
		$('#message').hide();
		$('#hit').show();
		$('#stay').show();
		$('#placeBet').show();
	},
	play() {
		buildDeck();
		this.shuffle(deck);
		this.deal();
		this.renderCards();
		this.hideCards();
		console.log('playyyiinng');
	},
	checkWinner() {
		if(this.playerWins() || this.dealerWins() || this.push() || this.playerBust() || this.dealerBust()) {
			$('#deal').show();
			$('#hit').hide();
			$('#stay').hide();
			this.updateStats();
			console.log('checkinnngng')
		}
	},
	// this will reset after a winner is decided so that we can play again
	reset() {
		console.log('reseetttinnng');
		if(deck.length < 20) {
			deck = [];
			this.makeNewDeck();
		};
		$('#hit').show();
		$('#stay').show();
		$('#deal').hide();
		player.betAmount = 0;
		$('#betAmount').text('Bet: $0');
		$('#playerHand').text('Player: ');
		$('#dealerHand').text('Dealer: ');
		this.clearHands();
		this.deal();
		this.renderCards();
		this.hideCards();
	},	
	clearHands() {
		player.split1=[];
		player.split2=[];
		player.hand=[];
		dealer.hand=[];
		player.hasHit = null;
	},
	showValues() {
		$('#playerHand').text('Player: ' + player.getHandTotal());
		$('#dealerHand').text('Dealer: ' + dealer.hand[1].weight);
	},
	makeNewDeck() {
		this.clearHands();
		buildDeck();
		this.shuffle(deck);
		this.deal();
		this.renderCards();
	},
	playerWins() {
		if(player.stay && player.getHandTotal() <= 21 && player.getHandTotal() > dealer.getHandTotal()) {
			return true;		
		}
	},
	dealerWins() {
		if(player.stay && dealer.getHandTotal() > player.getHandTotal() && dealer.getHandTotal() <= 21) {
			return true;
		}
	},
	push() {
		if(player.stay && dealer.getHandTotal() === player.getHandTotal()) {
			return true;
		}
	},
	playerBust() {
		if(!this.playerWins() && player.getHandTotal() > 21) {
			return true;
		}
	},
	dealerBust() {
		if(!this.dealerWins() && dealer.getHandTotal() > 21) {
			return true
		}
	},
	updateStats() {
		console.log('updaaattiing');
		// just testing to make sure we can compare hand values and get a result after one deal
		if(this.playerWins()) {
			player.bank += player.betAmount;
			$('#bank').text('BANK: $'+ player.bank);
			$('#bank').delay(2000).velocity('callout.flash', 2000);
			$('#message').text('YOU WIN');
			$('#message').delay(2000).velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if (this.dealerWins()) {
			player.bank -= player.betAmount;
			$('#bank').text('BANK: $'+ player.bank);
			$('#bank').delay(2000).velocity('callout.flash', 2000);
			$('#message').text('DEALER WINS');
			$('#message').delay(2000).velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if (this.push()) {
			$('#bank').text('BANK: $'+ player.bank);
			$('#bank').delay(2000).velocity('callout.shake', 2000);
			$('#message').text('PUSH');
			$('#message').delay(2000).velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if(this.playerBust()) {
			player.bank -= player.betAmount;
			$('#bank').text('BANK: $'+ player.bank);
			$('#bank').delay(2000).velocity('callout.flash', 2000)
			player.stay === true;
			this.dealerFlipCard();
			$('#message').text('YOU BUST');
			$('#message').delay(2000).velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		} else if (this.dealerBust()) {
			player.bank += player.betAmount;
			$('#bank').text('BANK: $'+ player.bank);
			$('#bank').delay(2000).velocity('callout.flash', 2000);
			$('#message').text('DEALER BUSTS');
			$('#message').delay(2000).velocity('transition.swoopIn', 2000);
			$('#message').velocity('transition.swoopOut')
		}
	},
	shuffle(array) {
		for(let i = array.length - 1; i > 0; i--) {
			let rand = Math.floor(Math.random() * i);
			let temp = array[i];
			array[i] = array[rand];
			array[rand] = temp;

		} return array;
	},
	deal() {
		console.log('deeeallinnngg');
		for(let i = 0; i < 2; i ++) {
			player.hand.push(deck[0]);
			deck.splice(0, 1);
			dealer.hand.push(deck[0]);
			deck.splice(0,1);
		}
			$('#deck').text('Deck: ' + deck.length);
	},
	dealerFlipCard() {
		$('#dealer1').attr('src', dealer.hand[0].image);
		$('#dealer1').velocity('transition.flipYIn', 1000);
	},
	hideCards() {
		$('#card1').attr('src', 'images/card-back.png');
		$('#card2').attr('src', 'images/card-back.png');
		$('#dealer1').attr('src', 'images/card-back.png');
		$('#dealer2').attr('src', 'images/card-back.png');
	},
	showCards() {
		$('#card1').attr('src', player.hand[0].image);
		$('#card2').attr('src', player.hand[1].image);
		// $('#dealer1').attr('src', dealer.hand[0].image);
		$('#dealer2').attr('src', dealer.hand[1].image);
	},
	changeBetValue() {
		$('#betAmount').text('Bet: $' + player.betAmount);
	},
	hideButtons() {
		$('#hit').hide();
		$('#stay').hide();
	},
	showSplitButtons() {
		$('#splitHit').show();
		$('#splitStay').show();
	},
	moveSplitCards() {
		$('#hitCard2').velocity('transition.flipYIn');
		$('#hitCard3').velocity('transition.flipYIn');
		$('#card2').velocity('transition.flipYIn');
		$('#hitCard2').attr('img', src = player.split2[0].image)
		$('#hitCard3').attr('img', src = player.split2[1].image)
		$('#card2').attr('img', src = player.split1[1].image)
	}
};

$('#hit').on('click', () => {
	player.hit();
	player.hasHit = true;
	if(player.getHandTotal() > 21) {
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

$('#split').on('click', () => {
	player.split();
	player.hitOnSplit();
	game.hideButtons();
	game.showSplitButtons();
	game.moveSplitCards();
	console.log(player.split1)
	console.log(player.split2)
})

$('#100').on('click', () => {
	player.betAmount += 100;
	game.changeBetValue();
})

$('#1000').on('click', () => {
	player.betAmount += 1000;
	game.changeBetValue();
})

$('#placeBet').on('click', () => {
	game.showCards();
	game.showValues();
	$('#placeBet').hide();
})


game.play();