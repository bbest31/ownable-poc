import React from 'react';
import './LandingScene.css';
import landingImage from '../assets/graphic_city_block.svg';
import '../assets/fonts.css';


const LandingScene = () => {

    return (
        <div className="container-fluid main-bg pt-5">
            <div className="row text-center">
                <div className="col-12">
                    <h1 className="main-header display-4">Accessible Real Estate Investing</h1>
                </div>
                <div className="col-12">
                    <h2 className="subheader">Helping you invest and participate in real estate growth</h2>
                </div>
                <div className="col-12">
                    <img className="img-fluid mx-auto d-block mt-5" src={landingImage} alt="CITY BLOCK" />
                </div>
            </div>
        </div>
    );
}

export default LandingScene;