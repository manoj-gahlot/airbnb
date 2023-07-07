import React, { useEffect, useState } from "react";
import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards";
import './App.css';
import Header from "./components/header/header"
import Filter from "./components/Filter"
function App() {

  const [data, setData] = useState([]);
  const fetchData = async () => {
    fetch('/airbnb/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [selectedFilter, setSelectedFilter] = useState(0);
  console.log("inside index.js");
  console.log(data);
  return (
    <div className="App">

      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;
