import React from 'react';

const Testimonials = ({ data: { testimonials } }) => {
  const testimonialsC = testimonials.map(testimonial => (
    <li key={testimonial.user}>
      <blockquote>
        <p>{testimonial.text}</p>
        <cite>{testimonial.user}</cite>
      </blockquote>
    </li>
  ));

  return (
    <section id='testimonials'>
      <div className='text-container'>
        <div className='row'>
          <div className='two columns header-col'>
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className='ten columns flex-container'>
            <ul className='slides'>{testimonialsC}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
