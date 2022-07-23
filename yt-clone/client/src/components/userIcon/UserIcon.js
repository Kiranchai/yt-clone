import React from "react";
import "./UserIcon.css";

class UserIcon extends React.Component{

    render(){
        return(
            <div className="usersAvatar">
                
                <img 
                src="https://yt3.ggpht.com/yti/APfAmoHi7SWBUmHe54jMqvrCHuzbctgUqMKWuE2RHhfW=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Users Avatar"
                className="usersAvatarImg"
                
                />
            </div>
        )
    }

}

export default UserIcon