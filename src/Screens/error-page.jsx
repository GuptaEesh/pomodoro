import React from "react";
import NetworkError from "../images/nwerror.svg";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="img-responsive height-r-80"
        src={NetworkError}
        alt="Network error"
      />
    </div>
  );
};

export { ErrorPage };
