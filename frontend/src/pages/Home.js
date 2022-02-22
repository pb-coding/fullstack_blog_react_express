import React from 'react';
import JumperCard from '../components/JumperCard';
import Navigation from '../components/Navigation';
import Posts from '../components/Posts';
import LinkCard from '../components/LinkCard';

function Home(props) {

  return (
    <div className="site-home">
      <div className="container mt-4">
        <div className="row">
          <div className="col mt-2">
            <JumperCard postsData={props.postsData} />
          </div>
          <div className="col-lg-6 mt-2">
            <Posts postsData={props.postsData} />
          </div>
          <div className="col mt-2">
            <LinkCard links={[{ name: "Github", link: "https://github.com/pb-coding"}]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;