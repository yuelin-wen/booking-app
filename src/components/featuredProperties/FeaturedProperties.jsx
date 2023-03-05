import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgODEvJ3McRCsAhg8MggE6SAbMFAiEg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Title</span>
        <span className="fpCity">Content</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgODEvJ3McRCsAhg8MggE6SAbMFAiEg"
          className="fpImg"
          alt=""
        />
        <span className="fpName">Title</span>
        <span className="fpCity">Content</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgODEvJ3McRCsAhg8MggE6SAbMFAiEg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Title</span>
        <span className="fpCity">Content</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgODEvJ3McRCsAhg8MggE6SAbMFAiEg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Title</span>
        <span className="fpCity">Content</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
