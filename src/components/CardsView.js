import React from "react";
import ShopCard from "./ShopCard";

function CardsView(props) {
    return (
      <div className="cards-view">
        {props.cards.map((card, index) => (
          <ShopCard key={index} {...card} />
        ))}
      </div>
    );
  }

export default CardsView;