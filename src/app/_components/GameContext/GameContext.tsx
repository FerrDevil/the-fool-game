"use client"

import { createContext, useEffect, useReducer } from 'react'
import type { GameContextValue } from './types'
import { GAME_STATE, } from './consts'

import useUpdateEffect from '@/app/hooks/useUpdateEffect'
import { reducer } from './contextReducer'



export const gameContext = createContext<GameContextValue | null>(null)






export default function GameContext( { children } : { children?: React.ReactNode } ) {
    const [state, dispatch] = useReducer(reducer, GAME_STATE)
    console.log(state)
    
    useEffect(() => {
        dispatch({type: "start"})
        setTimeout(() => { dispatch({type: "initialDraw"}) }, 10)
    }, [])

	useUpdateEffect(() => {
		dispatch({type: "newTurn"})
		
		
	}, [state.turnCount])

    useUpdateEffect(() => {
        if (state.turn === "opponent" && state.localTurn === "opponent") dispatch({type: "opponentAttackPhaseEnd"})
        dispatch({type: "defeat"})    
    }, [state.turn, state.localTurn, state.turnCount])

    return (
        <gameContext.Provider value={[state, dispatch]}>{children}</gameContext.Provider>
    )
}
