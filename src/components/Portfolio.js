import React, { Component } from 'react';
import Card from './Card';
import { portfolio } from './resumeData.json';
import beerGourmet from '../Images/beerGourmet.png';
import passwordGenerator from '../Images/passwordGenerator.png';
import budgetTracker from '../Images/budgetTracker.gif';
import gameboard from '../Images/gameboard.png';
import workdayScheduler from '../Images/workdayScheduler.png';
import recording from '../Images/recording.gif';

export default class Portfolio extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
    <section id="portfolio">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={passwordGenerator} className="card-img-top" alt="Password Generator" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
              <p className="card-text"><Card project={portfolio[0]}></Card></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={workdayScheduler} className="card-img-top" alt="Work Day Scheduler" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
              <p className="card-text"><Card project={portfolio[1]}></Card></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={beerGourmet} className="card-img-top" alt="Beer Gourmet" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[2]}></Card></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={recording} className="card-img-top" alt="README Generator" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[3]}></Card></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={gameboard} className="card-img-top" alt="Jeopardy Trivia Game" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[4]}></Card></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={budgetTracker} className="card-img-top" alt="Budget Tracker" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[5]}></Card></p>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}
}
