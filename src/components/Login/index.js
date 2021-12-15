import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Button from '../Button';
import "../Login/Login.css";

  function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailDirty, setEmailDirty ] = useState(false)
    const [ passwordDirty, setPasswordDirty ] = useState(false)
    const [ emailError, setEmailError ] = useState('e-mail не может быть пустым')
    const [ passwordError, setPasswordError ] = useState('Пароль не может быть пустым')
    const [ formValid, setFormValid ] = useState(false)

    useEffect(() => {
      if (emailError || passwordError){
        setFormValid (false)
      } else {
        setFormValid (true)
      }
    },[emailError, passwordError])

    const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('некорректный е-mail')
      } else {
        setEmailError('')
      }
    }

    const passwordHandler = (e) => {
      setPassword(e.target.value)
      if (e.target.value.length < 3) {
        setPasswordError('пароль должен быть длиннее 3 символов')
        if(!e.target.value){
          setPasswordError('пароль не может быть пустым')
        }
      } else {
        setPasswordError('')
      }
    }

    const blurHandler = (e) => {
      switch (e.target.name){
        case 'email':
          setEmailDirty(true)
          break
        case 'password':
          setPasswordDirty(true)
          break
        default: break;
      }
    }

  return (
    <div className={"login-container"}>
      <div className={"login-container__wrapper"}>
        <form action="" className="login-container__form">
            <div className={"login-container__title"}>Вход</div>
              <div className={"wrapper__email"}>
                <input onChange={emailHandler} value={email} onBlur={e => blurHandler(e)} name='email' className={"login-container__input"} placeholder={'E-mail'} type="email" id='email'/>
                {(emailDirty && emailError) && <div className={"container__email-error"}>{emailError}</div>}
              </div>
            <div className={"wrapper__pass"}>
                <input onChange={passwordHandler} value={password} onBlur={e => blurHandler(e)}  name='password' className="login-container__input" placeholder={'Пароль'} type="password"/>
                {(passwordDirty && passwordError) && <div className={"container__password-error"}>{passwordError}</div>}
            </div>
              <div className={"agreement"}>
                <input className="login-container__checkbox" type="checkbox" id="agreement"/>
                <label for="agreement">Я согласен получать обновления на почту</label>
            </div>
              <Link to={"/cards"}>
              <Button click={!formValid} title={"Войти"} />
            </Link>
        </form>
      </div>
    </div>
  )
}
  export default Login;