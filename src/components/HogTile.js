import React, { useState } from "react";

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="four wide column">
      <div className="ui card">
        <div className="image" onClick={toggleDetails}>
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          {showDetails && (
            <div className="meta">
              <span className="specialty">{hog.specialty}</span>
              <span className="weight">{hog.weight} kg</span>
              <span className="medal">{hog["highest medal achieved"]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HogTile;