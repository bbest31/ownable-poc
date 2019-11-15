import React, { Component } from 'react'
import buildingImg from '../assets/graphic_single_building.svg';
import './InvestmentExample.css';
// import InvestmentLevel from './InvestmentLevel/InvestmentLevel';
// import { motion } from 'framer-motion';
import InvestmentSlider from './InvestmentSlider/InvestmentSlider';
export default class InvestmentExample extends Component {


    constructor(props) {
        super(props);
        this.state = {
            level: "Owner",
            return: 1,
        };
        // element refs
        this.ownerElement = React.createRef();
        this.builderElement = React.createRef();
        this.successorElement = React.createRef();

        this.onlevelChange = this.onlevelChange.bind(this);
    }

    onlevelChange(event) {

        // calculate the return, set the state and alter the UI
        let level = event.target.value;
        let rateOfReturn;
        if (level === "Owner") {
            if (this.state.level === "Builder") {
                this.ownerElement.current.toggleSelection();
                this.builderElement.current.toggleSelection();
                rateOfReturn = 1;
            } else if (this.state.level === "Successor") {
                this.ownerElement.current.toggleSelection();
                this.successorElement.current.toggleSelection();
                rateOfReturn = 1;
            } else {
                rateOfReturn = this.state.return;
            }

        } else if (level === "Builder") {
            if (this.state.level === "Owner") {
                this.ownerElement.current.toggleSelection();
                this.builderElement.current.toggleSelection();
                rateOfReturn = 2;
            } else if (this.state.level === "Successor") {
                this.builderElement.current.toggleSelection();
                this.successorElement.current.toggleSelection();
                rateOfReturn = 2;
            } else {
                rateOfReturn = this.state.return;
            }

        } else if (level === "Successor") {
            if (this.state.level === "Owner") {
                this.ownerElement.current.toggleSelection();
                this.successorElement.current.toggleSelection();
                rateOfReturn = 3;
            } else if (this.state.level === "Builder") {
                this.builderElement.current.toggleSelection();
                this.successorElement.current.toggleSelection();
                rateOfReturn = 3;
            } else {
                rateOfReturn = this.state.return;
            }
        }

        // console.log({ level: level, return: rateOfReturn });

        return this.setState({ level: level, return: rateOfReturn });

    }


    render() {


        // let ownerInvestmentLevel = (<InvestmentLevel onToggle={this.onlevelChange} value="owner" title="Owner" ref={this.ownerElement} />);
        // let builderInvestmentLevel = (<InvestmentLevel onToggle={this.onlevelChange} value="builder" title="Builder" ref={this.builderElement} />);
        // let successorInvestmentLevel = (<InvestmentLevel onToggle={this.onlevelChange} value="successor" title="Successor" ref={this.successorElement} />);

        return (
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-lg-12 col-xl-5 text-center">
                        <img className="img-fluid" src={buildingImg} alt="[Building]" />
                    </div>
                    <div className="col-lg-12 col-xl-7">
                        <div className="row pt-5">
                            <div className="col-lg-12 text-center">
                                <p className="example-label">Property Price: <strong>$500,000</strong></p>
                                <p className="example-label">*Appreciation Rate: <strong>5.3%</strong></p>
                                <hr className="mx-5" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <InvestmentSlider />
                            </div>
                            {/* <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    {ownerInvestmentLevel}
                                </motion.div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    {builderInvestmentLevel}
                                </motion.div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    {successorInvestmentLevel}
                                </motion.div>
                            </div> */}
                        </div>
                        {/* <div className="row pt-5">
                            <div className="col-lg-12 text-center">
                                <p id="rateOfReturn" className="rate-text">
                                    Your Return: {new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.state.return)}
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
