import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import './Contact.css';
import Map from '../UI/Map/Map';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState('');
  const [enquiry, setEnquiry] = React.useState('');

  const handleStatusChange = event => {
    setStatus(event.target.value);
  };

  const handleEnquiryChange = event => {
    setEnquiry(event.target.value);
  };

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
      <h3 className="LongText">hello@buzzworthystudio.com</h3>

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
          {/* <select>
            <option>User</option>
            <option>Retailer</option>
          </select> */}
          <FormControl className={classes.formControl}>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              value={status}
              onChange={handleStatusChange}>
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'retailer'}>Retailer</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="FormControl">
          <h6>Email</h6>
          {/* <input type="email" /> */}
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div className="FormControl">
          <h6>Tell us more about your Enquiry</h6>
          {/* <select>
            <option>Products</option>
            <option>Onboarding</option>
            <option>Refund</option>
            <option>Other</option>
          </select> */}
          <FormControl className={classes.formControl}>
            <InputLabel id="enquiry">Enquiry</InputLabel>
            <Select
              labelId="enquiry"
              id="enquiry"
              value={enquiry}
              onChange={handleEnquiryChange}>
              <MenuItem value={'products'}>Products</MenuItem>
              <MenuItem value={'onboarding'}>Onboarding</MenuItem>
              <MenuItem value={'refund'}>Refund</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="FormControl">
          <h6>Message</h6>
          {/* <textarea /> */}
          <TextareaAutosize
            aria-label="empty textarea"
            rowsMin={5}
            colsMin={5}
            placeholder="Empty"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
