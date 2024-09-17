import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'
import MastHead from './MastHead.jsx'
import About from './About.jsx'

export default function App() {

    return(
        <div className="fullScreen">
            <Nav />
            <MastHead />
            <About />
        </div>
    )
    }

