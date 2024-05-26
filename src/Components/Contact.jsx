import React from 'react';
import Header from './Header';

const Contact = () => {
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
                              <div className="col-lg-4">
                                  <div className="contact-item">
                                      <i className="fas fa-envelope"></i>
                                      <h5>Mail</h5>
                                      <h6>zeegoldinvestment@yahoo.com</h6>
                                  </div>
                              </div>
                              <div className="col-lg-4">
                                  <div className="contact-item">
                                      <i className="fas fa-map-marker-alt"></i>
                                      <h5>Address</h5>
                                      <h6>KLM 49 lekki Epe Expressway by elemoro police station, Lagos State.</h6>
                                  </div>
                              </div>
                              <div className="col-lg-4">
                                  <div className="contact-item">
                                      <i className="fas fa-phone-alt"></i>
                                      <h5>Phone</h5>
                                      <h6>07025001968, 07025001969, 08024612082

                                      </h6>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="row mt-5">
                              <div className="col-lg-6">
                                  <label>Name Surname</label>
                                  <input type="text" className="inp-contact" />
                              </div>
                              <div className="col-lg-6">
                                  <label>Phone</label>
                                  <input type="text" className="inp-contact" />
                              </div>
                              <div className="col-lg-12">
                                  <label>Subject</label>
                                  <input type="text" className="inp-contact" />
                              </div>
                              <div className="col-lg-12">
                                  <label>Message</label>
                                  <textarea type="text" className="ta-contact" rows="4"></textarea>
                              </div>
                              <div className="col-lg-12">
                                  <button className="btn-contact">Send Message</button>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
      </div>
  )
}

export default Contact