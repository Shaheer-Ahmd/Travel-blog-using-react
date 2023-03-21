import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
export default function Navbar()
{
    return(
        <div className = 'navbar'>
            <img src = 'images/navbar--icon.jpg' alt = 'logo' />
            <h1>Travel Blog</h1>
        </div>
    )
}