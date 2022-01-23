import React, { Component } from 'react';
import JumperCard from '../components/JumperCard';
import Navigation from '../components/Navigation';
import Posts from '../components/Posts';
import LinkCard from '../components/LinkCard';

class Home extends Component {

  render() {
    return (
      <div className="site-home">
        <Navigation />
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <JumperCard />
            </div>
            <div className="col-lg-6">
              <Posts />
            </div>
            <div className="col">
              <LinkCard links={[{ name: "Github", link: "https://github.com/pb-coding"}]} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  
}
export default Home;

