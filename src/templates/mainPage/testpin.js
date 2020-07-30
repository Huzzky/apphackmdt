import React from 'react'

class Testpin extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props.name);
        this.state = {
           nameTest : this.props.name
        }
    }

    render() {
        const { nameTest } = this.state;
        return(
            <div>
                <h1>{nameTest}</h1>
            </div>
        );
    }
}

export default Testpin;