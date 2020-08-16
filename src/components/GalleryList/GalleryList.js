import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js'

class GalleryList extends Component {

    render() {
      console.log(this.props.listOfImages)
        return(
            <>
                {this.props.listOfImages.map((image) =>  { 
                    return (
                        <GalleryItem key={image.id} image={image} addLike={this.props.addLike}/>
                    )
                })}
                {/* <img src="images/goat_small.jpg"/> */}
               
            </>
        )

    }

}

export default GalleryList;
