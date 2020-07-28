import React from 'react';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // todo 1. сделать json-файл и использовать как API, либо сделать на Django
        // todo 2. сделать вывод 5!!! новостей на страницу
    }


    render() {

        return(
            <div>
                <h1>Новости:</h1>
                
            </div>
        )
    }

}

export default NewsPage;