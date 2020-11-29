import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import ListBusiness from "../components/MyProfile/ListBusiness"
import Categories from "../components/MyProfile/Categories"
import Informations from "../components/MyProfile/Informations"
import Summary from "../components/MyProfile/Summary"
import { updateStep } from "../../state/actions";
import Noty from 'noty';
import {validateEmail, validationPhoneNumber} from '../../validation';


function Steps(step) {
    if (step.step==1) {
        return (
            <div id="step1" className="withChoices">
                <div className="row">
                    <ListBusiness/>
                </div>
            </div>
        );
    }else if (step.step==2) {
        return (
            <div id="step2" className="withChoices">
                <div className="row">
                    <Categories/>
                </div>
            </div>
        );
    }else if (step.step==3) {
        return (
            <Informations/>
        );
    }else if (step.step==4) {
        return (
            <Summary/>
        );
    }

    return (
        <div className="row">
           hello
        </div>
    );
}

class myProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1, //props.profileData.step?props.profileData.step:1
        };
    }

    componentDidMount(){
        if(this.props.profileData.Step)
            this.setState({step: this.props.profileData.Step});
        else{
            this.setState({step: 1});
            this.props.updateStep(1);
        }
    }

    handleClick = ()=> {
        let error = false;
        let error_text = false;
        if(this.state.step==1){
            if(!this.props.profileData.Profile.businessType){
                error=true;
                error_text="Please choose one option";
            }
        }else if(this.state.step==2){
            if(this.props.profileData.Profile.categories.length==0){
                error=true;
                error_text="Please choose at least one option";
            }
        }else if(this.state.step==3){
            console.log(this.props.profileData.Profile.email)
            if(!validateEmail(this.props.profileData.Profile.email)){
                error=true;
                error_text="A correct email field is required";
            }else if(this.props.profileData.Profile.name.length<4){
                error=true;
                error_text="A correct name field is required";
            }else if(!validationPhoneNumber(this.props.profileData.Profile.phoneNumber)){
                error=true;
                error_text="A correct phone number field is required";
            }
        }
        
        if(this.state.step<4 && !error){
            this.props.updateStep(this.state.step+1);
            this.setState({step: this.state.step+1});
        }else{
            new Noty({
                type: 'error',
                layout: 'bottomRight',
                theme: 'mint',
                text: error_text,
                timeout: '4000',
                progressBar: true,
                closeWith: ['click'],
            }).show();
            
        }
    }

    render (){
        return(
        <div className={`myProfile d-flex flex-column ${this.state.step==4?'justify-content-center':'justify-content-between'}`}>
        <div className={`position-relative z-index-1 ${this.state.step==4?'d-none':''}`}>
            <ul id="progressbar">
                <li className={this.state.step>0?'active':''}>
                    Business Type
                </li>
                <li className={this.state.step>1?'active':''}>
                    Categories
                </li> 
                <li className={this.state.step==3?'active':''}>
                    Business Informations
                </li>
            </ul>
        </div>

        <Steps step={this.state.step}></Steps>

        <button className={`goNext ${this.state.step==4?'d-none':''}`} onClick={this.handleClick} >{this.state.step==3?'Save':'Next'}</button>
    </div>
    )};
}

const mapStateToProps = state => {
    const { profileData } = state;
    return { profileData };
};

export default connect( mapStateToProps, { updateStep })(myProfile);
