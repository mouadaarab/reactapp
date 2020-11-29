import React, { Component } from 'react'
import { updateCategories } from "../../../state/actions";
import { connect } from "react-redux";

export class Categories extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            allCategories:[
                {
                    name:'Home Care',
                    imgUrl:''
                },
                {
                    name:'Stationery',
                    imgUrl:''
                },
                {
                    name:'Personal Care',
                    imgUrl:''
                },
                {
                    name:'Paper Products',
                    imgUrl:''
                },
                {
                    name:'Coffee',
                    imgUrl:''
                },
                {
                    name:'Plastic Products',
                    imgUrl:''
                },
                {
                    name:'Food & Sevarage',
                    imgUrl:''
                },
                {
                    name:'Health Care',
                    imgUrl:''
                },
            ],
            categories:props.profileData.Profile.categories?props.profileData.Profile.categories:[]
        };
    }

    handleClick = (categorie) => {
        if(!this.state.categories.includes(categorie.name)){

            const promise = new Promise((resolve, reject) => {
                this.setState(state => {
                    const categories = [...state.categories, categorie.name];
                    return {
                        categories
                    };
              });
              resolve('done');
            });
            
            promise.then((value) => {
                this.props.updateCategories({
                    categories:this.state.categories
                })
            });
            
        }else{
            const promise = new Promise((resolve, reject) => {
                this.setState(state => {
                    const categories = state.categories.filter((item) => item !== categorie.name);
                    return {
                        categories
                    };
                });
                resolve('done');
            });

            promise.then((value) => {
                this.props.updateCategories({
                    categories:this.state.categories
                })
            });
        }
    }

    render() {
        return this.state.allCategories.map((categorie) =>(
            <div className="businessType col-4" key={categorie.name}>
                <span onClick={() =>this.handleClick(categorie)} className={this.state.categories.includes(categorie.name) ? "active" : ""}>{categorie.name}</span>
            </div>
        ));
    }
}

const mapStateToProps = state => {
    const { profileData } = state;
    return { profileData };
};

export default connect( mapStateToProps, { updateCategories })(Categories);