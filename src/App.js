import React, { Component } from "react";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header"
import friends from "./friends.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav></Nav>
        <Header></Header>
        {this.state.friends.map(friend => (
          <Body
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
