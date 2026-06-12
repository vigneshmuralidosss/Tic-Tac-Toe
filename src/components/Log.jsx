import React from 'react'

export default function Log({turnsSq}) {
  return (
   <ol id='log'>
    {turnsSq.map((turn,i)=> <li key={i}> {turn.player} selected {turn.square.row},{turn.square.col}</li>)}
   </ol>
  )
}
