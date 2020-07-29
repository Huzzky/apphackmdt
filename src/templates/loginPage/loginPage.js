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
        const regexp = /w/g;
        const strLogin = this.state.valueLogin;
        const strPassword = this.state.valuePassword;
        if (strLogin!=="" || strLogin!==undefined) {
            if (strPassword!=="" || strPassword!== undefined) {
                const checkLogin = regexp.test(strLogin);
                const checkPassword = regexp.test(strPassword);
            }
        }
        else if (strPassword!=="" || strPassword!== undefined){
            if (strLogin!=="" || strLogin!==undefined) {
                
            }
        }
        // const checkLogin = regexp.test(strLogin);
        // const checkPassword = regexp.test(strPassword);
    }


    // * Берет значение с input логина
    ChangeInputValueLogin(e) {
        this.setState({
            valueLogin: e.target.value,
        })
    }

    // * Берет значение с input пароля
    ChangeInputValuePassword(e) {
        this.setState({
            valuePassword: e.target.value,
        })
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