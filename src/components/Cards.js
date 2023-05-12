import React from "react";
import Card from "./Card";
import artificialLogo from "../assets/artificial-intelligence-svgrepo-com 1brain.svg";
import customer from "../assets/direct-customer-svgrepo-com 1.png";
import groupBrand from "../assets/Groupbrand.png";
import other from "../assets/other.svg";

const Cards = () => {
  return (
    <div className="w-full min-h-screen p-6">
      <div className="flex flex-wrap justify-center">
        <Card
          image={artificialLogo}
          title="MakeAI-assisted Content Choices"
          description="Access and Order from an extensive catalogue in any language and on
            your budget's terms. If unsure, our AI guides you to the best."
        />

        <Card
          image={groupBrand}
          title="Upload and Maintain your Brand Identity"
          description="Add your preferences and brand assets to ensure the contents is
            consistent with your brand identity. No brand asset? We can make for
            you!"
        />

        <Card
          image={other}
          title="Be informed as we create"
          description="Your details are translated and sent to the AI, FP, or both (per
            your choice) as you relax and receive continuous updates."
        />

        <Card
          image={artificialLogo}
          title="Receive and Review"
          description="The finished content is delivered and you can make corrections that
            we will effect to satisfy your requirements."
        />

        <Card
          image={customer}
          title="Publish and Monitor your content's progress"
          description="The finished content is delivered and you can make corrections that
            we will effect to satisfy your requirements."
        />
      </div>
    </div>
  );
};

export default Cards;
