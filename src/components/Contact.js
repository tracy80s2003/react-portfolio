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
              <h5><strong>{resumeData.name}</strong></h5>
              <h5><strong>Cell:</strong> {resumeData.cell}</h5>
              <h5><strong>Email:</strong> {resumeData.email}</h5>
              <h5><strong>LinkedIn:</strong> {resumeData.linkedinId}</h5>
              <h5><strong>GitHub:</strong> {resumeData.imagebaseurl}</h5>
            </div>
          </div>
          <div>&nbsp;</div>
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="name">Enter Your Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      );
  }
}