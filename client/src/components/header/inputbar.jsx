import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import "./style.css";
function InputBar({ searchButtonClicked }) {
    const [count, setCount] = useState(0);
    const [mouserOver, setMouseOver] = useState(true);
    const [showMenuBar, setShowMenuBar] = useState(false);
    const date = new Date().getDate();



    const [selectedBeginDate, setSelectedBeginDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [dateBegin, setDateBegin] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const handleDateChange = (event) => {
        const date = new Date(event.target.value);
        console.log(event.target.value);

        const formattedDate = date.toLocaleDateString('en-GB'); // 'en-GB' represents the locale for dd/mm/yyyy format

        console.log(formattedDate);
        if (event.target.name === "checkin") {
            setDateBegin(event.target.value);
            setSelectedBeginDate(formattedDate);
        }
        else {
            setDateEnd(event.target.value);
            setSelectedEndDate(formattedDate);
        }
        // console.log(selectedBeginDate);
        // console.log(selectedEndDate);
    }
    function isMouseOver(event) {
        setMouseOver(true);
    }
    function isMouseDown(event) {
        setMouseOver(false);
    }
    function ShowAddGuests() { //have to do
        return <div>
            <button onClick={() => setCount(count - 1)}><RemoveCircleRoundedIcon /></button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}><AddCircleRoundedIcon /></button>


        </div>
    }
    var today = new Date().toISOString().split('T')[0];
    return (<div className="full-search-bar" >
        <div className="search-bar" onClick={() => setShowMenuBar(!showMenuBar)}>
            <div className="search-bar-text">Anywhere</div>
            <div className="search-bar-text">Any Week</div>
            <div className="search-bar-text2">Add guests</div>
            <div className="search-icon-div">
                <SearchRoundedIcon className="search-icon" />
            </div>
        </div>
        <div className="search-input-dropdown">
            {showMenuBar &&
                <form action="/airbnb" method="post">
                    <input className="city-input-name" type="text" name="cityName" id="cityName" placeholder="City" />
                    {/* <input className="city-input-name" type="text" data-role="input" data-search-button="true" name="cityName" id="cityName" placeholder="City" /> */}
                    <div className="date-input"><label htmlFor="checkin">Check-In</label>
                        <input type="date" name="checkin" onChange={handleDateChange} id="checkin" value={dateBegin} min={today} max={dateEnd} /></div>
                    <div className="date-input"><label htmlFor="checkout">Check-Out</label>
                        <input type="date" name="checkout" onChange={handleDateChange} id="checkout" value={dateEnd} min={dateBegin} max="2023-12-31" /></div>
                    <button type="submit" name="search" onClick={() => searchButtonClicked(1)}>Search</button>
                </form>}
        </div>
    </div>);
}
export default InputBar;