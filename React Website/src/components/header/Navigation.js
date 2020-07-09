import React from 'react';
import '../../css/style.css';
import { NavLink} from 'react-router-dom'


class Navigation extends React.Component {
constructor(props){
    super(props);
    this.buttonclicked=this.buttonclicked.bind(this);
}
buttonclicked(){
    //  var mainNav = document.getElementById('js-menu');
    // var  navBarToggle = document.getElementById('js-navbar-toggle');
    
    // navBarToggle.addEventListener('click', function () {
        document.getElementById('js-menu').classList.toggle('active')
}
      render () {
    
        return ( <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
        <button className="togglebtn" onClick={this.buttonclicked} > <i class="fas fa-bars"></i></button>   
        </span>
        <h5><a href="#" className="logo">Sign Language <span>Translator</span></a></h5>
        <ul className="main-nav" id="js-menu">
            <li>
                <NavLink to="/" activeClassName="is-active" className="nav-links">Training</NavLink>
            </li>
            
            <li>
                <NavLink to="model" activeClassName="is-active" className="nav-links">Model & Voice</NavLink>
            </li>
            <li>
                <NavLink to="video-call" activeClassName="is-active" className="nav-links">VideoCall</NavLink>
            </li>
            <li>
                <NavLink to="about" activeClassName="is-active" className="nav-links">About</NavLink>
            </li>
            
        </ul>
    </nav>
     
        )
      }
    
}export default Navigation