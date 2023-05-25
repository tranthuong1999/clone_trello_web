import React from 'react'
import Task from '../Task/Task'

const Column = () => {
    return (
        <div className='column'>
            <header> Brainstorm</header>
            <ul className='task-list'>
                <Task />
                <li className='task-item'> Add what you like work to below</li>
                <li className='task-item'> Add what you like work to below</li>
                <li className='task-item'> Add what you like work to below</li>
                <li className='task-item'> Add what you like work to below</li>
                <li className='task-item'> Add what you like work to below</li>
            </ul>
            <footer> Add another card</footer>
        </div>
    )
}

export default Column