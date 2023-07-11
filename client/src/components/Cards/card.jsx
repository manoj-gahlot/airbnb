import React from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { CardActionArea } from '@mui/material';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

function Card({ card }) {
    return (
        <div className="card-box">
            <a href={"/rooms/" + card.id} target="_blank">
                <CardActionArea>
                    <img src={card.images[0]} className="card-img" />
                    {/* <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            
          </SwiperSlide>
        ))}
      </Swiper> */}
                    <div className="card-content">
                        <div className="card-info-flex">
                            <h3 className="card-title">{card.city}</h3>
                            <div className="card-rating">
                                <StarRateRoundedIcon />
                                <p>{card.rating}</p>
                            </div>
                        </div>
                        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.address}</p>
                        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.type}</p>
                        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
                            <span style={{ fontWeight: "600" }}>₹{card.price.total}</span> night
                        </p>
                    </div>

                </CardActionArea>
            </a>
        </div>
    );
}
export default Card;