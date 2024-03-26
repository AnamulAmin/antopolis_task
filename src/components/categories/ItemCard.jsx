import React from "react";

function ItemCard({ cardData }) {
  return (
    <div className="itemCard">
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
