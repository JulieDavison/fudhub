import React from "react";
import "./nav.css"


function Nav() {
    return (
        <div className="nahv">
        <nav className="navbar navbar-expand-lg navbar-light" style={{background: ' rgb(247, 247, 247)'}}>
        <a className="navbar-brand" className="logo1" href="/">fudhub</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{margin:'10px',margintop:'0px',marginbottom:'0px'}}>
            <li className="nav-item ">
              <a className="nav-link" href="/Profile" >Profile</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/Budget">Create New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" >Logout</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" >
            
          
        </form>
      </div>
        </nav>
        </div>
        
    );
  }
  
  export default Nav;
  