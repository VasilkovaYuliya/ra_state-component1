import React from "react";

function ShopItem(props) {
    const { name, price, color, img } = props;
  
    return (
      <div className="shop-item">
        <img src={img} alt={name} />
        <div className="item-details">
          <h3>{name}</h3>
          <p>Color: {color}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    );
  }

  export default ShopItem;