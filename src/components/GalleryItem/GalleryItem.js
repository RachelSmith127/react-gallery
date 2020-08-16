import React, { Component } from 'react';

class GalleryItem extends Component{
    state = {
        imageDescription: true
    }

    showAlias = () => {
       
        this.setState({
            imageDescription: !this.state.imageDescription
        })
    }
   
    render (){  
        const image = this.props.image
        return(
            <>
            <div className="container" onClick={this.showAlias}>
         
            {this.state.imageDescription ? <img className="item"src={image.path}/> : <p>{image.description}</p>}
            </div>
            <button onClick={ () => this.props.addLike(image.id)}>Like</button>
            <p>{image.likes}People that liked this photo:</p>
            
            </>


        )
    }
}
export default GalleryItem;