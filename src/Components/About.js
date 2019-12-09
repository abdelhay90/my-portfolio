import React, { Component } from 'react';

class About extends Component {
  render() {
    const {
      phone,
      email,
      resumeDownload,
      bio,
      name,
      image,
      address,
    } = this.props.data;
    const profilePic = 'images/' + image;
    const city = address.city;
    const state = address.state;

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img
              className='profile-pic'
              src={profilePic}
              alt='Tim Baker Profile Pic'
            />
          </div>
          <div className='nine columns main-col'>
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{name}</span>
                  <br />
                  <span>
                    {city} {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a href={resumeDownload} className='button'>
                    <i className='fa fa-download' />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
