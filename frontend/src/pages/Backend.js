import React, { Component } from 'react';
import JumperCard from '../components/JumperCard';
import LinkCard from '../components/LinkCard';
import ManageNavigation from '../components/ManageNavigation';
import ManagePosts from '../components/ManagePosts';
import Navigation from '../components/Navigation';

class Backend extends Component {

  render() {
    return (
      <div className="site-backend">
        <Navigation />
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <JumperCard />
            </div>
            <div className="col-lg-6">
              <ManageNavigation />
              <br/><br/>
              <ManagePosts />
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
export default Backend;

