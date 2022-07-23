import React from "react";
import "./Sidebar.css";
import ListElement from "../listElement/ListElement";
import {FaHome, FaSearch, FaPlay, FaStar, FaBook,
        FaBackward, FaAlignJustify, FaClock, FaThumbsUp} from "react-icons/fa";

class Sidebar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options: [
                {content: "Główna", icon: <FaHome />},
                {content: "Odkrywaj", icon: <FaSearch />},
                {content: "Shorts", icon: <FaPlay />},
                {content: "Subskrypcje", icon: <FaStar />},
                {content: "Biblioteka", icon: <FaBook />},
                {content: "Historia", icon: <FaBackward />},
                {content: "Twoje filmy", icon: <FaAlignJustify />},
                {content: "Do obejrzenia", icon: <FaClock />},
                {content: "Polubione", icon: <FaThumbsUp />},
            ]
        }
    }

    
    render(){

        return(
            <div className="sidebar">
                <ul>
                    {this.state.options.map((option, idx) => (
                        <ListElement content={option.content} icon={option.icon} key={idx} />
                    ))}
                </ul>
            </div>
        )

        

        
    }


}

export default Sidebar;