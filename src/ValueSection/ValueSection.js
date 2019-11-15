import React, { Component } from 'react'
import '../assets/fonts.css';
import './ValueSection.css';
import accessibleImage from '../assets/graphic_accessible.svg';
import investImage from '../assets/graphic_invest.svg';
import newspaperImage from '../assets/graphic_newspaper.svg';


export default class ValueSection extends Component {

    constructor(props) {
        super(props);
        this.state = { valueIndex: props.index };
    }

    render() {
        const index = this.state.valueIndex;
        let valueSection;

        if (index === "0") {
            valueSection =
                <div className="row pt-180">
                    <div className="col-md-0 col-lg-1"></div>
                    <div className="col-md-12 col-lg-5 text-center pb-3">
                        <img className="img-fluid" src={accessibleImage} alt="Accessible & Flexible" />
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <h1 className="value-header pb-3">Accessible & Flexible</h1>
                        <span className="value-paragraph">
                            Affordable opportunites to participate in rental investments by <strong>co-investing with a community of verified investors</strong>.
                        </span>
                    </div>
                    <div className="col-md-0 col-lg-1"></div>

                </div>;
        } else if (index === "1") {
            valueSection =
                <div className="row pt-180">
                    <div className="col-md-0 col-lg-1"></div>
                    <div className="col-md-12 col-lg-5 text-center pb-3">
                        <img className="img-fluid" src={newspaperImage} alt="[Hassle Free]" />
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <h1 className="value-header">Hassle Free Investing</h1>
                        <span className="value-paragraph">
                            Ownable takes care of finding tenants, property management and the entire transaction. <strong>No</strong> banks. <strong>No</strong> realtors. <strong>No</strong> lawyers. <strong>No hassle</strong>.
                        </span>
                    </div>
                    <div className="col-md-0 col-lg-1"></div>
                </div>;
        } else if (index === "2") {
            valueSection =
                <div className="row pt-180">
                    <div className="col-md-0 col-lg-1"></div>
                    <div className="col-md-12 col-lg-5 text-center pb-3">
                        <img className="img-fluid" src={investImage} alt="[Guaranteed Return]" />
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <h1 className="value-header">Guaranteed Return</h1>
                        <span className="value-paragraph">
                            Using <strong>artifical intelligence</strong>, we calculate your <strong>guaranteed rate of return</strong> so you can rest easy on your investment.
                            </span>
                    </div>
                    <div className="col-md-0 col-lg-1"></div>
                </div>;
        }

        return (
            <div className="container-fluid px-5">
                {valueSection}
            </div>
        )
    }
}

