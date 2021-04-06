import React, { Component } from 'react';
import resumeData from './resumeData.json';
import headshot from '../Images/headshot.jpeg'

export default class About extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="about">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>{resumeData.linkedinId}
                </h4>
                <img src={headshot} alt='Tracy Golden'></img>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}