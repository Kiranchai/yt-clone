import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

class App extends React.Component{

    
    render(){
        return(
            <div className="container">
                <Sidebar />
                
                <div className="home">
                    <Navbar />
                    <Feed />
                </div>
                
                
            </div>
        )
    }

}

export default App;