//basic setup 
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js'

class GalleryList extends Component {

    render() {
      console.log(this.props.listOfImages)
        return(
            <>
            {/* this is our loop that loops over all of our gallery images and helps us count likes */}
                {this.props.listOfImages.map((image) =>  { 
                    return (
                        <GalleryItem key={image.id} image={image} addLike={this.props.addLike}/>
                    )
                })}
               
            </>
        )

    }

}

export default GalleryList;
