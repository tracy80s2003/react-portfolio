import React, { Component } from 'react';
import resumeData from './resumeData.json';
import headshot from '../Images/headshot.jpeg';
// import { Document } from 'react-pdf'
import pdf from '../documents/resume.pdf'

export default class About extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="about">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              {resumeData.aboutme}
              </p>
            </div>
          </div>
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              PDF: <a href={pdf}>Click here to view RESUME</a>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                    {resumeData.name} | {resumeData.role}
                </h4>

                <img className="headshot" src={headshot} alt='Tracy Golden'></img>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}