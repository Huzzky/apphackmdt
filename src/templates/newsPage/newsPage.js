import React from 'react';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testState: '',
        }
        this.TestCheck = this.TestCheck.bind(this);
    }

    componentDidMount() {
        // todo 1. сделать json-файл и использовать как API, либо сделать на Django
        // todo 2. сделать вывод 5!!! новостей на страницу
    }

    TestCheck = (props) => {
        console.log(this.props.testState);
    }

    render() {

        return(
            <div>
                <h1>Новости:</h1>
                <button onClick={this.TestCheck}>Test</button>
            </div>
        )
    }

}

export default NewsPage;