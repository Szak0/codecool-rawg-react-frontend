import React from "react";

const LoadingRing = () => {
  return (
    <div className={"loading-ring"}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingRing;
