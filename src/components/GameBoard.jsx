import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({onSelectSquare, turn}) {

    let gameBoard = initialGameBoard;
    console.log(turn)
    for(let tur of turn){
        const { square, player} = tur;
        const { row,col} = square
        gameBoard[row][col]= player
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)
    
    // function handlePlayerSymbol(rowIndex, colIndex) {
    //     setGameBoard((pre) => {
    //         const updatedGameBoard = [...pre.map(innerArr => [...innerArr])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedGameBoard;
    //     })
    //     onSelectSquare();
    // }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, indexR) => (<li key={indexR}>
                <ol>
                    {row.map((playSymbol, indexC) => (<li key={indexC}>
                        <button onClick={() => onSelectSquare(indexR, indexC)}>{playSymbol}</button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    )
}
