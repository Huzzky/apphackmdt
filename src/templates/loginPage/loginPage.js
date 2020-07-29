import React from 'react';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            login: '',
            password: '',
            agreeAllText: false,
        }

        this.CheckLoginAndPasswordAuthInput = this.CheckLoginAndPasswordAuthInput.bind(this);
        this.ChangeInputValue = this.ChangeInputValue.bind(this);
    }

    componentDidMount() {
        const loginUser = 'Admin';
        const passwordUser = '12345';
    }

    // * Проверяет input логина и пароля
    CheckLoginAndPasswordAuthInput() {
        const {login, password} = this.state;
        const regexp = /[a-z]/gi;
        const strLogin = login;
        const strPassword = password;        
        const checkLogin = regexp.test(strLogin);
        const checkPassword = regexp.test(strPassword);

        if (checkLogin||checkPassword) { // todo переделать
            console.log("ай")
        }
    }

    // * Берет значение с input логина и пароля
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
    }


    render() {
        const {agreeAllText} = this.state;
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
    }
}


export default LoginPage