"use client"
import Image from 'next/image'
import React from 'react'
import type { Card } from '../GameContext/types'
import { useDrop } from 'react-dnd'
import { useGameState } from '../GameContext/hooks'

export default function CardPlace({cardPlace} : { cardPlace? : Card[] }) {
    const [{turn, localTurn}, dispatch] = useGameState()
    console.log(turn, localTurn)
    const [ _, dropRef ] = useDrop(() => ({
        accept: "tableCard",
        drop: (item: {card : Card}) => {
            
            if ( turn === "player" && localTurn === "player") {
                dispatch({type: "playerAttackPhaseEnd", payload: JSON.parse(JSON.stringify(item.card)) })
                setTimeout(() => { dispatch({type: "opponentDefendPhaseEnd", payload: JSON.parse(JSON.stringify(item.card)) }) } , 1000)
            }
            if ( turn === "opponent" && localTurn === "player") {
                dispatch({type: "playerDefendPhaseEnd", payload: JSON.parse(JSON.stringify(item.card)) })
            }
            
        }
    }), [turn, localTurn])
    return (
        <div ref={dropRef as unknown as React.RefObject<any>} style={{minWidth: "100px", minHeight: "200px"}} >
            {
                cardPlace && cardPlace.map((card, cardIndex) => (
                    <div key={cardIndex}>
                        <Image
                            draggable={false}
                            width={100}
                            height={200}
                            src={card.path}
                            alt="card"
                            loading="eager"

                        />
                    </div>
                ))
            }
            
        </div>
    )
}
