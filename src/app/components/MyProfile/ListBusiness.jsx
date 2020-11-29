import React, { Component } from 'react'
import { updateBusinessType } from "../../../state/actions";
import { connect } from "react-redux";

export class ListBusiness extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            allBusiness:[
                {
                    name:'Grocery',
                    imgUrl:''
                },
                {
                    name:'Restautant',
                    imgUrl:''
                },
                {
                    name:'Café',
                    imgUrl:''
                },
                {
                    name:'Hotel',
                    imgUrl:''
                },
                {
                    name:'Mall',
                    imgUrl:''
                },
                {
                    name:'School',
                    imgUrl:''
                },
                {
                    name:'Office',
                    imgUrl:''
                },
            ],
            businessType:props.profileData.Profile.businessType
        };
    }

    handleClick = (business)=>{
        this.props.updateBusinessType(business.name);
        this.setState({businessType: business.name});
    }

    render() {
        return this.state.allBusiness.map((business) =>(
            <div className="businessType col-4" key={business.name}>
                <span onClick={() => this.handleClick(business)} className={this.state.businessType===business.name ? "active" : ""}>{business.name}</span>
            </div>
        ));
    }
}

const mapStateToProps = state => {
    const { profileData } = state;
    return { profileData };
};

export default connect( mapStateToProps, { updateBusinessType })(ListBusiness);
