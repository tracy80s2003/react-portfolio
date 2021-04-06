import React from 'react';
import Card from './Card';
import {name, role, portfolio} from './resumeData.json';

const Home = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>{name} | {role}</h1>
                <a href="/contact" className="btn-main-offer">Contact Me</a>
            </div>
            {/* <Card project={portfolio[0]}></Card>
            <Card project={portfolio[1]}></Card>
            <Card project={portfolio[2]}></Card> */}
        </div>
    )
}

export default Home
