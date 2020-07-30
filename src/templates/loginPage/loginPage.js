import React from 'react';
import ProfilePage from '../profilePage/profilePage';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            login: '',
            password: '',
            agreeAllText: false,
            AuthOrNotAuth : false,
        }

        this.CheckLoginAndPasswordAuthInput = this.CheckLoginAndPasswordAuthInput.bind(this);
        this.ChangeInputValue = this.ChangeInputValue.bind(this);
        this.InputUserInProfile = this.InputUserInProfile.bind(this);
    }

    componentDidMount() {
        this.setState({
            loginUserInServer: "Admin",
            passwordUserInServer: "12345",
        })
    }

    // * Checks login and password input
    CheckLoginAndPasswordAuthInput() {
        const {login, password} = this.state;
        const regexpLogin = /[ .,!@#$%^&*();/|<>"'+]/gi;
        const regexpPassword = /[\D]/gi;
        const strLogin = login;
        const strPassword = password;
        const checkLogin = regexpLogin.test(strLogin);
        const checkPassword = regexpPassword.test(strPassword);


        // TODO Доделать валидацию логина и пароля
        if (strLogin==="") {
            console.log("Ну дебил")
        } else if (strPassword==="") {
            console.log("Ну дебил в пароле")
        } else if (checkLogin) {
            // ? If there is no space and special characters in the checkLogin and checkPassword (in the login), then call another function
            console.log('что-то в логине из :' + regexpLogin);
        } else if (checkPassword) {
            console.log('что-то в пароле из : ' +regexpPassword)
        } else {
            this.InputUserInProfile();
        }
    }

    // * Проверка логина и пароля
    InputUserInProfile = () => {
        const { login, password, loginUserInServer, passwordUserInServer } = this.state;
        if (login===loginUserInServer&&password===passwordUserInServer) {
            this.setState({
                AuthOrNotAuth: true,
            })
        }
        else {
            // TODO Вывести, что было неправильно введены данные
        }
    }

    // * Takes value from login and password input
    ChangeInputValue = (e) => {
        const {id} = e.currentTarget;
        this.setState({
            [id] : e.currentTarget.value,
        })
        const {login, password,} = this.state;
        if (login!=='' && password!=='') {
            this.setState({
                agreeAllText: true,
            })
        }
        else {
            this.setState({
                agreeAllText: false,
            })
        }
    }




    render() {
        const {agreeAllText, AuthOrNotAuth} = this.state;

        if (!AuthOrNotAuth){
            return(
                <div>
                    <h1>Окно авторизации</h1>
                    <form>

                        <input
                        id="login"
                        placeholder="Введите логин"
                        onChange={this.ChangeInputValue}
                        type="text"/>

                        <input
                        id="password"
                        placeholder="Введите пароль"
                        onChange={this.ChangeInputValue}
                        type="text"/>

                        <button
                        onClick={this.CheckLoginAndPasswordAuthInput}
                        disabled={!agreeAllText}>Войти</button>
                    </form>
                </div>
            )
        } else if (AuthOrNotAuth) {
            //TODO создать profilePage и передать ее сюда
            return(
                <div>
                    <ProfilePage/>
                </div>
            )
        }

}
}


export default LoginPage;