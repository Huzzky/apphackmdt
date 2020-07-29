import React from 'react';
import NewsPage from '../newsPage/newsPage';
import LoginPage from '../loginPage/loginPage';


class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickLogin: false,
            nameProfile: "Admin",

        }
        this.ClickLoginIn = this.ClickLoginIn.bind(this);
        this.ClickLoginOut = this.ClickLoginOut.bind(this);

        
    }

    ClickLoginIn() {
        this.setState({
            clickLogin: true,
        })
    }
    ClickLoginOut() {
        this.setState({
            clickLogin: false,
        })
    }
    
    componentDidMount() {
        ///// todo 1. Сделать проверку на клик "Войти"
        ///// todo 2. После нажатия на кнопку "Войти" должно показать ник и/или имя профиля, пока нет loginPage
        // todo 3. Сделать newsPage с 5 новостями, пока что
        // todo 4. Сделать loginPage
        // todo 5. Сделать profilePage 
        //// const login = 'admin';
        //// const password = 'qwerty123456';
    }
    render() {
        if (!this.state.clickLogin) {
            return(
                <div>
                    <a href="#s" onClick={this.ClickLoginIn}>Войти</a>
                    <NewsPage/>
                </div>
            )
        }
        else if (this.state.clickLogin) {
            return(
                <div>
                    {/* <p>{this.state.nameProfile}</p>
                    <a href="#s" onClick={this.ClickLoginOut}>Выйти</a> */}
                    <LoginPage/>
                    <NewsPage/>
                </div>
        )}
    }
}


export default MainPage;