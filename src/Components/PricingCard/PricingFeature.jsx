import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  return (
    <div>
      <p className="flex mr-3 mt-4">
        <CircleCheckBig></CircleCheckBig>
        {feature}
      </p>
    </div>
  );
};

export default PricingFeature;
