"use client"
import { useMemo } from "react"
import { useGameState } from "../GameContext/hooks"

export default function EndingScreen() {

    const [{ending}, dispatch] = useGameState()


    const endingHeading = useMemo(() => {
        switch(ending){
            case null : {
                return null
            }
            case "win" : {
                return "You win!"
            }
            case "defeat" : {
                return "You lose!"
            }
            case "tie" : {
                return "A tie!"
            }
            default: {
                throw Error("Incorrect ending field provided")
            }
        }
    }, [ending])
    return (
        <>
            { 
                endingHeading !== null ?
                    <div className="absolute inset-0 bg-black/50 grid place-items-center">
                        <div className="p-2 bg-white">
                            <h2>{endingHeading}</h2>
                            <button onClick={() => { dispatch({ type: "reset"})}}>New Game</button>
                        </div>
                    </div> 
                :
                    <></>
            }
        </>
        
        
    )
}
