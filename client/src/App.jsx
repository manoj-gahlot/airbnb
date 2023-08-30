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
    await fetch("/airbnb/data")
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
  }, [cardsUpdated]);

  console.log("inside index.js");
  console.log(data);

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


// import React, { useEffect, useState } from "react";
// import Cards from "./components/Cards";
// import "./App.css";
// import Header from "./components/header/header";
// import Filter from "./components/Filter";

// function App() {
//   const [selectedFilter, setSelectedFilter] = useState(0);
//   const [cardsUpdated, setCardsUpdated] = useState(0);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/airbnb/data");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const jsonData = await response.json();
//       setData(jsonData);
//       setCardsUpdated(cardsUpdated + 1);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [cardsUpdated]);

//   return (
//     <div className="App">
//       <Header searchButtonClicked={() => setCardsUpdated(cardsUpdated + 1)} />
//       <Filter
//         selectedFilter={selectedFilter}
//         setSelectedFilter={setSelectedFilter}
//       />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <Cards key={cardsUpdated} list={data} />
//       )}
//     </div>
//   );
// }

// export default App;

