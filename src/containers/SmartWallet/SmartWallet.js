import React from "react";

import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Features from "../../components/Features/Features";
import Keys from "../../components/Keys/Keys";
import Refresh from "../../components/Refresh/Refresh";
import FirstOfKind from "../../components/FirstOfKind/FirstOfKind";
import Fees from "../../components/Fees/Fees";
import Questions from "../../components/Questions/Questions";
import Get from "../../components/Get/Get";
import Footer from "../../components/Footer/Footer";
import LiveSupport from "../../components/UI/LiveSupport/LiveSupport";
import "./SmartWallet.css"

const SmartWallet = () => {
  return (
    <div className="SmartWallet">
      <Navbar />
      <Hero />
      <Features />
      <Keys />
      <Refresh />
      <FirstOfKind />
      <Fees />
      <Questions />
      <Get />
      <Footer />
      <LiveSupport />
    </div>
  );
};

export default SmartWallet;