import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardtrades: [
        {
          name: 'STAR WARS: CARD TRADER BY TOPPS', id: '1', image_url: "https://lumiere-a.akamaihd.net/v1/images/swct20_icon_1200x1200_d3bdbeef.jpeg?region=0%2C0%2C1200%2C1200&width=480",
          description: 'SW: Card Trader app offers a fun way to collect digital trade.'
        },
        {
          name: 'KINECT STAR WARS', id: '2', image_url: "https://lumiere-a.akamaihd.net/v1/images/game_poster_kinectstarwars_cf3f6c1d.jpeg?region=0%2C0%2C500%2C750&width=500",
          description: 'The Company also offers a range of products like whole trade.'
        },
        {
          name: 'LEGO STAR WARS: THE FORCE AWAKENS', id: '3', image_url: "https://lumiere-a.akamaihd.net/v1/images/lsw_key_prev_lo_2b337d84.jpeg?region=0%2C869%2C2400%2C2404&amp;width=550",
          description: 'The Force is strong with you. The No. 1 LEGO video game.'
        },
        {
          name: 'STAR WARS: THE FORCE UNLEASHED', id: '4', image_url: "https://lumiere-a.akamaihd.net/v1/images/The-Force-Unleashed-Poster_4f2601ea.jpeg?region=0%2C0%2C1000%2C1500&width=480",
          description: 'The completely re-imagines and scale of the Force.'
        }

      ]
    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
      </div>
    )
  }
}


export default App;
