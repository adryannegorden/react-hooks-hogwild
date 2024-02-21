import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import FilterBar from "./FilterBar";
import hogs from "../porkers_data";

function App() {
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const toggleGreasedOnly = () => {
    setGreasedOnly(!greasedOnly);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const filteredHogs = hogs.filter((hog) => !greasedOnly || hog.greased);

  if (sortBy === "name") {
    filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    filteredHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />
      <FilterBar
        greasedOnly={greasedOnly}
        toggleGreasedOnly={toggleGreasedOnly}
        sortBy={sortBy}
        handleSortChange={handleSortChange}
      />
      <div className="ui grid container">
        {filteredHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
