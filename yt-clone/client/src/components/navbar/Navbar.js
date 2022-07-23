import React from "react";
import './Navbar.css';
import Header from '../header/Header'
import Hamburger from 'hamburger-react';
import Searchbar from "../searchbar/Searchbar";
import {FaFilm, FaBell} from "react-icons/fa";
import UserIcon from "../userIcon/UserIcon";

class Navbar extends React.Component{


    render(){

        return(
            <div id="main">
                <div className="navbar-left">
                    <button >
                        <Hamburger/>
                    </button>
                    
                    <Header />
                </div>
                
                <div className="navbar-middle">
                    <Searchbar />
                </div>

                <div className="navbar-right">
                    <FaFilm />
                    <FaBell />
                    <UserIcon />
                </div>

            </div>
        )

    }

}

export default Navbar;