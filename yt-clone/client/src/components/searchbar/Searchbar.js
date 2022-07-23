import React from "react";
import './Searchbar.css'
import VoiceRecognitionButton from "../voiceRecognitionButton/VoiceRecognitionButton";
import {FaSearch} from "react-icons/fa";

class Searchbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
        };
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnFocus(e){
        this.setState({
            isClicked: true
        })
        
    }

    handleOnBlur(e){
        this.setState({
            isClicked: false,
        })
    }

    render(){

        return(
            <div className="bar">
                <div className="searchbar">
                    <div className={this.state.isClicked 
                    ? 'searchbar-border clicked'
                    : 'searchbar-border'}>
                        <input 
                        type="text" 
                        placeholder="Szukaj"
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                        >
                        
                        </input>
                        
                        


                    </div>

                    <div className="searchIconBox">
                        <FaSearch className="searchIcon"/>
                    </div>
                    
                    
                </div>

                <VoiceRecognitionButton />

            </div>
        
            
            
            
        )
    }

}

export default Searchbar;