import React from "react";

function ShopCard(props) {
  const { name, price, color, img } = props;

  return (
    <div className="shop-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Color: {color}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ShopCard;