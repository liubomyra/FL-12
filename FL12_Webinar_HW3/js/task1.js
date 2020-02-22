const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = {
  1: 'Ace',
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 'Jack',
  12: 'Queen',
  13: 'King'
};

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rankValue = rank;
    this.rankLabel = ranks[rank];
  }
  isFaceCard() {
    return this.rankValue === 1 || this.rankValue > 10;
  }
  toString() {
    return `${this.rankLabel} of ${this.suit}`;
  }
  compare(cardTwo) {
    if (this.rankValue === cardTwo.rankValue) {
      return 0;
    } else if (this.rankValue > cardTwo.rankValue) {
      return 1;
    } else {
      return -1;
    }
  }
}

// const cardOne = new Card('diamonds', 12);
// const cardTwo = new Card('hearts', 3);
// console.log(cardOne.toString()); // Jack of diamonds
// console.log(cardOne.isFaceCard()); // a card is a face card
// console.log(cardTwo.toString());
// console.log(cardOne.compare(cardTwo)); // Player 1 is winner in this round!

class Deck {
  constructor() {
    const cards = this.initCardsForDeck();
    this.cards = cards;
    this.count = cards.length;
  }

  initCardsForDeck() {
    const cards = [];
    const ranksKeys = Object.keys(ranks);
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranksKeys.length; j++) {
        let card = new Card(suits[i], ranksKeys[j]);
        cards.push(card);
      }
    }
    return cards;
  }

  shuffle() {
    let randomCard;
    let replaceValue;
    for (let i = this.cards.length - 1; i >= 0; i -= 1) {
      randomCard = Math.floor(Math.random() * this.cards.length);
      replaceValue = this.cards[i];
      this.cards[i] = this.cards[randomCard];
      this.cards[randomCard] = replaceValue;
    }
    console.log(`shuffle`);
  }

  draw(n = 1) {
    this.count = this.count - n;
    return this.cards.pop();
  }
}

const deckOne = new Deck();
const deckTwo = new Deck();

class Player {
  constructor(name, deck) {
    this.name = name;
    this.deck = deck;
    this.wins = 0;
  }
  play(playerTwo) {
    this.deck.shuffle();
    playerTwo.deck.shuffle();
    //debugger;
    while (this.deck.count > 0 || playerTwo.deck.count > 0) {
      const cardPlayerOne = this.deck.draw();
      const cardPlayerTwo = playerTwo.deck.draw();
      let round = cardPlayerOne.compare(cardPlayerTwo);
      if (round === 1) {
        this.wins++;
        console.log(`Player 1 is winner in this round!`);
      } else if (round === -1) {
        playerTwo.wins++;
        console.log(`Player 2 is winner in this round!`);
      } else {
        console.log(`Cards are equal`);
      }
    }
    if (this.wins > playerTwo.wins) {
      return `${this.name} wins ${this.wins} to ${playerTwo.wins}`; //(i.e. "John wins 10 to 7").
    } else if (playerTwo.wins > this.wins) {
      return `${playerTwo.name} wins ${playerTwo.wins} to ${this.wins}`;
    } else {
      return `two winners`;
    }
  }
}

// Play(playerOne, playerTwo);
const playerOne = new Player('Yuliia', deckOne);
const playerTwo = new Player('Yura', deckTwo);

console.log(playerOne.play(playerTwo));
