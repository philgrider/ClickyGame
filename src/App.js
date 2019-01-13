import React, { Component } from "react";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header"
import images from "./images.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    choosenImages: [],
    shake: false,
    score: 0,
    highScore: 0
  };
  shuffle = (images) => {
    var currentIndex = images.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
  
    return images;
  }

  chooseImage = id => {
   
    if (this.state.choosenImages.includes(id) === false) {
      var updateChoosenImages = this.state.choosenImages;
      updateChoosenImages.push(id);
      this.setState({choosenImages: updateChoosenImages});
      const updateScore = this.state.score + 1; 
      const updateImages = this.shuffle(this.state.images)
      this.setState({ score: updateScore,
                      images: updateImages,
                      shake: false
                    });    
    } else{
      if(this.state.highScore <= this.state.score){
      console.log("new high score ", this.state.score);
      this.setState({highScore: this.state.score});
      }
      const updateImages = this.shuffle(this.state.images)
      this.setState({ score: 0,
                      images: updateImages,
                      choosenImages: [],
                      shake: true });  
    }
    // Filter this.state.images for images with an id not equal to the id being removed
    

  };

  // Map over this.state.images and render a ImageCard component for each Image object
  render() {
    return (
      <Wrapper>
        <Nav 
            score={this.state.score} 
            highScore={this.state.highScore}>
        </Nav>
        <Header></Header>
        {this.state.images.map(Image => (
          <Body
            chooseImage={this.chooseImage}
            id={Image.id}
            key={Image.id}
            shake={this.state.shake}
            image={Image.image}
          />
        ))}
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
