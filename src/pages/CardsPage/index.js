import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "../../components/Card";
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
            <header>
                <div className={"wrapper__header"}>
                    <div className="wrapper__header-title">
                        <div className={"title__header"}>Наша продукция</div>
                    </div>
                    <Link style={{ textDecoration: 'none' }} to={'/basket'}>
                    <div className={"wrapper__bas"}>

                            <div className="basket__counter">
                                {count} шт <br/>на сумму {price} ₽
                            </div>
                    </div>
                        </Link>
                </div>
            </header>

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
