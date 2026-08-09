import React from 'react'
import Fruit from './Fruit.jsx'

function Fruits({click}) {

    let fruits = [
        {name: "apple", price: 29},
        {name: "banana", price: 38},
        {name: "orange", price: 32},
        {name: "mango", price: 89},
        {name: "pineapple", price: 43},
        {name: "guaua", price: 64},
        {name: "lichi", price: 83},
        {name: "goosebarry", price: 23},
        {name: "grapes", price: 98},
        {name: "dragon fruit", price: 84},
    ]

  return (
    <div>
      
        {fruits.map(fruit => (
            <Fruit name = {fruit.name} price = {fruit.price} count = {click}/>
        ))}
     
    </div>
  );
}


export default Fruits