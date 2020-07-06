import React from 'react';

import './Contact.css';
import Map from '../UI/Map/Map';

const Contact = () => {
  return (
    <div className="Contact">
      <h1>
        hello<span className="Red">.</span>
      </h1>

      <h2>
        Let's work together to create game-changing experiences that will take
        your brand from bland to buzzworthy
      </h2>

      <h3>CONTACT</h3>
      <h3>hello@buzzworthystudio.com</h3>

      <div className="CardContainer">
        {/* <a href="#Contact"> */}
        <div className="Card">
          <div className="CardImg">
            <img
              src={require('../../../assets/contact-sales.png')}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button onClick={window.scrollTo.bind(null, 0, 2000)}>
              Contact Form
            </button>
          </div>
        </div>
        {/* </a> */}
        <div className="Card">
          <div className="CardImg">
            <img
              src={require('../../../assets/contact-press.png')}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Have Press Inquiries?</h3>
            <p>Contact us with press requests.</p>
            <button>Contact Press</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require('../../../assets/contact-xrp.png')}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Questions About XRP?</h3>
            <p>For the fastest answers, check our FAQs.</p>
            <button>See All FAQs</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require('../../../assets/contact-sales.png')}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>Contact Sales</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require('../../../assets/contact-press.png')}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>Contact Press</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require('../../../assets/contact-xrp.png')}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>See All FAQs</button>
          </div>
        </div>
      </div>

      <Map />

      <div className="ContactForm">
        <div className="FormControl">
          <h6>I am a</h6>
          <select>
            <option>User</option>
            <option>Retailer</option>
          </select>
        </div>
        <div className="FormControl">
          <h6>Email</h6>
          <input type="email" />
        </div>
        <div className="FormControl">
          <h6>Tell us more about your Enquiry</h6>
          <select>
            <option>Products</option>
            <option>Onboarding</option>
            <option>Refund</option>
            <option>Other</option>
          </select>
        </div>
        <div className="FormControl">
          <h6>Message</h6>
          <textarea />
        </div>
      </div>
    </div>
  );
};

export default Contact;
