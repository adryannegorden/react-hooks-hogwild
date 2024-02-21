import React from "react";

const FilterBar = ({ greasedOnly, toggleGreasedOnly, sortBy, handleSortChange }) => {
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                checked={greasedOnly}
                onChange={toggleGreasedOnly}
              />
              <label>Show only greased hogs</label>
            </div>
          </div>
          <div className="field">
            <select
              className="ui dropdown"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">Sort</option>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;