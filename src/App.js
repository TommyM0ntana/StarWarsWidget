import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import CardTradeList from './components/cardtradeslist/CardTradeList'
import SearchBar from './components/searchbar/SearchBar'
import Footer from './components/footer/Footer'


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
        },
        {
          name: 'ANGRY BIRDS STAR WARS', id: '5', image_url: "https://lumiere-a.akamaihd.net/v1/images/image_2d575393.jpeg?region=341%2C0%2C878%2C878&amp;width=500",
          description: 'Join the Angry Birds in their biggest adventure yet!'
        },
        {
          name: 'STAR WARS JEDI: FALLEN ORDER', id: '6', image_url: "https://lumiere-a.akamaihd.net/v1/images/swjfo-standard-key-art-1920x1080_257168ad.jpeg?region=420%2C0%2C1080%2C1080&amp;width=520",
          description: 'The Company, through  Whole Foods Market.'
        },
        {
          name: 'STAR WARS: BALANCE OF THE FORCE', id: '7', image_url: "https://lumiere-a.akamaihd.net/v1/images/Sw-Pinball-1x1_332f0ee6.jpeg?region=0%2C0%2C400%2C400;width=500",
          description: 'The Force is strong with you. The No. 1 LEGO video game.'
        },
        {
          name: 'LEGO STAR WARS III: THE CLONE WARS', id: '8', image_url: "https://lumiere-a.akamaihd.net/v1/images/game_poster_legostarwarsiiitheclonewars_881be4f2.jpeg?region=0%2C0%2C500%2C750&width=480",
          description: 'The Clone Wars is the third sequel in the beloved.'
        },
        {
          name: 'STAR WARS: GALAXY OF HEROES', id: '9', image_url: "https://lumiere-a.akamaihd.net/v1/images/goh_rpg_icon_vader_yoda_split_ios_lrg_d6ef803a.jpeg?region=0%2C0%2C1000%2C1000&width=480",
          description: 'Collect your favorite Star Wars characters!'
        },
        {
          name: 'STAR WARS PINBALL: A STAR WARS STORY', id: '10', image_url: "https://lumiere-a.akamaihd.net/v1/images/pfx3_table_icon_solo1_0fdd0a87.jpeg?region=0%2C0%2C512%2C512&width=480",
          description: 'Blast off to the smugglers life in a galaxy far, far away.'
        },
        {
          name: 'STAR WARS: THE OLD REPUBLIC', id: '11', image_url: "https://lumiere-a.akamaihd.net/v1/images/Sw-TOR-1x1_8dc5d87d.jpeg?region=0%2C0%2C400%2C400&width=520",
          description: 'Explore a years before the rise of Darth Vader.'
        },
        {
          name: 'STAR WARS BATTLEFRONT', id: '12', image_url: "https://lumiere-a.akamaihd.net/v1/images/battlefront-key-art-nologo_bbe673b8.jpeg?region=788%2C0%2C841%2C634&width=480",
          description: 'Immerse yourself in the ultimate Star Wars.'
        },
        {
          name: 'DISNEY INFINITY 3.0 EDITION', id: '13', image_url: "https://lumiere-a.akamaihd.net/v1/images/200016_di3_sp_final_art_04112015_9c6aa123.jpeg?region=0%2C0%2C1560%2C1168&width=600",
          description: 'The Clone Wars is the third sequel in the beloved.'
        },
        {
          name: 'STAR WARS JEDI: FALLEN', id: '14', image_url: "https://lumiere-a.akamaihd.net/v1/images/swjfo-key-art-deluxe-main-1280_6d3210b7.jpeg?region=0%2C0%2C1280%2C936&width=480",
          description: 'Collect your favorite Star Wars characters!'
        },
        {
          name: 'STAR WARS STICKERS', id: '15', image_url: "https://lumiere-a.akamaihd.net/v1/images/starts_app_icon_2048x2048_0a13a84e.png?region=0%2C0%2C240%2C240",
          description: 'Blast off to the smugglers life in a galaxy far, far away.'
        },
        {
          name: 'ANGRY BIRDS STAR WARS II', id: '16', image_url: "https://lumiere-a.akamaihd.net/v1/images/AngryBirds_StarWars2_Icon_Final_4500x4500-v02_137751fa.jpeg?region=0%2C0%2C1800%2C1800&width=480",
          description: 'Explore a years before the rise of Darth Vader.'
        }
      ],
      searchCardtrade: ''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value);

    this.setState({ searchCardtrade: e.target.value })
  }

  render() {
    let filteredCardtrades = this.state.cardtrades.filter((cardtrade) => {
      return cardtrade.name.toLowerCase().includes(this.state.searchCardtrade.toLocaleLowerCase())
    })

    return (
      <div className="App" >
        <Header />
        <SearchBar handleInput={this.handleInput} />
        <CardTradeList filteredCardtrades={filteredCardtrades} />
        <Footer />
      </div>
    )
  }
}


export default App;
