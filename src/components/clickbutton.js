import React from 'react';

class Clickbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'A'}
    }

    handleClick(name) {
        this.setState({name: name})
    }

    render() {
        return (
            <div className="clickbuttonDiv">
                <h5>{this.state.name}さんのボタンが押されました。</h5>
                <button onClick={() => {this.setState({name: 'A'})}}>A</button>
                <button onClick={() => {this.setState({name: 'B'})}}>B</button>
                <button onClick={() => {this.setState({name: 'C'})}}>C</button>
            </div>
        );
    }
}

export default Clickbutton;