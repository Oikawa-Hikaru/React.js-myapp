import React from 'react';

class Samplebox extends React.Component {
    render () {
        return (
            <div className="eachboxDiv">
                <div className="boxcontentDiv">
                    <p>{this.props.name}</p>
                    <img src={this.props.image} alt="#" />
                </div>
            </div>
        )
    }
}

export default Samplebox;
