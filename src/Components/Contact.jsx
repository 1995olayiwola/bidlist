import React,{useRef} from 'react';
import Header from './Header';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8tn0k3z', 'template_mjod82p', form.current, {
        publicKey: 'FhATARpaLIl3p3f19',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent successfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed!")
        },
      );
    }
  return (
    <div>
        <Header/>
      <section className="contact">
          <div className="page-top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <h1 className="page-title">Contact</h1>
                          <h2 className="page-description">Contact</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="page-content">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="contact-item">
                                      <i className="fas fa-envelope"></i>
                                      <h5>Mail</h5>
                                      <h6>info@bidconnect.org</h6>
                                      <h6>reg@bidconnect.org</h6>
                                  </div>
                              </div>
                             
                              <div className="col-lg-6">
                                  <div className="contact-item">
                                      <i className="fas fa-phone-alt"></i>
                                      <h5>Phone</h5>
                                      <h6> +1 (323) 927 - 5337

                                      </h6>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <form ref={form} onSubmit={sendEmail}>
                      <div className="col-lg-12">
                          <div className="row mt-5">
                              <div className="col-lg-6">
                                  <label>Name Surname</label>
                                  <input type="text" className="inp-contact"  name="from_name" />
                              </div>
                              <div className="col-lg-6">
                                  <label>Phone</label>
                                  <input type="text" className="inp-contact"  name="user_phone"/>
                              </div>
                              <div className="col-lg-12">
                                  <label>Subject</label>
                                  <input type="text" className="inp-contact" name="user_email"/>
                              </div>
                              <div className="col-lg-12">
                                  <label>Message</label>
                                  <textarea type="text" className="ta-contact" rows="4" name="message"></textarea>
                              </div>
                              <div className="col-lg-12">
                                  <button className="btn-contact" value="Send">Send Message</button>
                              </div>
                          </div>
                      </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
      </div>
  )
}

export default Contact