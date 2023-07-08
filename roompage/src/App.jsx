// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
// import data from "./assets/home.json"
import Header from "./components/header/header"
import Images from "./components/imageview/imageview"
import RoomDetail from './components/RoomDetail/roomdetail';
function App() {
  const [Roomdata, setData] = useState({});
  const [dataReceived, setDataReceived] = useState(false);
  const fetchData = async () => {
    fetch('/room/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setDataReceived(true);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("inside roompage");
  console.log(Roomdata);
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      {dataReceived ? <div className='room-view'>
        <RoomDetail itemData={Roomdata} />
        <Images itemimages={Roomdata.images} />
      </div> : null}



    </div>
  );
}

export default App;
