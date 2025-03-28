import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Welcome to Global International School</h1>
            <div className="metrics">
                <div className="metric">
                    <h2>Students Enrolled</h2>
                    <p>1200</p>
                </div>
                <div className="metric">
                    <h2>Teachers</h2>
                    <p>75</p>
                </div>
                <div className="metric">
                    <h2>Courses Offered</h2>
                    <p>30</p>
                </div>
                <div className="metric">
                    <h2>Events This Month</h2>
                    <p>5</p>
                </div>
            </div>
            <div className="news">
                <h2>Latest News</h2>
                <ul>
                    <li>School Annual Day Celebration on March 15</li>
                    <li>New Science Lab inaugurated</li>
                    <li>Parent-Teacher Meeting scheduled for March 20</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;