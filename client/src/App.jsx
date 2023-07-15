import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import "./App.css";
import Header from "./components/header/header";
import Filter from "./components/Filter";
// import list from "./assets/homes";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [cardsUpdated, setCardsUpdated] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch("/airbnb/data")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setData(data);
          setCardsUpdated(cardsUpdated + 1); // Trigger rerender
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
<<<<<<< HEAD
  console.log(data);
  console.log("inside index.js")
=======

  console.log("inside index.js");
  console.log(data);
>>>>>>> react

  return (
    <div className="App">
      <Header searchButtonClicked={() => setCardsUpdated(cardsUpdated + 1)} />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Cards key={cardsUpdated} list={data} /> {/* Add key prop for rerender */}
    </div>
  );
}

export default App;
