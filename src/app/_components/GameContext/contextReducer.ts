import { shuffleArray } from "@/utils/shuffleArray"
import { DECK, GAME_STATE, MAX_HAND_CAPACITY } from "./consts"
import type { Card, GameState, GameStateAction } from "./types"

export const reducer = (state: GameState, action : GameStateAction ) : GameState => {
    switch (action.type) {
        case "start": {
          	const newDeck = shuffleArray(DECK)
			const whoseTurn = Math.random() > 0.5 ? "opponent" : "player"
			return {
				...state,
				deck: newDeck,
				turn: whoseTurn,
				localTurn: whoseTurn
			}
        }
        case "initialDraw": {
			const deck = [...state.deck]
			const drawnCards = {
				opponent: [] as Card[],
				player: [] as Card[]
				
			}
			if( state.turn === "opponent" ){
				drawnCards.opponent = deck.splice(0, 6)
				drawnCards.player = deck.splice(0, 6)
			}
			else if( state.turn === "player" ){
				drawnCards.player = deck.splice(0, 6)
				drawnCards.opponent = deck.splice(0, 6) 
			}
			return {
				...state,
				deck: deck,
				opponentsHand: drawnCards.opponent,
				playersHand: drawnCards.player
				
			}
		}

		case "newTurn": {
			const deck = [...state.deck]
			let drawnCards = {
				opponent: [...state.opponentsHand] as Card[],
				player: [...state.playersHand] as Card[]
				
			}
			if( state.turn === "opponent" ){
				drawnCards.opponent = [...drawnCards.opponent, ...deck.splice(0, (MAX_HAND_CAPACITY - state.opponentsHand.length ) || 0) ]
				drawnCards.player = [...drawnCards.player, ...deck.splice(0, (MAX_HAND_CAPACITY - state.playersHand.length ) || 0) ]
			}
			else if( state.turn === "player" ){
				drawnCards.player = [...drawnCards.player, ...deck.splice(0, (MAX_HAND_CAPACITY - state.playersHand.length ) || 0) ]
				drawnCards.opponent = [...drawnCards.opponent, ...deck.splice(0, (MAX_HAND_CAPACITY - state.opponentsHand.length ) || 0) ]
			}
			
			return {
				...state,
				deck: deck,
				opponentsHand: drawnCards.opponent,
				playersHand: drawnCards.player
				
			}
		}

		case "playerAttackPhaseEnd": {
			const  playedCard: Card = action.payload
			
			return {
				...state,
				playersHand: state.playersHand.filter((card => card.name !== playedCard.name)),
				table: [...state.table, [playedCard]],
				localTurn: "opponent"
				
			}
		}
		case "playerDefendPhaseEnd": {
			const playedCard: Card = action.payload

			const opponentPlayedCard: Card = state.table[state.table.length-1][0]
			
			return {
				...state,
				playersHand: state.playersHand.filter((card =>  card.name !== playedCard.name )),
				table: [...state.table.filter((_, index) => index !== state.table.length-1), [opponentPlayedCard, playedCard]],
				localTurn: "opponent"
				
			}
		}
		case "opponentDefendPhaseEnd": {
			const playersCard = state.table[state.table.length-1][0]
			const playedCard: Card = state.opponentsHand.filter(card => card.suit === playersCard.suit && card.value > playersCard.value).reduce((prev, card) => card.value < prev.value ? card: prev, { value: 999} as Card)

			if (playedCard.value === 999){
				return {
					...state,
					opponentsHand: [...state.opponentsHand, ...state.table.flat()],
					table: [],
					turn: "player",
					localTurn: "player",
					turnCount: state.turnCount + 1
				}
			}
			
			return {
				...state,
				opponentsHand: state.opponentsHand.filter((card => card.suit + card.value !== playedCard.suit + playedCard.value)),
				table: [...state.table.filter((_, index) => index !== state.table.length-1), [playersCard, playedCard]],
				localTurn: "player"
				
			}
		}

		case "endTurn": {
			const newTurn = state.turn === "opponent" ? "player" : "opponent"
			return {
				...state,
				table: [],
				turn: newTurn,
				localTurn: newTurn,
				turnCount: state.turnCount + 1
			}
		}
		case "takeAndEndTurn": {
			
			return {
				...state,
				playersHand: [...state.playersHand, ...state.table.flat()],
				table: [],
				turn: "opponent",
				localTurn: "opponent",
				turnCount: state.turnCount + 1
			}
		} 

		case "opponentAttackPhaseEnd": {
			const availableCardValues = state.table
				.flat()
				.reduce( (prev, card ) => [...prev, card.value], [] as number[] )
			const playedCard = state.opponentsHand.filter(card => availableCardValues.includes(card.value) || state.table.length === 0).reduce((prev, card) => prev.value > card.value ? card : prev, {value: 999} as Card)
			console.log(playedCard)
			if (playedCard.value === 999){
				return {
					...state,
					table: [],
					turn: "player",
					localTurn: "player",
					turnCount: state.turnCount + 1
				}
			}
			
			return {
				...state,
				opponentsHand: state.opponentsHand.filter((card => card.suit + card.value !== playedCard.suit + playedCard.value)),
				table: [...state.table, [playedCard]],
				localTurn: "player"
				
			}
		} 

		case "defeat": {
			if (state.deck.length === 0 && state.playersHand.length === 0) return {...state, defeat: false}
			else if (state.deck.length === 0 && state.opponentsHand.length === 0) return {...state, defeat: true}
			else return {...state}
		}
        case "reset": {
            return GAME_STATE
        }
        default: {
          throw Error("No such event type is present")
        }
    }
}