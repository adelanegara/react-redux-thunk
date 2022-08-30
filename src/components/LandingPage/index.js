import React from "react";

const LandingPage = () => {
  const result = Math.random().toString(36).substring(2, 7);
  console.log(result);

  return <div>landing page</div>;
};

export default LandingPage;
