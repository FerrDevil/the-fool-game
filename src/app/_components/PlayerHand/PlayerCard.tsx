"use client"
import React, { useMemo } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { Card } from '../GameContext/types';
import { useDrag } from 'react-dnd';
import { useGameState } from '../GameContext/hooks';


export default function PlayerCard({ card } : { card : Card } ) {
    const [ { table, turn, localTurn } ]  = useGameState()

    const isPlayable = useMemo(() => (
        turn === "player" && localTurn === "player" && (
            table
                .flat()
                .reduce( (prev, card ) => [...prev, card.value], [] as number[] )
                .includes(card.value) 
            || table.length === 0
        ) ||
        turn === "opponent" && localTurn === "player" && (
            table![table.length - 1]![0].suit === card.suit && table![table.length - 1]![0].value < card.value
        )
    ), [card, table])
    /* console.log(card, turn, localTurn) */
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
                /* drag */
                draggable
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}
            /*  whileDrag={{ scale: 1.2 }} */
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
