import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Data from './components/Data';
import './style.css';


export default function App()
{
    const experiences = Data.map((experience) => 
        <Experience 
        {...experience}
        
        />
    )
    return(
        <div>
            <Navbar />
            <section className = 'Experiences'>
            {experiences}
            </section>
            
            
        </div>
    )
}