import React from "react";
import Empty from "../images/empty.svg";
const EmptyPage = () => {
  return (
    <div className="flex flex-column align-center">
      <h1>No Search Results Found</h1>
      <img className="height-r-80" src={Empty} alt="no search results" />
    </div>
  );
};

export { EmptyPage };
