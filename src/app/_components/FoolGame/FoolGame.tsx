"use client"
import React from 'react'
import GameContext from '../GameContext/GameContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import OpponentHand from '../OpponentHand/OpponentHand'
import PlayerHand from '../PlayerHand/PlayerHand'
import Table from '../Table/Table'
import Deck from '../Deck/Deck'
import EndTurnButton from '../EndTurnButton/EndTurnButton'
import EndingScreen from '../EndingScreen/EndingScreen'

export default function FoolGame() {
  return (
    <GameContext>
			<DndProvider backend={HTML5Backend}>
				<div>
					<OpponentHand/>
					<Table/>
					<PlayerHand/>
					<Deck/>
					<EndTurnButton/>
					<EndingScreen/>
				</div>
			</DndProvider>

        
        	
		</GameContext>
  )
}
