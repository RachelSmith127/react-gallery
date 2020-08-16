//creating our baseline setup 
import React, { Component } from 'react';

class GalleryItem extends Component{
    //defining state
    state = {
        imageDescription: true
    }
    //defining showAlias which will allow us to flip between our image and the description
    showAlias = () => {
       
        this.setState({
            imageDescription: !this.state.imageDescription
        })
    }
   
    render (){  
        //defining image with a variable
        const image = this.props.image
        return(
            <>
            {/* This is the toggle to switch between the image and the description */}
            <div className="container" onClick={this.showAlias}>
            {this.state.imageDescription ? <img src={image.path}/> : <p>{image.description}</p>}
            </div>
            {/* This is our button that allows us to add likes */}
            <button onClick={ () => this.props.addLike(image.id)}>Like</button>
            <p>{image.likes} : Total Likes</p>
            
            </>


        )
    }
}
export default GalleryItem;