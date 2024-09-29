import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav.jsx'
import MastHead from './Components/MastHead.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import Copyright from './Components/Copyright.jsx'
import ProfileData from './Data/ProffileData.js'
import Portfolio from './Components/Portfolio.jsx'


export default function App() {

    
    
    return(

        <div className="fullscreen">
            <Nav 
                firstName={ProfileData.firstName}
                lastName={ProfileData.lastName}
            />
            <MastHead 
                firstName={ProfileData.firstName}
                lastName={ProfileData.lastName}
                title={ProfileData.title}
                slogan={ProfileData.slogan}
            />
            <About 
                firstName={ProfileData.firstName}
                lastName={ProfileData.lastName}
                title={ProfileData.title}
                
            />
            <Portfolio />
            <Footer />
            <Copyright />
        </div>
    )
    }

