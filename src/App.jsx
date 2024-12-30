import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';

function App() {

    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer/>

        </>
    )
}

export default App
