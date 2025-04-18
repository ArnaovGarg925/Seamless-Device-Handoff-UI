import React from "react";

const HandoffBanner = ({ device }) => {
  return (
    <div className="handoff-banner">
      <p>Continue watching on your {device}?</p>
      <button>Resume</button>
    </div>
  );
};

export default HandoffBanner;
