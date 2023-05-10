import React from "react";
import ShopItem from "./ShopItem";

function ListView(props) {
    return (
      <div className="list-view">
        {props.items.map((item, index) => (
          <ShopItem key={index} {...item} />
        ))}
      </div>
    );
  }

export default ListView;  