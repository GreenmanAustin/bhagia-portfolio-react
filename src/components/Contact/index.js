import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) {
        console.log(e.target.name);
        if (e.target.name === 'email' && e.target.value.length > 0) {
            const isValid = validateEmail(e.target.value);
            console.log("valid:", isValid);
            if (!isValid) {
                console.log("oops");
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
                setFormState({...formState, [e.target.name]: e.target.value });
                console.log(formState);
            }
        } else {   
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
             setErrorMessage('');
             setFormState({...formState, [e.target.name]: e.target.value });
        }
        }
            
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
              <input type="text" name="name" className="contactInput" defaultValue={name}onBlur={handleChange}/>
            </div>
            <div>
              <label htmlFor="email" className="contactText">Email address:</label> 
              <input type="email" name="email" className="contactInput" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
              <label htmlFor="message" className="contactText">Message:</label>
        
              <textarea name="message" rows="5" className="contactInput" defaultValue={message} onBlur={handleChange}></textarea>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button className="submitBtn" type="submit" defaultValue={message}>Submit</button>
          </form>
        </section>
        );
    }
    
export default ContactForm;