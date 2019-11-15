import React, { Component } from 'react'
import ownerLvlImg from '../../assets/symbol_owner.svg';
import builderLvlImg from '../../assets/symbol_builder.svg';
import successorLvlImg from '../../assets/symbol_successor.svg';
import './InvestmentLevel.css';

export default class InvestmentLevel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnColor: "#F8F8F8",
            title: this.props.title,
            imgSrc: ownerLvlImg,
            amount: "$10,000",
            horizon: 3,
            btnTextColor: "#F8F8F8"
        };

        if (this.state.title === "Owner") {
            this.state.btnColor = "#02BDD7";
        } else if (this.state.title === "Builder") {
            this.state.imgSrc = builderLvlImg;
            this.state.amount = "$25,000";
            this.state.horizon = 5;
            this.state.btnTextColor = "#949494";
        } else if (this.state.title === "Successor") {
            this.state.imgSrc = successorLvlImg;
            this.state.amount = "$50,000";
            this.state.horizon = 10;
            this.state.btnTextColor = "#949494";
        }
    }

    toggleSelection = () => {
        if (this.state.btnColor === "#F8F8F8") {
            this.setState({ btnColor: "#02BDD7", btnTextColor: "#F8F8F8" });
        } else {
            this.setState({ btnColor: "#F8F8F8", btnTextColor: "#949494" });
        }
    }

    render() {

        return (
            <div className="card shadow rounded border-0 w-100">
                <img className="card-img-top px-1 pt-1" src={this.state.imgSrc} alt="[LEVEL IMG]" />
                <div className="card-body px-0 pb-0 text-center">
                    <p className="level-title">{this.state.title}</p>
                    <p className="level-amount pt-2">{this.state.amount}</p>
                    <p className="level-horizon pt-2">{this.state.horizon} yr. investment horizon</p>
                    <button className="level-btn" onClick={this.props.onToggle} value={this.props.title} style={{ backgroundColor: this.state.btnColor, color: this.state.btnTextColor }}>INVEST</button>
                </div>
            </div>
        )
    }
}
