"use client"
import { useGameState } from "../GameContext/hooks"
import CardPlace from "./CardPlace"

export default function Table() {
    const [{ table }] = useGameState()
    return (
        <div className='absolute left-1/2 top-1/2 border-2 border-red-600 flex gap-2 -translate-x-1/2 -translate-y-1/2'>
            {
                table.map((cardPlace, cardPlaceIndex) => (
                    <CardPlace key={cardPlaceIndex} cardPlace={cardPlace}/>
                ))
            }
            <CardPlace/>
        </div>
    )
}
