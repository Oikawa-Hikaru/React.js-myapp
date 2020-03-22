import React from 'react';

class Modalopen extends React.Component {
    // モーダル開閉定義
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
    }

    handleClickOpen() {
        this.setState({isModalOpen: true});
    }

    handleClickClose() {
        this.setState({isModalOpen: false});
    }
    // モーダル開閉定義ここまで

    render () {
        // stateがtrueのときモーダルを出現させる
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className="bgDiv">
                    <div className="modalDiv">
                        <div className="internalDiv">
                            <div className="nameboxDiv">
                                <h1>{this.props.name}</h1>
                                <img src={this.props.image} alt="#" />
                            </div>
                            <div className="textboxDiv">
                                <p>{this.props.introduction}</p>
                                <p>{this.props.comment}</p>
                            </div>
                            <button className="modalclose" onClick={() => {this.handleClickClose()}}>閉じる</button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            // 基本コンポーネントの部分
            <div className="eachboxDiv">
                <div className="boxcontentDiv" onClick={() => {this.handleClickOpen()}}>
                    <p>{this.props.name}</p>
                    <img src={this.props.image} alt="#" />
                </div>
                {modal}
            </div>
        )
    }
}

export default Modalopen;