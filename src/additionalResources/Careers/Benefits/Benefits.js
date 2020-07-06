import React from "react";

import "./Benefits.css";
import Benefit from "./Benefit/Benefit";

const Benefits = () => {
  return (
    <div className="Benefits">
      <h2>Why you should join us</h2>
      <div className="BenefitsContainer">
        <Benefit benefitTitle="Learn the Crypto Ropes">
          Calling all defectors & dreamers — if you're a builder working in the incumbent technology industry, we want you! We're hiring for raw talent irrespective of crypto experience. Don't know much about Ethereum? Don't sweat it — you'll get trained up by the best of the best in the cryptocurrency space.
        </Benefit>
        <Benefit benefitTitle="Competitive Salary, Equity, and Benefits">
          Top talent deserves top-tier compensation — that's how great companies are built. We're not a bedroom startup anymore — our team members get competitive salaries and generous equity packages that make sure everyone is aligned with enough skin-in-the-game.
      </Benefit>
        <Benefit benefitTitle="Catered Meals & Endless Snacks">
          We want hunger in spirit but not in body — our team enjoys catered lunches 3 times a week that are healthy, delicious, and practical. And for a quick afternoon snack, our kitchen is always stocked. Did we mention we love coffee? There's a lot of that too.
      </Benefit>
        <Benefit benefitTitle="Everything You Need To Succeed">
          On your first day with us, you'll get a Dharma-issued Macbook Pro and a Ledger Nano S cryptocurrency wallet. Your road into the world of magical internet money will be paved with the latest & greatest hardware to help you succeed.
      </Benefit>
      </div>
    </div>
  );
};

export default Benefits;