import React, { Component } from 'react';
import './FAQ.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FAQListingItem from '../../additionalResources/faq/listItems/ListingItem';
import Navbar from './Navbar/Navbar';

const Header = styled.p`
  letter-spacing: -3.36px;
  font-size: 77px;
  color: rgb(0, 0, 0);
  display: block;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -1.17px;
  line-height: 1;
  max-width: 960px;
  margin-bottom: 30px;
  margin-top: 40px;
  text-align: center;
  width: 100%;
  white-space: pre-wrap;
  transition: all 300ms ease-in-out 0s;
  background-image: url('/images/bg/Gradient.jpg');
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: center top;
`;

class FAQ extends Component {
  state = {
    basicFaq: [
      {
        id: 1,
        title: 'What is Dharma?',
        body:
          "Dharma is the world's first cryptobank. It does everything a normal bank does, but it's not a bank. Using Dharma, you can deposit and withdraw stablecoins, cryptocurrencies pegged to the value of $1 USD, anytime, day or night, and earn interest instantly. From Argentina to Zimbabwe, we make it easy for you to save your dollars and earn a high rate of return, instantly.",
        collection: 'basic'
      },
      {
        id: 2,
        title: 'How do I sign up for Dharma?',
        body:
          'Head on over to https://www.dharma.io/ to create your account and get started. All it takes is an email address and internet connection.',
        collection: 'basic'
      },
      {
        id: 3,
        title: 'What are the requirements to use Dharma?',
        body:
          'All you need to use Dharma is an email address and internet connection.',
        collection: 'basic'
      },
      {
        id: 4,
        title: 'Where is Dharma available? Is Dharma available in my country?',
        body:
          'Dharma is available anywhere in the world, as long as you have an email address and internet connection.',
        collection: 'basic'
      },
      {
        id: 5,
        title: 'What if I need help accessing my Dharma account?',
        body:
          'If you are having trouble accessing or creating your Dharma account, please reach out to ',
        collection: 'basic'
      }
    ]
  };

