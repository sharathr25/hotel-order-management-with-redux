import React from 'react';
import { Link } from 'react-router-dom';
import './WorkerSelector.module.scss';

const WorkerSelector = () => {
    return (
        <div className="worker">
            <h1>Who are you?</h1>
            <ul className="worker__list">
                <li className="worker__list-item">
                    <Link to="/cook" className="worker__list-link">Cook</Link>
                </li>
                <li className="worker__list-item">
                    <Link to="/waiter" className="worker__list-link">Waiter</Link>
                </li>
                <li className="worker__list-item">
                    <Link to="/manager" className="worker__list-link">Manager</Link>
                </li>
            </ul>
        </div>
    )
}

export default WorkerSelector;