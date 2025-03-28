import React from 'react';
import './Achievers.css';

const Achievers: React.FC = () => {
    const achieversList = [
        { name: 'John Doe', achievement: 'Won National Science Fair 2023' },
        { name: 'Jane Smith', achievement: 'First Place in State Math Olympiad' },
        { name: 'Emily Johnson', achievement: 'Gold Medal in International Art Competition' },
        { name: 'Michael Brown', achievement: 'Best Debater in National Debate Championship' },
    ];

    return (
        <div className="achievers-container">
            <h2>Our Achievers</h2>
            <ul className="achievers-list">
                {achieversList.map((achiever, index) => (
                    <li key={index} className="achiever-item">
                        <h3>{achiever.name}</h3>
                        <p>{achiever.achievement}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Achievers;