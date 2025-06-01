import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import {Link} from "react-router-dom";
import './about.css'
import CatsSlider from "@/components/CatsSlider/CatsSlider";

const AboutPage = () => {



    return (
        <div>
            <Navbar/>
            <div className = 'about-wrapper'>
                <div className = 'cats-slider'>
                    <CatsSlider/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;