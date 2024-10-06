import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav.jsx'
import MastHead from './Components/MastHead.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import Copyright from './Components/Copyright.jsx'
import ProfileData from './Data/ProfileData.js'
import Portfolio from './Components/Portfolio.jsx'
import Contact from './Components/Contact.jsx'


export default function App() {

    
    
    return(

        <div className="fullscreen">
            <Nav 
                firstName={ProfileData.firstName}
                lastName={ProfileData.lastName}
                image={ProfileData.image}
            />
            <MastHead 
                firstName={ProfileData.firstName}
                lastName={ProfileData.lastName}
                title={ProfileData.title}
                slogan={ProfileData.slogan}
                image={ProfileData.image}
            />
            <About 
                firstName={ProfileData.firstName}
                lastName={ProfileData.lastName}
                title={ProfileData.title}
                image={ProfileData.image}
                
            />
            <Portfolio 
                image={ProfileData.image}
            />
            <Contact 
                image={ProfileData.image}
            />
            <Footer />
            <Copyright />
        </div>
    )
    }

