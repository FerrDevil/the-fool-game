"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useGameState } from "../GameContext/hooks";
import { Card } from "../GameContext/types";
import Image from "next/image";
import { memo, useState } from "react";
import PlayerCard from "./PlayerCard";

export default memo(function PlayersHand()  {
	const [ { playersHand } ]  = useGameState()

	const [shouldShow, setShouldShow] = useState(false)

	return (
		<>
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex"> 
				{
					playersHand.map((card) => (
						<AnimatePresence key={card.name + card.suit}>
						
							{
								shouldShow &&
								<PlayerCard card={card}/>
							}
							
						</AnimatePresence>
					))
				}
			</div>
			{
					playersHand.map((card, index) => (
						<AnimatePresence key={card.name}>
							{	
							!shouldShow &&
							<motion.div 
								onAnimationComplete={() => {
									index === playersHand.length - 1 && setShouldShow(true)
								}}
								initial={{
									position: "absolute",
									left: 80,
									top: "50%",
									transform: `translateY(-50%)`,
									pointerEvents: "none",
									userSelect: "none"
								}}
								animate={{
									top: "unset",
									bottom: 24,
									left: `calc(50% + ${100 * index}px)`,
									transform: `translateX(calc(-50% - ${ 100 * playersHand.length / 2 - 50}px))`,
									
								}}
								exit={{
									display: "none"
								}}
								transition={{
									duration: 1,
									delay: 0.1 * index,
									display: {
										delay: 0,
										duration: 0
									}
								}}
							>
								<Image
									draggable={false}
									width={100}
									height={200}
									className={`playersCard`}
									src={card.path}
									alt="card"
									loading="eager"
									priority

								/>
							</motion.div>
							}
						</AnimatePresence>
					))
				}
		</>
		
	)
})


