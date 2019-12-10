import React from 'react';

const Resume = ({ data }) => {
  const { skillmessage, education, work, skills } = data;
  const educationC = education.map(edu => (
    <div key={edu.school}>
      <h3>{edu.school}</h3>
      <p className='info'>
        {edu.degree} <span>&bull;</span>
        <em className='date'>{edu.graduated}</em>
      </p>
      <p>{edu.description}</p>
    </div>
  ));
  const workC = work.map(item => (
    <div key={item.company}>
      <h3>{item.company}</h3>
      <p className='info'>
        {item.title}
        <span>&bull;</span> <em className='date'>{item.years}</em>
      </p>
      <p>{item.description}</p>
    </div>
  ));
  const skillsC = skills.map(skill => {
    const className = `bar-expand ${skill.name.toLowerCase()}`;
    return (
      <li key={skill.name}>
        <span style={{ width: skills.level }} className={className} />
        <em>{skill.name}</em>
      </li>
    );
  });

  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>{educationC}</div>
          </div>
        </div>
      </div>

      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className='nine columns main-col'>{workC}</div>
      </div>

      <div className='row skill'>
        <div className='three columns header-col'>
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          <p>{skillmessage}</p>

          <div className='bars'>
            <ul className='skills'>{skillsC}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
