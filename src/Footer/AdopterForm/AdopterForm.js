import React, { Component } from 'react';
import './AdopterForm.css';
import { db, analytics } from '../../firebase';
import successImg from '../../assets/graphic_success_checkmark.svg';

class AdopterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adopterName: "",
            adopterEmail: "",
            adopterStatus: "",
            adopterInvestmentType: "",
            adopterMotivation: "",
            adopterInvolvement: ""
        };
        // element refs
        this.formElement = React.createRef();
        this.nameElement = React.createRef();
        this.emailElement = React.createRef();
        this.statusElement = React.createRef();
        this.investmentTypeElement = React.createRef();
        this.motivationElement = React.createRef();
        this.involvementElement = React.createRef();
        this.successElement = React.createRef();

        this.submitForm = this.submitForm.bind(this);

    }

    nameChange = (event) => {
        this.setState({ adopterName: event.target.value });
    }

    emailChange = (event) => {
        this.setState({ adopterEmail: event.target.value });
        //console.log(this.state.adopterEmail);
    }

    investmentTypeChange = (event) => {
        this.setState({ adopterInvestmentType: event.target.value })
    }

    statusChange = (event) => {
        this.setState({ adopterStatus: event.target.value })
    }

    motivationChange = (event) => {
        this.setState({ adopterMotivation: event.target.value });
    }

    involvementChange = (event) => {
        this.setState({ adopterInvolvement: event.target.value });
    }


    submitForm = (event) => {
        event.preventDefault();

        this.nameElement.current.className = "form-control";
        this.emailElement.current.className = "form-control";
        this.statusElement.current.className = "form-control";
        this.investmentTypeElement.current.className = "form-control";
        this.motivationElement.current.className = "form-control";
        this.involvementElement.current.className = "form-control";

        let name = this.state.adopterName;
        let email = this.state.adopterEmail;
        let status = this.state.adopterStatus;
        let investmentType = this.state.adopterInvestmentType;
        let motivation = this.state.adopterMotivation;
        let involvement = this.state.adopterInvolvement;

        if (name === "") {
            this.nameElement.current.className += " border border-danger";
        } else if (email === "") {
            this.emailElement.current.className += " border border-danger";
        } else if (status === "") {
            this.statusElement.current.className += " border border-danger";
        } else if (investmentType === "") {
            this.investmentTypeElement.current.className += " border border-danger";
        } else if (motivation === "") {
            this.motivationElement.current.className += " border border-danger";
        } else if (involvement === "") {
            this.involvementElement.current.className += " border border-danger";
        } else {
            // This is bad but couldn't ref the elements from within the callback function.
            this.formElement.current.className = "hidden";
            this.successElement.current.className = 'success-icon img-fluid';
            db.collection('form').add({
                name: name,
                email: email,
                status: status,
                investmentType: investmentType,
                motivation: motivation,
                involvement: involvement
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    analytics.logEvent("join", { user_name: name, email: email, status: status, investment: investmentType });
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }
    }

    render() {
        let nameInput = (<div className="form-group">
            <label className="float-left form-label" htmlFor="adopterNameInput">Name</label>
            <input id="adopterNameInput" className="form-control" type="text" required={true} placeholder="John Doe" onChange={this.nameChange} ref={this.nameElement}></input>
        </div>);

        let emailInput = (<div className="form-group">
            <label className="float-left form-label" htmlFor="adopterEmailInput">Email</label>
            <input id="adopterEmailInput" className="form-control" type="email" required={true} placeholder="example@email.com" onChange={this.emailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" ref={this.emailElement}></input>
        </div>);

        let statusInput = (<div className="form-group">
            <label className="float-left form-label" htmlFor="adopterStatusInput">My living status</label>
            <select id="adopterStatusInput" className="form-control" required={true} onChange={this.statusChange} ref={this.statusElement}>
                <option value="" disabled selected>--</option>
                <option value="owner">Home owner</option>
                <option value="renter">Renting</option>
                <option value="none">Free living situation</option>
            </select>
        </div>);

        let investmentTypeInput = (<div className="form-group">
            <label className="float-left form-label">My current investments</label>
            <select id="adopterInvestmentTypeInput" className="form-control" required={true} onChange={this.investmentTypeChange} ref={this.investmentTypeElement}>
                <option value="" disabled selected>--</option>
                <option value="Real estate">Real estate</option>
                <option value="Stocks">Stocks</option>
                <option value="Bonds">Bonds</option>
                <option value="Funds">Mutual Funds</option>
                <option value="Other">Other</option>
                <option value="None">None</option>
            </select>
        </div>);

        let motivationInput = (<div className="form-group">
            <label className="float-left form-label" htmlFor="adopterMotivationInput">Motivation to invest w/ Ownable</label>
            <select id="adopterMotivationInput" className="form-control" required={true} onChange={this.motivationChange} ref={this.motivationElement}>
                <option value="" disabled selected>--</option>
                <option value="Greater RoR">Looking for greater rates of return</option>
                <option value="Lower Cost of Entry">Lower cost of entry into property investment</option>
                <option value="Less Volatile">Less volatile investment</option>
                <option value="Automation">Automated and hands off involvement</option>
                <option value="Financing Issues">Unable to obtain financing</option>
                <option value="Tech">I think the technology is interesting</option>
            </select>
        </div>);

        let involvementInput = (<div className="form-group">
            <label className="float-left form-label" htmlFor="adopterInvolvementInput">Desired level of involvement</label>
            <select id="adopterInvolvementInput" className="form-control" required={true} onChange={this.involvementChange} ref={this.involvementElement}>
                <option value="" disabled selected>--</option>
                <option value="Fully involved (pick property, tenant, property manager)">Fully involved (pick property, tenant, property manager)</option>
                <option value="Somewhat involved (pick property, tenant)">Somewhat involved (pick property, tenant)</option>
                <option value="Limited involvement (pick property)">Limited involvement (pick property)</option>
                <option value="Fully automated property investing">Fully automated property investing</option>
            </select>
        </div>);

        let adopterForm = (<form className="text-center" onSubmit={this.submitForm} ref={this.formElement}>
            {nameInput}
            {emailInput}
            {statusInput}
            {investmentTypeInput}
            {motivationInput}
            {involvementInput}
            <button className="adopter-btn" type="submit">Join Newsletter</button>
        </form>);
        return (
            <div className="text-center">
                <img ref={this.successElement} className='hidden' src={successImg} alt="Success" />
                {adopterForm}
            </div>
        );
    }
}

export default AdopterForm;