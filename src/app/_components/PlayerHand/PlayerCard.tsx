"use client"
import React, { useMemo } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { Card } from '../GameContext/types';
import { useDrag } from 'react-dnd';
import { useGameState } from '../GameContext/hooks';


export default function PlayerCard({ card } : { card : Card } ) {
    const [ { table, turn, localTurn, trumps } ]  = useGameState()

    const isPlayable = useMemo( () => {
        const lastOpponentsCard = table.length > 0 ? table![table.length - 1]![0] : {} as Card
        return (
            turn === "player" && localTurn === "player" && (
            table
                .flat()
                .reduce( (prev, card ) => [...prev, card.value], [] as number[] )
                .includes(card.value) 
            || table.length === 0
            ) 
            ||
            turn === "opponent" && localTurn === "player" && (
                lastOpponentsCard.suit === card.suit && lastOpponentsCard.value < card.value
                || lastOpponentsCard.suit === trumps && card.suit === trumps && lastOpponentsCard.value < card.value 
                || lastOpponentsCard.suit !== trumps && card.suit === trumps 
            )
        )
    }, [card, table])
    const [{isDragging}, dragRef, dragPreviewRef] = useDrag(() => ({
        type: "tableCard",
        item: () =>  isPlayable ? { card } : null,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [table])

    

    
    return ( 
        isDragging ?
            <motion.div
                ref={dragPreviewRef as unknown as React.LegacyRef<HTMLDivElement>}
                className={`${isPlayable? "cursor-pointer outline outline-2 outline-green-500": "" }`}
                draggable
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    draggable={false}
                    width={100}
                    height={200}
                    className={`playersCard`}
                    src={card.path}
                    alt="card"
                    priority
                    loading="eager"

                />
            </motion.div>  
        :
            <motion.div
                ref={dragRef as unknown as React.LegacyRef<HTMLDivElement>}
                className={`${isPlayable? "cursor-pointer outline outline-2 outline-green-500": "" }`}
                
                draggable
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    draggable={false}
                    width={100}
                    height={200}
                    className={`playersCard`}
                    src={card.path}
                    alt="card"
                    priority
                    loading="eager"

                />
            </motion.div>                           
    )
}
