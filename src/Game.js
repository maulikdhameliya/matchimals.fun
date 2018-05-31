import { Game as BGGame } from "boardgame.io/core";
import shuffle from "lodash/shuffle";
import animals from "./constants/animals";
import { cells as emptyCells, center, columns } from "./constants/board";
import { deck, getRandomCard } from "./constants/cards";

export function getNeighbors(G, id) {
  const { cells } = G;

  //Assume all are null
  let topCard = null,
    rightCard = null,
    bottomCard = null,
    leftCard = null;

  // Find neighbor indices
  const topIndex = id - columns,
    rightIndex = id + 1,
    leftIndex = id - 1,
    bottomIndex = id + columns;

  // Set as a neighbor card only if within board boundaries
  if (topIndex >= 0) {
    topCard = cells[topIndex];
  }
  if (bottomIndex < cells.length) {
    bottomCard = cells[bottomIndex];
  }
  if (rightIndex % columns !== 0 && rightIndex < cells.length - 1) {
    rightCard = cells[rightIndex];
  }
  if (leftIndex % columns !== columns - 1 && leftIndex >= 0) {
    leftCard = cells[leftIndex];
  }

  return { topCard, rightCard, bottomCard, leftCard };
}

export function calculateScore(G, ctx, id) {
  const currentPlayer = G.players[ctx.currentPlayer];
  const currentCard = currentPlayer.deck[0];

  //Assign neighbors
  const neighbors = getNeighbors(G, id);
  const topCard = neighbors.topCard,
    rightCard = neighbors.rightCard,
    bottomCard = neighbors.bottomCard,
    leftCard = neighbors.leftCard;

  //Calculate score for each matching side
  let score = 0;
  if (topCard != null && currentCard.top === topCard.bottom) {
    score += animals[topCard.bottom].score;
  }
  if (rightCard != null && currentCard.right === rightCard.left) {
    score += animals[rightCard.left].score;
  }
  if (bottomCard != null && currentCard.bottom === bottomCard.top) {
    score += animals[bottomCard.top].score;
  }
  if (leftCard != null && currentCard.left === leftCard.right) {
    score += animals[leftCard.right].score;
  }
  return score;
}

export function isLegalMove(G, ctx, id) {
  if (G.cells[id] !== null) {
    return false;
  }

  const currentPlayer = G.players[ctx.currentPlayer];
  const currentCard = currentPlayer.deck[0];

  //Assign neighbors
  const neighbors = getNeighbors(G, id);
  const topCard = neighbors.topCard,
    rightCard = neighbors.rightCard,
    bottomCard = neighbors.bottomCard,
    leftCard = neighbors.leftCard;

  // Check for matching side
  if (
    topCard == null &&
    rightCard == null &&
    bottomCard == null &&
    leftCard == null
  ) {
    return false; //Return false if no neighbor cards exist
  }

  if (
    (topCard == null || currentCard.top === topCard.bottom) &&
    (rightCard == null || currentCard.right === rightCard.left) &&
    (bottomCard == null || currentCard.bottom === bottomCard.top) &&
    (leftCard == null || currentCard.left === leftCard.right)
  ) {
    return true; //Return true if there exists a match
  }

  return false; //Return false if there are no neighboring cards that match
}

function canCardsConnect(card1, card2) {
  if (
    card1.top === card2.bottom ||
    card1.bottom === card2.top ||
    card1.left === card2.right ||
    card1.right === card2.left
  ) {
    return true;
  }

  return false;
}

export function getInitialState(ctx) {
  const G = {
    cells: [],
    players: {},
  };

  // Populate the initial deck
  let fulldeck = [...deck];

  // Add a deck for every additional player
  for (let i = 0; i < ctx.numPlayers - 1; i++) {
    fulldeck = fulldeck.concat(deck);
  }

  // Shuffle resulting deck using lodash
  fulldeck = shuffle(fulldeck);

  // Snapshot the length of the entire deck before we chop it up
  const length = fulldeck.length;

  // Set up the game state for each player, and deal them a part of the deck
  for (let j = 0; j < ctx.numPlayers; j++) {
    G.players[j] = {
      score: 0,
      deck: fulldeck.splice(0, length / ctx.numPlayers),
    };
  }

  // Fill the game board
  G.cells = emptyCells;

  // Set the initial card on the board
  const initialCard = getRandomCard(deck);
  G.cells[center] = initialCard;

  // Ensure each player starts off with a card that is connectable
  for (let k = 0; k < ctx.numPlayers; k++) {
    while (!canCardsConnect(G.players[k].deck[0], initialCard)) {
      const deck = G.players[k].deck;
      deck.push(deck.shift()); // Place top card to bottom of deck, try again!
    }
  }

  console.log("Initial Game State", G, "Initial ctx", ctx);

  // Our game state is ready to go– return it!
  return G;
}

const Game = BGGame({
  // The setup method is passed ctx
  setup: getInitialState,

  moves: {
    // G and ctx are provided automatically when calling from App– `this.props.moves.placeCard(id)`
    placeCard: (G, ctx, id) => {
      // Clone cells and players state so we don't mutate values
      const cells = [...G.cells];
      const players = { ...G.players };
      const currentDeck = players[ctx.currentPlayer].deck;
      const currentCard = currentDeck[0];

      // Ensure we can't overwrite cells.
      if (isLegalMove(G, ctx, id)) {
        //Lay the card on the board
        cells[id] = currentCard;
        players[ctx.currentPlayer].score += calculateScore(G, ctx, id);

        //Next card shifts up the deck
        currentDeck.shift();
      }

      // Return a copy of game state, along with updated cells and players state
      return { ...G, cells, players };
    },

    pass: (G, ctx) => {
      // Clone players state so we don't mutate values
      const players = { ...G.players };
      const deck = players[ctx.currentPlayer].deck;

      // Place top card to bottom of deck
      deck.push(deck.shift());

      // Return a copy of game state, along with updated deck
      return { ...G, players };
    },
  },

  flow: {
    endGameIf: (G, ctx) => {
      // TODO: Logic should be based on ctx.numPlayers
      if (G.players[0].deck.length === 0 && G.players[1].deck.length === 0) {
        if (G.players[0].score > G.players[1].score) {
          return "0";
        } else {
          // TODO: Need to also handle a tie game
          return "1";
        }
      }
    },
  },
});

export default Game;
