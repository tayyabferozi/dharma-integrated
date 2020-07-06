import React from 'react';

import './BlogBoxes.css';
import BlogBox from './BlogBox/BlogBox';
import Tiramisu from '../../../assets/Tiramisu.png';
import P2P from '../../../assets/P2P.png';
import ApplePay from '../../../assets/ApplePay.png';
import Zerofees from '../../../assets/Zerofees.png';
import Andriod from '../../../assets/Andriod.png';
import iOSBlog from '../../../assets/iOSBlog.png';
import RampsBlog from '../../../assets/RampsBlog.png';
import DTokens from '../../../assets/DTokens.png';
import MCD from '../../../assets/MCD.png';

const BlogBoxes = () => {
  return (
    <div className="BlogBoxes">
      <BlogBox
        image={Tiramisu}
        imgAlt="tiramisu"
        BoxTitle="Dharma Layer 2 Update – Introducing Tiramisu"
        BoxContent="Tiramisu is an open source solution for transaction scalability."
        GradientBg="&lt; 1 min read"></BlogBox>
      <BlogBox
        BoxTitle="Dharma ❤️ Layer Two"
        BoxContent="Dharma is working on a Layer Two solution to enable fast, scaleable payments. Check out our spec today!"
        GradientBg="3 min read"></BlogBox>
      <BlogBox
        image={P2P}
        imgAlt="tiramisu"
        BoxTitle="P2P Payments are live on Dharma"
        BoxContent="Today, we are excited to announce that peer-to-peer payments are live on Dharma. Claim your username and pay your friends today!"
        GradientBg=" 3 min read"></BlogBox>
      <BlogBox
        image={ApplePay}
        imgAlt="tiramisu"
        BoxTitle="Apple Pay is Live on Dharma"
        BoxContent="With zero-fee debit card deposits on Dharma, it takes less than 5 minutes to start earning 7% APR in your Dharma account."
        GradientBg=" 3 min read"></BlogBox>
      <BlogBox
        image={Zerofees}
        imgAlt="tiramisu"
        BoxTitle="Dharma Deposits are Now Fee-Free"
        BoxContent="With zero-fee debit card deposits on Dharma, it now takes less than 5 minutes to start earning 7% APR in your Dharma account."
        GradientBg=" 3 min read"></BlogBox>
      <BlogBox
        image={Andriod}
        imgAlt="tiramisu"
        BoxTitle="Dharma is live in the Google Play Store"
        BoxContent="A Cryptobank in Every Pocket"
        GradientBg=" 3 min read"></BlogBox>
      <BlogBox
        image={iOSBlog}
        imgAlt="tiramisu"
        BoxTitle="A Cryptobank in Every Pocket"
        BoxContent="Dharma is live in the iOS App Store"
        GradientBg=" 2 min read"></BlogBox>
      <BlogBox
        image={RampsBlog}
        imgAlt="tiramisu"
        BoxTitle="Deposit to Dharma Directly from Your Debit Card"
        BoxContent="Experience the magic of DeFi in seconds, without any fiat-to-crypto headache."
        GradientBg=" 2 min read"></BlogBox>
      <BlogBox
        image={DTokens}
        imgAlt="tiramisu"
        BoxTitle="Introducing&nbsp;the dToken"
        BoxContent="How Dharma makes money alongside our users"
        GradientBg=" 3 min read"></BlogBox>
      <BlogBox
        image={MCD}
        imgAlt="tiramisu"
        BoxTitle="Dharma is Adding Dai"
        BoxContent="Dharma is adding support for Dai and migrating all Sai deposits to Dai."
        GradientBg=" &lt; 1 min read"></BlogBox>
    </div>
  );
};

export default BlogBoxes;
