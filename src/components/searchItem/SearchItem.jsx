import React from "react";
import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgODEvJ3McRCsAhg8MggE6SAbMFAiEg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">title</h1>
        <span className="siDistance">m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">desc</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$333</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
