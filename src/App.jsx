import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'
import MastHead from './MastHead.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Copyright from './Copyright.jsx'

export default function App() {

    return(
        <div className="fullScreen">
            <Nav />
            <MastHead />
            <About />
            <Footer />
            <Copyright />
        </div>
    )
    }

