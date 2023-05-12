import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";



function Navigation(){
        return(
            <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Gallery" element={<Gallery/>}></Route>

            </Routes>
            </>
        )
    }

export default Navigation