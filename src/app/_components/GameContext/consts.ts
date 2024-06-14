import type { Card, GameState } from "./types";


export const MAX_HAND_CAPACITY = 6
export const DECK : Card[] = [
    {
      name: "6 of diamonds",
      path: "/cards/sixofdiamonds.png",
      value: 6,
      suit: "diamonds",
     
    },
    {
      name: "7 of diamonds",
      path: "/cards/sevenofdiamonds.png",
      value: 7,
      suit: "diamonds",
      
    },
    {
      name: "8 of diamonds",
      path: "/cards/eightofdiamonds.png",
      value: 8,
      suit: "diamonds",
     
    },
    {
      name: "9 of diamonds",
      path: "/cards/nineofdiamonds.png",
      value: 9,
      suit: "diamonds",
     
    },
    {
      name: "10 of diamonds",
      path: "/cards/tenofdiamonds.png",
      value: 10,
      suit: "diamonds",
      
    },
    {
      name: "Jack of diamonds",
      path: "/cards/jackofdiamonds.png",
      value: 11,
      suit: "diamonds",
      
    },
    {
      name: "Queen of diamonds",
      path: "/cards/queenofdiamonds.png",
      value: 12,
      suit: "diamonds",
     
    },
    {
      name: "King of diamonds",
      path: "/cards/kingofdiamonds.png",
      value: 13,
      suit: "diamonds",
      
    },
    {
      name: "Ace of diamonds",
      path: "/cards/aceofdiamonds.png",
      value: 14,
      suit: "diamonds",
      
    },
    {
      name: "6 of hearts",
      path: "/cards/sixofhearts.png",
      value: 6,
      suit: "hearts",
      
    },
    {
      name: "7 of hearts",
      path: "/cards/sevenofhearts.png",
      value: 7,
      suit: "hearts",
     
    },
    {
      name: "8 of hearts",
      path: "/cards/eightofhearts.png",
      value: 8,
      suit: "hearts",
      
    },
    {
      name: "9 of hearts",
      path: "/cards/nineofhearts.png",
      value: 9,
      suit: "hearts",
      
    },
    {
      name: "10 of hearts",
      path: "/cards/tenofhearts.png",
      value: 10,
      suit: "hearts",
    },
    {
      name: "Jack of hearts",
      path: "/cards/jackofhearts.png",
      value: 11,
      suit: "hearts",
    },
    {
      name: "Queen of hearts",
      path: "/cards/queenofhearts.png",
      value: 12,
      suit: "hearts",
    },
    {
      name: "King of hearts",
      path: "/cards/kingofhearts.png",
      value: 13,
      suit: "hearts",
    },
    {
      name: "Ace of hearts",
      path: "/cards/aceofhearts.png",
      value: 14,
      suit: "hearts",
    },
    {
      name: "6 of spades",
      path: "/cards/sixofspades.png",
      value: 6,
      suit: "spades",
    },
    {
      name: "7 of spades",
      path: "/cards/sevenofspades.png",
      value: 7,
      suit: "spades",
    },
    {
      name: "8 of spades",
      path: "/cards/eightofspades.png",
      value: 8,
      suit: "spades",
    },
    {
      name: "9 of spades",
      path: "/cards/nineofspades.png",
      value: 9,
      suit: "spades",
    },
    {
      name: "10 of spades",
      path: "/cards/tenofspades.png",
      value: 10,
      suit: "spades",
    },
    {
      name: "Jack of spades",
      path: "/cards/jackofspades.png",
      value: 11,
      suit: "spades",
    },
    {
      name: "Queen of spades",
      path: "/cards/queenofspades.png",
      value: 12,
      suit: "spades",
    },
    {
      name: "King of spades",
      path: "/cards/kingofspades.png",
      value: 13,
      suit: "spades",
    },
    {
      name: "Ace of spades",
      path: "/cards/aceofspades.png",
      value: 14,
      suit: "spades",
    },
    {
      name: "6 of clubs",
      path: "/cards/sixofclubs.png",
      value: 6,
      suit: "clubs",
    },
    {
      name: "7 of clubs",
      path: "/cards/sevenofclubs.png",
      value: 7,
      suit: "clubs",
    },
    {
      name: "8 of clubs",
      path: "/cards/eightofclubs.png",
      value: 8,
      suit: "clubs",
    },
    {
      name: "9 of clubs",
      path: "/cards/nineofclubs.png",
      value: 9,
      suit: "clubs",
    },
    {
      name: "10 of clubs",
      path: "/cards/tenofclubs.png",
      value: 10,
      suit: "clubs",
    },
    {
      name: "Jack of clubs",
      path: "/cards/jackofclubs.png",
      value: 11,
      suit: "clubs",
    },
    {
      name: "Queen of clubs",
      path: "/cards/queenofclubs.png",
      value: 12,
      suit: "clubs",
    },
    {
      name: "King of clubs",
      path: "/cards/kingofclubs.png",
      value: 13,
      suit: "clubs",
    },
    {
      name: "Ace of clubs",
      path: "/cards/aceofclubs.png",
      value: 14,
      suit: "clubs",
    },
  ];


export const GAME_STATE: GameState = {
    deck: [],
    trumps: null,
    turn: null,
    localTurn: null,
    playersHand: [],
    opponentsHand: [],
    table: [],
    turnCount: 0,
    defeat: null
    
}