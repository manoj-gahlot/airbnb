import * as React from 'react';
import "./styles.css";
export default function QuiltedImageList({ itemimages }) {
    // console.log(itemimages);
    return (
        <div className="image-container">
            {itemimages.map((item, index) => (
                <div className="image">
                    <img src={item} alt='item' />
                </div>
            ))
            }
        </div>

    );
}
// {...srcset(item, 121)}
                    // alt="house alt"
                    // loading="lazy"























// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/free-mode';

// import './styles.css';

// // import required modules
// import { EffectFade, FreeMode, Navigation, Pagination } from 'swiper/modules';

// export default function Imageview({ itemData }) {
//     return (
//         <>
//             {/* <div class="image-container">
//                 {
//                     itemData.map((item) => {
//                         return <div className="image"><img src={item} alt={item} /></div>
//                     })
//                 }
//             </div> */}
//             <Swiper
//                 style={{
//                     '--swiper-navigation-color': '#eb4c60',
//                     '--swiper-pagination-color': '#eb4c60',
//                 }}
//                 slidesPerView={'auto'}
//                 spaceBetween={30}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 loop={true}
//                 effect={'fade'}
//                 navigation={true}
//                 modules={[EffectFade, Navigation, Pagination]}
//                 className="mySwiper"
//             >
//                 {
//                     itemData.map((item) => {
//                         return <SwiperSlide><img src={item} alt={item} /></SwiperSlide>
//                     })
//                 }
//             </Swiper>
//         </>
//     );
// }