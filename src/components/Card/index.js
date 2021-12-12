import React from 'react';

import "../Card/Card.css";

export default function Card(props) {

    const {
        item,
        addFood
    } = props;
    const { id, title, main_image, description, price, weight } = item;

    return (
        <div className="card-container">
            <div className={"card__img"}>
                <img src={main_image.src} alt={main_image.alt} />
            </div>
            <div className={"card__title"}>{title}</div>
            <div className={"card__description"}>{description}</div>
            <div className={"card__description_detail"}>
                <div className={"card__price"}>{price}</div> &nbsp;/&nbsp;
                <div className={"card__weight"}>{weight}</div>
                <div
                    onClick={() => addFood(item)}
                >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="14.5" stroke="white"/>
                        <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}
