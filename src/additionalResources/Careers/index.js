import React, { Component } from 'react';

import './index.css';
import Hero from './Hero/Hero';
import Benefits from './Benefits/Benefits';
import Article from './Article/Article';
import img1 from '../../assets/photo1.png';
import img2 from '../../assets/photo2.png';
import img3 from '../../assets/photo3.png';
import Investors from './Investors/Investors';
import Roles from './Roles/Roles';
import Contact from './Contact/Contact';

class CareersContainer extends Component {
  render() {
    return (
      <div className="Careers">
        <Hero />
        <div className="ArticlesContainer">
          <Article img={img1} alignment="left" SectionTitle="Meet Dharma.">
            We're a diverse team of designers, developers, smart contract
            architects, and storytellers. Our backgrounds marry expertise from
            the leading cryptocurrency projects with wisdom from the established
            technology juggernauts. Also, we're pretty darn like-able — see for
            yourself.
          </Article>
          <Article
            img={img3}
            alignment="right"
            SectionTitle="What we're building.">
            The products that will push cryptocurrency into the mainstream won't
            simply recreate existing systems — they will leapfrog their
            traditional counterparts. We pride ourselves on packaging the
            bleeding edge of blockchain tech into delightful financial products
            that are globally accessible to anyone with an Internet connection —
            something unheard of in traditional finance.
          </Article>
          <Article
            img={img2}
            alignment="left"
            SectionTitle="Why we're doing it">
            For billions, access to a smartphone & the Internet means access to
            Facebook, but not banking. It means access to Spotify, but not
            savings. We believe digital currencies unlock opportunities to make
            financial services as global and dynamic as the Internet itself —
            and that's what gets us out of bed every day.
          </Article>
        </div>
        <Benefits />
        <Investors />
        <Roles />
        <Contact />
        <div className="Strip" />
      </div>
    );
  }
}

export default CareersContainer;
