// import React from 'react';
// import BasicRating from './rating';
// import './style.css';
// export default function RoomDetail({ itemData }) {
//     return (
//         <div className='detail-container'>
//             <p>{itemData.type}</p>
//             <div className='room-location'>
//                 <span style={{ fontSize: "1rem" }} >{itemData.name}</span>
//                 <span style={{ fontSize: "1rem" }}>{itemData.address}</span>
//                 <BasicRating style={{ display: "inline-block" }} itemRating={itemData.rating}></BasicRating>;
//             </div>

//         </div>
//     );
// }

import React from 'react';
import "./style.css"
import Rating from "./rating";
export default function BasicCard({ itemData }) {
    return (
        <div className="roomdetail-container">
            <h2>{itemData.type}</h2>
            <div className='rating-div'><Rating itemRating={itemData.rating} /><span>( {itemData.reviewsCount} )</span></div>
            <p><span className='name-span'>{itemData.name} | </span><span className='address-span'>{itemData.address}</span></p>
            <p className='roomprice'>
                <span>₹{itemData.price.total} </span>
                <span>night</span>
            </p>
        </div>
        // <Card className='card' sx={{ minWidth: 275 }}>
        //     <CardContent>
        //         <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
        //             {itemData.type}
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             {itemData.name}
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             {itemData.address}
        //         </Typography>
        //     </CardContent>
        // </Card>
    );
}

