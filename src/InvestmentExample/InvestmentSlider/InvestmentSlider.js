import React, { Component } from 'react';
import { Slider, withStyles } from '@material-ui/core';
import './InvestmentSlider.css';

const InvestSlider = withStyles({
    root: {
        color: '#52af77',
        height: 16,
    },
    thumb: {
        height: 32,
        width: 32,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-60% + 1px)',
        top: 'calc(-65px)',
        '& span': {
            display: 'none',
            width: 'calc(60px)',
            height: 'calc(60px)',
            '& span': {
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '16px',
                paddingTop: '19px'
            },
        }
    },
    track: {
        height: 16,
        borderRadius: 4,
    },
    rail: {
        height: 16,
        borderRadius: 4,
    },
})(Slider);

export default class InvestmentSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5000
        }

    }

    onChangeComplete = (e, value) => {
    }

    handleChange = (e, value) => {
        this.setState({
            value: value
        })
    };

    /**@todo calculate the annual rate of return*/
    annualROR = () => {
        return (new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.state.value * 1.053));
    }

    investmentAmount = () =>{
        return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.state.value);
    }




    render() {
        return (
            <div className="investment-slider pt-2 text-center">
                <h1 className='investment-label'>Your Investment: <strong>{this.investmentAmount()}</strong></h1>
                <InvestSlider
                    defaultValue={5000}
                    min={5000}
                    max={100000}
                    step={1000}
                    onChange={this.handleChange}
                    onChangeCommitted={this.onChangeComplete}
                    valueLabelDisplay="on"
                />
                <h1 className='return-text pt-3'>Your Return: {this.annualROR(this.state.value)}</h1>
            </div>
        )
    }
}
