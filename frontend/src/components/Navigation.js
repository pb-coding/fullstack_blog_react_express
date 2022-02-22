import React from 'react';
import logo from '../ressources/stt-poly.png'

function Navigation(props) {
  
  let navigationEntries = null
  if(props.pageData != null) {
    navigationEntries = props.pageData.pages.map((val, key) => {
      return (
        <li key={key} className="nav-item"><a itemProp="url" href={val.link} className="nav-link"><span itemProp="name">{val.page_name}</span></a></li>
      )
    })
  }
  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow bgcolor-navbarcolor">
      <div className="container-fluid">

          <a className="navbar-brand ms-3 color-fontcolor" href="/">
            <img src={logo} width="150px" height="auto" className="d-inline-block align-top" alt=""></img>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a itemProp="url" href="/" className="nav-link"><span itemProp="name">Home</span></a></li>
              {navigationEntries}
            </ul>
          
            <form className="d-flex my-2 searchform" role="search" method="get" id="searchform" action="/">
              <input className="form-control me-2" type="search" placeholder="Search blog posts" aria-label="Search" name="search" id="search"></input>
              <button id="searchsubmit" value="Search" className="btn btn-outline-success" type="submit">Search</button>
            </form>

          </div>
      
      </div>
    </nav>
  )  
}
export default Navigation;

