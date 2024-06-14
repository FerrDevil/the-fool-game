"use client"
import React, { useMemo } from 'react'
import { useGameState } from '../GameContext/hooks'

export default function EndTurnButton() {
    const [{ playersHand, table, turn, localTurn }, dispatch] = useGameState()

    const isEndTurnPossible = useMemo(() => turn === "player" && localTurn === "player" && table.length > 0, [table])
    return (
        <>
            {
                turn === "opponent" ?
                    <button className="absolute top-1/2 right-2 -translate-y-1/2 text-red-500" onClick={() => { dispatch({type: "takeAndEndTurn"}) }}>Take</button>
                :
                    <button disabled={!isEndTurnPossible} className="absolute top-1/2 right-2 -translate-y-1/2 text-red-500" onClick={() => { dispatch({type: "endTurn"}) }}>EndTurn</button>
            }
        </>
    )
}
