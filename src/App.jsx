import React from 'react'
import Player from './components/Player';
import GameBoard from './components/GameBoard';

export default function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
         <Player name = "Player1" symbol="X">Player1</Player>
         <Player name = "Player2" symbol="O"></Player>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}
