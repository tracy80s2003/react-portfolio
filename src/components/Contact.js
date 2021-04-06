import React, { Component } from 'react';
import resumeData from './resumeData.json';

export default class Contact extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work, comments or suggestions below...
              </p>
              <h5>{resumeData.contactMe}</h5>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}