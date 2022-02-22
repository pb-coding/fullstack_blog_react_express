import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Backend from './pages/Backend';
import { fetchFromAPI } from './api';


function App() {
  const [pageData, setPageData] = useState({ pages: [] });
  const [postsData, setPostsData] = useState({ posts: [] });


  useEffect(() => {
    
    fetchFromAPI(setPageData, "/api/pages/get", "pages")
    fetchFromAPI(setPostsData, "/api/posts/get", "posts")
    
  }, []);



  return (
    <div className="layout">
      <Navigation pageData={pageData} />
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home postsData={postsData} />}></Route>
        <Route exact path='/backend' element={<Backend />}></Route>
      </Routes>
    </div>
  )

}

export default App;