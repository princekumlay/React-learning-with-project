import React from "react";

function Fruit({name, price, count}) {
  return (
   
      <li>
        The price of <b>{name}</b> is <b>${price +  count}</b>.
      </li>
   
  );
}

export default Fruit;
