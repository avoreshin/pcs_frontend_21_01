import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import "../Login/Login.css";

export default function Login(props) {
  const email = "alina@mail.ru"

  function HanderClick(e){

  }
  return (
    <div className="login-container">
      <form action="" className="login-container__form" onClick={HanderClick}>

        <div className="login-container__title">Вход</div>
        <input className="login-container__input" placeholder={'E-mail'} type="email"/>
        <input className="login-container__input" placeholder={'Пароль'} type="password"/>

        <div className={"agreement"}>
          <input className="login-container__checkbox" type="checkbox" id="agreement"/>
          <label for="agreement">Я согласен получать обновления на почту</label>
        </div>

        <Link to={"/cards"}>
          <Button title={"Войти"} />
        </Link>
      </form>
    </div>
  );
}