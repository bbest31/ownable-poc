import React from 'react'
import './HowItWorksSection.css';
import '../assets/fonts.css';
import hiwOneImg from '../assets/hiw_one.svg';
import hiwTwoImg from '../assets/hiw_two.svg';
import hiwThreeImg from '../assets/hiw_three.svg';


const HowItWorksSection = () => {

    return (
        <div className="container-fluid pt-200">
            <div className="row">
                <div className="col-12">
                    <h1 className="hiw-header display-4">How It Works</h1>
                </div>
            </div>
            <div className="row pt-24px">
                <div className=" col-md-3 col-lg-4"></div>
                <div className="col-md-9 col-lg-8">
                    <span className="hiw-subtext"><img className="pr-3" src={hiwOneImg} alt="[1]" /> Find your property</span>
                </div>
            </div>
            <div className="row pt-24px">
                <div className=" col-md-3 col-lg-4"></div>
                <div className="col-md-9 col-lg-8">
                    <span className="hiw-subtext"><img className="pr-3" src={hiwTwoImg} alt="[2]" /> Select investment level at guaranteed annual return</span>
                </div>
            </div>
            <div className="row pt-24px">
                <div className=" col-md-3 col-lg-4"></div>
                <div className="col-md-9 col-lg-8">
                    <span className="hiw-subtext"><img className="pr-3" src={hiwThreeImg} alt="[3]" /> Ownable finds co-investors & handles the rest</span>
                </div>
            </div>
        </div>
    )

}


export default HowItWorksSection;