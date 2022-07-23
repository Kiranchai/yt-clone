import React from "react";
import "./ListElement.css";

class ListElement extends React.Component{

    render(){
        return(
            <li>
                <div className="liIcon">
                    {this.props.icon}
                </div>
                <div className="liContent">
                    {this.props.content}
                </div>
                
            </li>
        )
    }

}

export default ListElement;