  render() {
    return (
      <div className="Faq_wrapper ">
        <Navbar />
        <span>
          <Header className="faq_header">Frequently Asked Questions</Header>
        </span>
        <div className="header_secondary_wrapper">
          <p className="header_secondary">The Basics</p>
        </div>
        <div className="st_faq_listing_wrapper">
          {this.state.basicFaq.map(faq => (
            <FAQListingItem
              key={faq.id}
              title={faq.title}
              body={faq.body}
              id={faq.id}
              colections={faq.collection}
            />
          ))}
        </div>
        <div className="header_secondary_wrapper">
          <p className="header_secondary">Earning Interest on Dharma</p>
        </div>
        <div className="st_faq_listing_wrapper">
          {this.state.basicFaq.map(faq => (
            <FAQListingItem
              key={faq.id}
              title={faq.title}
              body={faq.body}
              id={faq.id}
              colections="EarningInterestonDharma"
            />
          ))}
        </div>
        <div className="header_secondary_wrapper">
          <p className="header_secondary">Smart Wallets</p>
        </div>
        <div className="st_faq_listing_wrapper">
          {this.state.basicFaq.map(faq => (
            <FAQListingItem
              key={faq.id}
              title={faq.title}
              body={faq.body}
              id={faq.id}
              colections="SmartWallets"
            />
          ))}
        </div>
        <div className="header_secondary_wrapper">
          <p className="header_secondary">Stablecoins</p>
        </div>
        <div className="st_faq_listing_wrapper">
          {this.state.basicFaq.map(faq => (
            <FAQListingItem
              key={faq.id}
              title={faq.title}
              body={faq.body}
              id={faq.id}
              colections="Stablecoins"
            />
          ))}
        </div>
        <div className="follow_section">
          <div className="header_secondary_wrapper m-0">
            <p className="header_secondary" style={{ maxWith: 580 }}>
              Didn’t find what you were looking for?
            </p>
          </div>
          <span>
            <p className="small_header">
              Feel free to reach out to us directly, and we’ll get back to you
              as soon as possible.
            </p>
          </span>
          <div className="follow_links">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="follow_links_item">
                <svg
                  display="block"
                  fill="none"
                  height="60"
                  viewBox="0 0 60 60"
                  width="60"
                  class="sc-jzJRlG jMuEw">
                  <linearGradient
                    id="twitter"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    x2="46.9714"
                    y1="0"
                    y2="68.9479">
                    <stop offset="0" stop-color="#28aae1"></stop>
                    <stop offset="1" stop-color="#6ed0f9"></stop>
                  </linearGradient>
                  <rect
                    fill="url(#twitter)"
                    height="60"
                    rx="16.7122"
                    width="60"></rect>
                  <path
                    d="m42.3086 22.0203c-.9199.4079-1.9083.6836-2.9458.8076 1.0589-.6348 1.8722-1.6399 2.2552-2.8377-.9912.5879-2.0887 1.0147-3.2571 1.2447-.9355-.9969-2.2686-1.6197-3.7438-1.6197-2.8326 0-5.129 2.2964-5.129 5.1289 0 .402.0453.7934.1328 1.1689-4.2627-.214-8.0421-2.2559-10.5717-5.359-.4415.7575-.6945 1.6385-.6945 2.5785 0 1.7795.9055 3.3494 2.2817 4.2692-.8408-.0267-1.6316-.2574-2.3231-.6416-.0005.0214-.0005.0429-.0005.0645 0 2.4851 1.7681 4.558 4.1143 5.0293-.4303.1172-.8835.1801-1.3512.1801-.3305 0-.6518-.0323-.9651-.0922.6528 2.0376 2.5469 3.5207 4.7913 3.5619-1.7553 1.3758-3.9669 2.1957-6.37 2.1957-.414 0-.8222-.0242-1.2235-.0718 2.2698 1.4554 4.9659 2.3045 7.8623 2.3045 9.4341 0 14.5932-7.8155 14.5932-14.5933 0-.2224-.0051-.4436-.0149-.6636 1.0022-.7231 1.8718-1.6264 2.5594-2.6549z"
                    fill="#fff"></path>
                </svg>
                <p>
                  Tweet Us your
                  <br />
                  Question
                </p>
              </div>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="follow_links_item">
                <svg
                  fill="none"
                  height="60"
                  viewBox="0 0 60 60"
                  width="60"
                  class="sc-jzJRlG jsyQwg">
                  <linearGradient
                    id="mail"
                    gradientUnits="userSpaceOnUse"
                    x1="8.06324"
                    x2="54.8241"
                    y1="-.000012"
                    y2="2.70552">
                    <stop offset="0" stop-color="#5722ff"></stop>
                    <stop offset="1" stop-color="#c603ff"></stop>
                  </linearGradient>
                  <rect
                    fill="url(#mail)"
                    height="60"
                    rx="16.7122"
                    width="60"></rect>
                  <g clip-rule="evenodd" fill="#fff" fill-rule="evenodd">
                    <path d="m43.2956 21.7378c.0646.2044.097.443.097.7155v13.4934c0 1.3629-1.0348 2.4533-2.3284 2.4533h-21.3433c-1.2935 0-2.3283-1.0904-2.3283-2.4533v-13.4934c0-.2725.0323-.5111.097-.7155l12.2886 10.1541c.388.3066.9054.2726 1.2288-.0341z"></path>
                    <path d="m19.7208 20h21.3433c.3234 0 .6144.0681.9054.1704l-11.5771 9.5748-11.5447-9.5748c.2587-.1023.5497-.1704.8731-.1704z"></path>
                  </g>
                </svg>
                <p>
                  Send Us an
                  <br />
                  Email
                </p>
              </div>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="follow_links_item">
                <svg
                  fill="none"
                  height="60"
                  viewBox="0 0 61 60"
                  width="61"
                  class="sc-jzJRlG KJrAr">
                  <linearGradient
                    id="discord"
                    gradientUnits="userSpaceOnUse"
                    x1="10.8853"
                    x2="45.648"
                    y1="6.62369"
                    y2="56.4721">
                    <stop offset="0" stop-color="#b2bcfe"></stop>
                    <stop offset="1" stop-color="#7281e0"></stop>
                  </linearGradient>
                  <rect
                    fill="url(#discord)"
                    height="60"
                    rx="16.7122"
                    width="60"
                    x=".488281"></rect>
                  <g fill="#fff">
                    <path d="m27.767 28.585c-.8608 0-1.5404.75-1.5404 1.665s.6947 1.665 1.5404 1.665c.8608 0 1.5404-.75 1.5404-1.665.0151-.915-.6796-1.665-1.5404-1.665zm5.5122 0c-.8608 0-1.5404.75-1.5404 1.665s.6947 1.665 1.5404 1.665c.8608 0 1.5404-.75 1.5404-1.665s-.6796-1.665-1.5404-1.665z"></path>
                    <path d="m40.6178 16h-20.2367c-1.7066 0-3.0959 1.38-3.0959 3.09v20.28c0 1.71 1.3893 3.09 3.0959 3.09h17.1257l-.8004-2.775 1.933 1.785 1.8274 1.68 3.2469 2.85v-26.91c0-1.71-1.3894-3.09-3.0959-3.09zm-5.8294 19.59s-.5437-.645-.9967-1.215c1.9784-.555 2.7335-1.785 2.7335-1.785-.6192.405-1.2082.69-1.7368.885-.7551.315-1.48.525-2.1898.645-1.4498.27-2.7787.195-3.9114-.015-.8608-.165-1.6008-.405-2.22-.645-.3473-.135-.7249-.3-1.1025-.51-.0453-.03-.0906-.045-.1359-.075-.0302-.015-.0453-.03-.0604-.045-.2718-.15-.4228-.255-.4228-.255s.7249 1.2 2.6428 1.77c-.453.57-1.0118 1.245-1.0118 1.245-3.3376-.105-4.6061-2.28-4.6061-2.28 0-4.83 2.1747-8.745 2.1747-8.745 2.1747-1.62 4.2436-1.575 4.2436-1.575l.1511.18c-2.7184.78-3.9719 1.965-3.9719 1.965s.3323-.18.891-.435c1.616-.705 2.8996-.9 3.4282-.945.0906-.015.1661-.03.2567-.03.9213-.12 1.9633-.15 3.0506-.03 1.4347.165 2.9751.585 4.5458 1.44 0 0-1.1931-1.125-3.7604-1.905l.2114-.24s2.069-.045 4.2437 1.575c0 0 2.1746 3.915 2.1746 8.745 0 0-1.2836 2.175-4.6212 2.28z"></path>
                  </g>
                </svg>
                <p>
                  Join Our
                  <br />
                  Discord
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
