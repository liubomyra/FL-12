console.log('- TASK 1 -------------------------------------');
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
    this._suit = suit;
    this._rankValue = +rank;
    this._rankLabel = ranks[rank];
  }
  get suit() {
    return this._suit;
  }
  get rankValue() {
    return this._rankValue;
  }
  get rankLabel() {
    return this._rankLabel;
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

class Deck {
  constructor() {
    const cards = this.constructor.initCardsForDeck();
    this.cards = cards;
  }
  get count() {
    return this.cards.length;
  }

  static initCardsForDeck() {
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
  }

  draw(n) {
    const amount = n || 1;
    return this.cards.splice(0, amount);
  }
}

class Player {
  constructor(name, deck) {
    this.name = name;
    this.deck = deck;
    this.wins = 0;
  }
  play(playerTwo) {
    if (!(playerTwo instanceof Player)) {
      console.log('You should play only with another Player');
      return false;
    }
    this.deck.shuffle();
    playerTwo.deck.shuffle();
    while (this.deck.count > 0 || playerTwo.deck.count > 0) {
      const cardPlayerOne = this.deck.draw()[0];
      const cardPlayerTwo = playerTwo.deck.draw()[0];
      console.log(`${cardPlayerOne.toString()} vs ${cardPlayerTwo.toString()}`);
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

const deckOne = new Deck();
const deckTwo = new Deck();

const playerOne = new Player('Yuliia', deckOne);
const playerTwo = new Player('Yura', deckTwo);

console.log(playerOne.play(playerTwo));
