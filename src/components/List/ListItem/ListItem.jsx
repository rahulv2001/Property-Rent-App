import React from "react";
import "./styles.css";

const ListItem = ({item:{coverSrc, title, price, deliveryFee, serviceTime, rating}}) => {
  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt="item" />
      <header>
        <h4>{title}</h4>
        <span>🌟{rating}</span>
      </header>
      <footer>
        <p>
          <b>{serviceTime} Bed</b> <span><b>Details</b> : {deliveryFee}</span>
        </p>
        <p>
          <b>${price}</b>/Month
        </p>
      </footer>
    </div>
  );
};

export default ListItem;
