import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { updateName,updateEmail,updatePhone } from "../../../state/actions";
import { connect } from "react-redux";

export class Informations extends Component {
    static propTypes = {

    }

    nameChange = (e) =>{
        this.props.updateName({
            name:e.target.value
        })
    }

    emailChange = (e) =>{
        this.props.updateEmail({
            email:e.target.value
        })
    }

    phoneNumberChange = (e) =>{
        this.props.updatePhone({
            phoneNumber:e.target.value
        })
    }
    
    render() {
        return (
            <div id="step3">
                <label htmlFor="">Business Informations :</label>
                <div className="form-group">
                    <input type="text" required className="form-control" onChange={this.nameChange} name="name" value={this.props.profileData.Profile.name} placeholder="Company Name" />
                </div>

                <div className="form-group">
                    <input type="email" required className="form-control" onChange={this.emailChange} name="email" value={this.props.profileData.Profile.email} placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="phone" required className="form-control" onChange={this.phoneNumberChange} name="phoneNumber" value={this.props.profileData.Profile.phoneNumber} placeholder="Phone Number" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { profileData } = state;
    return { profileData };
};

export default connect( mapStateToProps, { updateName,updateEmail,updatePhone })(Informations);