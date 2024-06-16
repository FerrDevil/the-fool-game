import type { Dispatch } from "react";


export type Card = {
    name: string,
    path: string,
    value: number,
    suit: Suit
}

export type Suit = "diamonds" | "spades" | "hearts" | "clubs"

export type GameState = {
    deck: Card[],
    trumps: Suit | null,
    turnCount: number,
    turn: "opponent" | "player" | null,
    localTurn: "opponent" | "player" | null,
    playersHand: Card[],
    opponentsHand: Card[]
    table: Card[][],
    ending: "win" | "defeat" | "tie" | null
}

export type GameStateAction = {type: string, payload?: any}


export type GameContextValue = [GameState, Dispatch<GameStateAction> ]


