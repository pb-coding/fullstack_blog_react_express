import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Backend from './pages/Backend';
import Test from './pages/Test';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/backend' element={<Backend />}></Route>
      <Route exact path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default Main;