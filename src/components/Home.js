import React from 'react';
// import Card from './Card';
import { Link } from 'react-router-dom';
import {name, role, portfolio} from './resumeData.json';

const Home = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>{name} | {role}</h1>
                <Link className="btn-main-offer" to="/contact" >Contact Me</Link>
            </div>
        </div>
    )
}

export default Home
