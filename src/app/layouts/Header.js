import React, { Component } from 'react'
import back from '../../assets/img/chevron-left-solid.svg'
import logout from '../../assets/img/sign-out-alt-solid.svg'
export default class Header extends Component {
    render() {
        return (
            <header className="d-flex justify-content-between align-items-center" id="header">
                <img src={back} alt="Left" className="back" />

                <span>My Profile</span>

                <img src={logout} alt="Left" className="logout" />
            </header>
        )
    }
}
