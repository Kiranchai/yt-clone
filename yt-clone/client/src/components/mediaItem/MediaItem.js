import React from 'react';
import "./MediaItem.css";

class MediaItem extends React.Component{

    render(){
        
        return(
            <div className='mediaItem'>
                <div className='mediaItemContainer'>
                    <img className='thumbnail' src={this.props.thumbnail} alt='thumbnail'/>

                    <span className='mediaItemDuration'>
                        {this.props.duration}
                    </span>
                     
                </div>
                <div className='mediaItemDetails'>
                    <div className='mediaItemImgWrapper'>
                        <img className='mediaItemImg' src={this.props.avatar} alt='Avatar'/>
                    </div>
                    
                    <div className='mediaItemDetailsWrapper'>
                        <span className='mediaItemTitle'>
                            {this.props.title}
                        </span>

                        <span className='mediaItemAuthor'>
                            {this.props.author}
                        </span>

                        <span className='mediaItemViews'>
                            {this.props.views} • {this.props.date}
                        </span>

                        
                    </div>
                    

                </div>
                

                
            </div>
        )

    }

}

export default MediaItem;