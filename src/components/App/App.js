//{Component} is destructuring-
// it pulls the Component out of the React object imported in
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js'
import GalleryItem from '../GalleryItem/GalleryItem.js'

class App extends Component {
  //defining state and array with an object
  state = {

    galleryList: [
      {
        id: '',
        path: '',
        description: '',
        like: 0
      }
    ]
  }

  //like document.ready
  componentDidMount(){
  //do initial get request
    this.getGallery();
  }

  // this is my get request this is grabbing our data and storing it in `App.js`
  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      //response.data is where our data lives
      this.setState({
        galleryList:response.data
      })
      //this will display an error if we have one.
    }).catch(error => {
      alert('error in get')
    })
   
  }

  // - When the like button is clicked, `Axios` is updating (`PUT`) the like count `/gallery/like/:id`.
  addLike = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then((response) => {
      this.getGallery();
      //catch will display an error if we have one.
    }).catch(error => {
      alert('error in put')
    })
   
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {/* working with put request to store number of likes */}
        {/*Makes this.props.listOfImages IN GalleryList component*/}
        <GalleryList listOfImages={this.state.galleryList}
        addLike={this.addLike}/>
      </div>
    );
  }
}

export default App;
