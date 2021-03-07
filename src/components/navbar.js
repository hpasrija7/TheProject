import React from "react"
import "./navbar.css"

function Navbar() {
    return (
        <div class="mynavbar">
            <a href="#home">Get in Touch</a>
            <div class="subnav">
            <button class="subnavbtn">More <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <a href="#">Blog</a>
                <a href="#team">Community</a>
                
            </div>
            </div> 
            <a href="#">Shop</a>
            <a href="#">Invest</a>
            <a href="#contact">FAQ</a>
            <a href="#">About</a>
            <a href="#">Home</a>
        </div>
    )
};

export default Navbar;