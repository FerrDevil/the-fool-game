"use client"
import type { DependencyList } from "react"
import { useEffect, useRef } from "react"

export default function useUpdateEffect(effectFunction: (() => void) | (() => (() => void)), dependencies: DependencyList | undefined){
    const ref = useRef(false)
    useEffect(() => {
        if (!ref?.current){
            ref.current = true
            return
        }
        const func = effectFunction()
        if (func){
            return func
        }
    }, dependencies)
}