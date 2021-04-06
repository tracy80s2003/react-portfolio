import React, { Component } from 'react';
import resumeData from './resumeData.json';
import headshot from '../Images/headshot.jpeg';

export default class Testimonials extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              {resumeData.aboutme}
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                    {resumeData.name} | {resumeData.role}
                </h4>

                <img src={headshot} alt='Tracy Golden'></img>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}