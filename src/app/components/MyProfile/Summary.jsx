import React, { Component } from 'react'
import { connect } from "react-redux";


export class Summary extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div id="summary">
                <p><strong>Business Type</strong></p>
                <p>
                    {this.props.profileData.Profile.businessType}
                </p>

                <p><strong>Categories</strong></p>
                {this.props.profileData.Profile.categories.map((cat)=>{
                    return <p key={cat}>{cat}</p>
                })}

                <p><strong>Business Informations</strong></p>
                <p>Name : {this.props.profileData.Profile.name}</p>
                <p>Email : {this.props.profileData.Profile.email}</p>
                <p>Phone Number : {this.props.profileData.Profile.phoneNumber}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { profileData } = state;
    return { profileData };
  };

export default connect(mapStateToProps)(Summary);