import React, { useState } from 'react'
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/log';

export default function App() {
  const [turns, setPlayerturn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = (rowIndex,colIndex)=>{
    setActivePlayer((curActPlayer)=> curActPlayer === 'X'? 'O' : 'X' );
    setPlayerturn((prePlayer)=>{
      let currentPlayer = 'X';
      if(prePlayer.length>0 && prePlayer[0].player === 'X'){
        currentPlayer = 'O'
      }
      const updatedturn = [
        { square : {row: rowIndex,col: colIndex}, player : currentPlayer},
        ...prePlayer,
      ]
      return updatedturn
    })
  }

  return (
    <>
    <main>
      <div id='game-container'>
        <ol id='players'>
         <Player name = "Player1" symbol="X" isActive={activePlayer === 'X'}>Player1</Player>
         <Player name = "Player2" symbol="O"  isActive={activePlayer === 'O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turn = {turns} activePlayerSymbol = {activePlayer}/>
      </div>
    </main>
    <Log turnsSq={turns}/>
    </>
  );
}
