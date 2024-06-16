"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useGameState } from "../GameContext/hooks";
import { Card } from "../GameContext/types";
import Image from "next/image";
import { memo, useState } from "react";

export default memo(function OpponentHand()  {
	const [ { opponentsHand } ]  = useGameState()

	const [shouldShow, setShouldShow] = useState(false)

	return (
		<>
			<div className="absolute top-6 left-1/2 -translate-x-1/2 flex"> 
				{
					opponentsHand.map((card) => (
						<AnimatePresence key={card.name}>
						
							{
								shouldShow &&
								<motion.div>
									<Image
										draggable={false}
										width={100}
										height={200}
										className={`playersCard`}
										src={"/cards/cardback.png"}
										alt="card"

									/>
								</motion.div>
								}
							
						</AnimatePresence>
					))
				}
			</div>
			{
					opponentsHand.map((card, index) => (
						<AnimatePresence key={card.name}>
							{	
							!shouldShow &&
							<motion.div 
								onAnimationComplete={() => {
									index === opponentsHand.length - 1 && setShouldShow(true)
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
									top: 24,
									left: `calc(50% + ${100 * index}px)`,
									transform: `translateX(calc(-50% - ${ 100 * opponentsHand.length / 2 - 50}px))`,
									
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
									src="/cards/cardback.png"
									alt="card"
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


