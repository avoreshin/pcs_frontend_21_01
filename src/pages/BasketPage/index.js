import React, { useState, useEffect, useLayoutEffect } from 'react';

import Button from "../../components/Button";
import ButtonDeleted from "../../images/Group 182.svg";
import './BasketPage.css'


export default function BasketPage(props) {
    const [ basketData, setBasketData ] = useState(JSON.parse(localStorage.getItem('basketData')) || []);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let result = basketData.reduce(function(accumulator, currentValue) {
            return accumulator + Number(currentValue.price);
        }, 0);
        setPrice(result);
    });

    function btnClick() {
        console.log("Заказ оформлен")
    }

    function removeItem(i) {
        let changedData = basketData;
        changedData.splice(i, 1);

        localStorage.setItem('basketData', JSON.stringify(changedData));
        setBasketData(JSON.parse(localStorage.getItem('basketData')));
    }

    return (
        <div className={"wrapper__basket"}>
            <div className={"title__basket"}>
                <h2>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h2>
            </div>
        <div className={"basket-container"}>
                {basketData.map((item, i) => {
                    return (
                        <div className={"wrapper__item"}>
                            <div className={"basket__img"}><img src={item.main_image.src}/></div>
                            <div className={"title__basket-item"}>{item.title}</div>
                            <div className= {"price__basket"}>{item.price} ₽ </div>
                            <div onClick={() => removeItem(i)}><img className={"basket__button-del"} src={ButtonDeleted} alt={"del"}/></div>
                        </div>
                    )
                })}
                <div className={"basket__line"}></div>
                        <div className={"basket__total"}>
                            <div className={"basket__total-title"}>
                                ЗАКАЗ НА СУММУ: <span className={"basket__total-price"}> {price} ₽</span>
                            </div>
                            <Button title={"Оформить заказ"} handleClick={btnClick}/>
                        </div>
        </div>
        </div>
    );
}
