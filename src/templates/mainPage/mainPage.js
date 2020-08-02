import React from 'react';
import NewsPage from '../newsPage/newsPage';
import LoginPage from '../loginPage/loginPage';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickLogin: false,
            nameProfile: "Admin",
            testCheck: "true",
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

        // todo 3. Сделать newsPage с 5 новостями, пока что
        // todo 5. Сделать profilePage
    }
    render() {
        const { clickLogin} = this.state;
        if (!clickLogin) {
            return(
                <div>
                    <a href="#s" onClick={this.ClickLoginIn}>Войти</a>
                    <NewsPage/>
                </div>
            )
        }
        else if (clickLogin) {
            return(
                <div>
                    <LoginPage/>
                </div>
        )}
    }
}


export default MainPage;