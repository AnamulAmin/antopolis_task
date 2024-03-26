// Import Swiper React components
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import ItemCard from "./ItemCard";

const data = [
  {
    name: "Pepperoni Pizza",
    image: "/pizza1.png",
    type: "Di napoles",
    price: "$11,99",
    ratting: 5,
  },
  {
    name: "Pepperoni Pizza",
    image: "/pizza2.png",
    type: "Di napoles",
    price: "$13,99",
    ratting: 4.5,
  },
  {
    name: "Vegetarian Pizza",
    image: "/pizza3.png",
    type: "Cosa di Mario",
    price: "$12,99",
    ratting: 4.3,
  },
  {
    name: "Mediterranean Pizza",
    image: "/pizza4.png",
    type: "Milano",
    price: "$15,99",
    ratting: 4,
  },
  {
    name: "Mediterranean Pizza",
    image: "/pizza4.png",
    type: "Milano",
    price: "$15,99",
    ratting: 5,
  },
  {
    name: "Mediterranean Pizza",
    image: "/pizza4.png",
    type: "Milano",
    price: "$15,99",
    ratting: 5,
  },
];

function CategoryMenuItems() {
  const swiper = useSwiper();
  return (
    <div className="container category_menu_items">
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className=" bg-blue-400 rounded-full cursor-pointer select-none px-16"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ItemCard cardData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryMenuItems;
