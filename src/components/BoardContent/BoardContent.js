import React from 'react'
import Column from '../Column/Column';
import './BoardContent.scss';

const BoardContent = () => {
    return (
        <div className='board-content'>
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    )
}

export default BoardContent