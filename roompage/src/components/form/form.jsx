import React, { useState } from 'react';
import "./styles.css";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
function Form() {
    const [selectedBeginDate, setSelectedBeginDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [dateBegin, setDateBegin] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [guest, setSelectedGuest] = useState(1);
    var today = new Date().toISOString().split('T')[0];
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
        console.log(formattedDate);
    }
    const handleGuestChange = (event) => {
        const guestno = event.target.value;
        setSelectedGuest(guestno);
        console.log(guest);
    }
    return (
        <form className='form-container' action="/bookingdata" method="post">
            <div className="guest-input"><label htmlFor="guest">Guest</label>
                <input className='input-item' type="number" name="guest" onChange={handleGuestChange} id="guest" value={guest} min={1} max={10} /></div>
            {/* <input className='input-item item-first' type="number" name="guest" id="guestno" min={1} max={10} /> */}
            <div className="date-input"><label htmlFor="checkin">Check-In</label>
                <input className='input-item' type="date" name="checkin" onChange={handleDateChange} id="checkin" value={dateBegin} min={today} max={dateEnd} /></div>
            <div className="date-input"><label htmlFor="checkout">Check-Out</label>
                <input className='input-item' type="date" name="checkout" onChange={handleDateChange} id="checkout" value={dateEnd} min={dateBegin} max="2023-12-31" /></div>
            <button className='input-item item-last' type='submit'><CheckRoundedIcon /></button>
        </form>
    );
};
export default Form;