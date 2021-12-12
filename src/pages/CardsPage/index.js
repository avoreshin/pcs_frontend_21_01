import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from "../../components/Card";
import { data } from "../../data/cardsData";

import "../CardsPage/CardsPage.css";

export default function CardsPage(props) {
    const [ cardsData, setCardsData ] = useState([]);
    const [ basketData, setBasketData ] = useState(JSON.parse(localStorage.getItem('basketData')) || []);
    const [count, setCount] = useState(basketData?.length);
    const [price, setPrice] = useState(0);

    function addFood(food) {
        setBasketData([...basketData, food])
    }

    useEffect(() => {
        console.log(basketData)
        let result = basketData.reduce(function(accumulator, currentValue) {
            return accumulator + Number(currentValue.price);
        }, 0);
        setPrice(result);
        setCount(basketData?.length);
        localStorage.setItem('basketData', JSON.stringify(basketData));
    });

    // get data by fetch
    useEffect(() => {
        fetch(`https://alinagaripova.github.io/json-api/food.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                setCardsData(data.data);
            })
            .catch(error => console.error("food.json loader", error));
    }, []);

    return (
        <div className="cards-container">
            <div className="header">
                <h3>Наша продукция</h3>
                <Link to={'/basket'}>
                    <div className="basket">
                        {count} шт на сумму {price}₽
                    </div>
                </Link>
            </div>
            <div className="cards-list">
                {cardsData.map(item => {
                    return (
                        <Card
                            item={item}
                            addFood={addFood}
                        />
                    )
                })}
            </div>
        </div>
    );
}
