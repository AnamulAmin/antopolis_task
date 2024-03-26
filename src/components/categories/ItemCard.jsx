import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
function ItemCard({ cardData }) {
  return (
    <div className="itemCard">
      <div className="ratting">
        {cardData?.ratting == 5 ? (
          <FaStar style={{ fontSize: ".6rem" }} />
        ) : (
          <FaStarHalf style={{ fontSize: ".6rem" }} />
        )}
        {cardData?.ratting}
      </div>
      <figure>
        <img src={cardData?.image} alt="Shoes" />
      </figure>
      <h2 className="card-title">{cardData?.name}</h2>
      <p>{cardData?.type}</p>
      <button className="card_btn">Add To Cart</button>
    </div>
  );
}

export default ItemCard;
