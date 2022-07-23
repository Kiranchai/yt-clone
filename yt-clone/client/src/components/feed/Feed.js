import React from "react";
import "./Feed.css";
import MediaItem from "../mediaItem/MediaItem";
import CircularProgress from '@mui/material/CircularProgress';

class Feed extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            videos: [],
        }

        this.getVideos = this.getVideos.bind(this);
    }

    async getVideos(){
        fetch('/videos')
        .then(res => res.json())
        .then(data =>{
            setInterval(() => {
                this.setState({
                    videos: data,
                    isLoading: false,
                })
            }, 3000);
            
        })
        .then(() => {
            console.log(this.state.videos);
        })
        
    }

    componentDidMount(){

        this.getVideos();        
        
    }

    render(){

        if(this.state.isLoading){
            return (
                <div className="loader">
                    <CircularProgress />
                </div>
                
            )
        }

        else{
            return(
                <div className="feed">
                    
                    {this.state.videos.map((video) => (
                        <MediaItem 
                            key={video.id} 
                            title={video.title}
                            views={video.views} date={video.date} 
                            duration={video.duration} thumbnail={video.img}
                            avatar={video.channel.avatar}
                            author={video.channel.name}
                        />
                    ))}
    
                </div>
            )
        }
        
    }


}

export default Feed;