import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
      
      

    return (
        <section className="contactSection">
          <h1 className="section-title">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="contactText">Name:</label>
              <br></br>
              <input type="text" name="name" className="contactInput" defaultValue={name}onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="email" className="contactText">Email address:</label> <br></br>
              <input type="email" name="email" className="contactInput" defaultValue={email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="message" className="contactText">Message:</label>
              <br></br>
              <textarea name="message" rows="5" className="contactInput" onChange={handleChange}/>
            </div>
            <button className="submitBtn" type="submit" defaultValue={message}>Submit</button>
          </form>
        </section>
        );
    }
    
export default ContactForm;