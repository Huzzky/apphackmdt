import React from 'react';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }

        this.CheckLoginAndPasswordAuthInput = this.CheckLoginAndPasswordAuthInput.bind(this);
        this.ChangeInputValueLogin = this.ChangeInputValueLogin.bind(this);
        this.ChangeInputValuePassword = this.ChangeInputValuePassword.bind(this);
    }


    // * Проверяет input логина и пароля
    CheckLoginAndPasswordAuthInput() {

    }


    // * Берет значение с input логина
    ChangeInputValueLogin() {

    }

    // * Берет значение с input пароля
    ChangeInputValuePassword() {

    }


    render() {
        return(
            <div>
                <h1>Окно авторизации</h1>
                <form>
                    <input placeholder="Введите логин" onChange={} type="text"/>
                    <input placeholder="Введите пароль" onChange={} type="text"/>
                    <button onClick={}>Войти</button>
                </form>
            </div>
        )
    }
}

export default LoginPage