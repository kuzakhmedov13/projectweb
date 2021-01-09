import React from "react";
import { Link } from "react-router-dom";

//that was a variation of constructing a card without using a framework but had some problems with that which couldn't fix so decided to use a @MU

function CardItem(props) {
  return (
    <>
      <li>
        <Link to={props.path}>
          <figure data-category={props.label}>
            <img alt="Card Image" src={props.src} />
          </figure>
          <div>
            <h5>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
