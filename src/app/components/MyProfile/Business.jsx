import React, { Component } from 'react'

export default class Business extends Component {
    render() {
        return (
            <div>
                <div className="businessType col-4">
                    <span className={localState.businessType=="Grocery" ? "active" : ""}>Grocery</span>
                </div>
            </div>
        )
    }
}
