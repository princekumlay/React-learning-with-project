import React from "react";

function Fruit({name, price, count}) {
  return (
   <div id="fruit_container">
      <li>
        The price of '<b>{name}</b>' is <b>${price +  count}</b>.
      </li>
   </div>
  );
}

export default Fruit;
