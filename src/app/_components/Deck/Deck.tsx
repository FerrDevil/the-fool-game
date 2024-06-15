"use client"
import Image from "next/image"
import { useGameState } from "../GameContext/hooks"

export default function Deck() {
   
    const [{ deck }, action] = useGameState()
    return (
        <div className="fixed left-20 top-1/2 w-24 h-40 -translate-y-1/2" >
            {
                deck.map( (card, cardIndex) => 
                    <Image 
                        draggable={false}
                        style={{
                            transform: `rotateX(40deg) translateY(${-cardIndex}px) ${ deck.length - 1 === cardIndex ? "rotateZ(90deg) translateY(-50%)" : ""}`,
                            zIndex: deck.length - 1 === cardIndex? -1 : "unset"
                        }}
                        className="absolute left-0 top-0 w-24 h-40"
                        key={card.name + card.suit}
                        width={100} 
                        height={200} 
                        src={deck.length - 1 === cardIndex? card.path : "/cards/cardback.png"}
                        alt={card.name} 
                        priority
                    />
                )
            }
        </div>
    )
}
