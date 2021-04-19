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
              <p class="card-text"><small class="text-muted"><a target="_blank" rel="noreferrer" href="https://github.com/tracy80s2003/password-generator">View Repo</a> / <a target="_blank" rel="noreferrer" href="https://tracy80s2003.github.io/password-generator/">View Project</a></small></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={workdayScheduler} className="card-img-top" alt="Work Day Scheduler" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
              <p className="card-text"><Card project={portfolio[1]}></Card></p>
              <p class="card-text"><small class="text-muted"><a target="_blank" rel="noreferrer" href="https://github.com/tracy80s2003/work-day-scheduler">View Repo</a> / <a target="_blank" rel="noreferrer" href="https://tracy80s2003.github.io/work-day-scheduler/">View Project</a></small></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={beerGourmet} className="card-img-top" alt="Beer Gourmet" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[2]}></Card></p>
                <p class="card-text"><small class="text-muted"><a target="_blank" rel="noreferrer" href="https://github.com/tracy80s2003/Beer-Gourmet">View Repo</a> / <a target="_blank" rel="noreferrer" href="https://jenryval.github.io/Beer-Gourmet/">View Project</a></small></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={recording} className="card-img-top" alt="README Generator" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[3]}></Card></p>
                <p class="card-text"><small class="text-muted"><a target="_blank" rel="noreferrer" href="https://github.com/tracy80s2003/readme-generator">View Repo</a> / <a target="_blank" rel="noreferrer" href="https://tracy80s2003.github.io/readme-generator/">View Project</a></small></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={gameboard} className="card-img-top" alt="Jeopardy Trivia Game" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[4]}></Card></p>
                <p class="card-text"><small class="text-muted"><a target="_blank" rel="noreferrer" href="https://github.com/Geoff7709/jeopardy_trivia_game">View Repo</a> / <a target="_blank" rel="noreferrer" href="https://shielded-fjord-19309.herokuapp.com/">View Project</a></small></p>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src={budgetTracker} className="card-img-top" alt="Budget Tracker" />
            <div className="card-body">
              <h5 className="card-title">&nbsp;</h5>
                <p className="card-text"><Card project={portfolio[5]}></Card></p>
                <p class="card-text"><small class="text-muted"><a target="_blank" rel="noreferrer" href="https://github.com/tracy80s2003/budget-tracker">View Repo</a> / <a target="_blank" rel="noreferrer" href="https://whispering-dawn-63893.herokuapp.com/">View Project</a></small></p>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}
}
