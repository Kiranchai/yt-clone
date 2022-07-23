import React from "react";
import "./VoiceRecognitionButton.css";
import {FaMicrophone} from "react-icons/fa";

class VoiceRecognitionButton extends React.Component{

    render(){

        return(
            <div className="voiceIconBox">
                <FaMicrophone className="voiceIcon" />
            </div>
        )
    }

}

export default VoiceRecognitionButton