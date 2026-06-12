import React, { useState } from 'react'

export default function ({ name, symbol, isActive }) {
    const [isEditName, setEditName] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    function handleEditName() {
        setEditName(isEditName => !isEditName)
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    return (
        <li className={isActive ? 'active':undefined}>
            <span className='player'>
                {isEditName ? <input type='text' value={playerName} onChange={handleChange} /> :
                    <span className='player-name'>{playerName}</span>}
                <span className='player-symbol'>{symbol}</span>
            </span>

            <button onClick={handleEditName}>{isEditName ? 'Save' : 'Edit'}</button>
        </li>

    )
}
