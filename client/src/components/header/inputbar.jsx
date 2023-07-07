import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
function InputBar() {
    const [count, setCount] = useState(0);
    const [mouserOver, setMouseOver] = useState(true);
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
    return (<div>
        <div className="search-bar">
            <div className="search-bar-text">Anywhere</div>
            <div className="search-bar-text">Any Week</div>
            <div className="search-bar-text2">Add guests</div>
            <div className="search-icon-div">
                <SearchRoundedIcon className="search-icon" />
            </div>
        </div>
    </div>);
}
export default InputBar;