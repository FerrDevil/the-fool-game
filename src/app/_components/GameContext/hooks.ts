"use client"
import { useContext } from "react"
import { gameContext } from "./GameContext"

export const useGameState = () => {
    const gameContextValues = useContext(gameContext)
    if( gameContextValues === null) throw Error("Context value is null")
    return gameContextValues
}