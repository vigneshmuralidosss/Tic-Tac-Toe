import React from 'react'

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard() {
  return (
    <ol id='game-board'>
        {initialGameBoard.map((row,index)=>(<li key={index}>
            <ol>
                {row.map((playSymbol, indexC)=>(<li key={indexC}>
                    <button>{playSymbol}</button>
                </li>))}
            </ol>
        </li>))}
    </ol>
  )
}
