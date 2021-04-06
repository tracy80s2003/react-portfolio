import React, { Component } from 'react';
import resumeData from './resumeData.json';

export default class Testimonials extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              {resumeData.testimonials1} <p id="testimonialName">- Daniel Robles / Digital Ad Operations Specialist at Blue Chip Marketing Worldwide</p>
              </p>
              <p className="lead">
              {resumeData.testimonials2} <p id="testimonialName">- Joyce Riggs / Accounts Payable at Heartland Pump</p>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

              </div>
            </aside>
          </div>
        </section>
        );
  }
}