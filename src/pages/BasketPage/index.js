import React, { useState } from 'react';

export default function BasketPage(props) {

  const [ basketData, setBasketData ] = useState(JSON.parse(localStorage.getItem('basketData')) || []);

  console.log(basketData)
  return (
      <div className="basket-container">
        {basketData.map((item) => {
          return (
              <div>
                {item.title}
              </div>
          )
        })}
      </div>
  );
}
