import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  console.log(pricing);

  return (
    <div className="border bg-amber-600 rounded-2xl p-5 flex flex-col">
      {/* card header */}
      <div>
        <h1 className="text-5xl">{pricing.name}</h1>
        <h4 className="text-3xl">{pricing.price}</h4>
      </div>
      {/* card Body */}
      <div className="bg-amber-300 rounded-2xl mt-10 p-5 flex-1">
        <p>{pricing.info}</p>
        {pricing.features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
