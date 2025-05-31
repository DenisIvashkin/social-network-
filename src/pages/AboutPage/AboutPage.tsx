import React from 'react';
import Navbar from "@/pages/Navbar/Navbar";
import {Link} from "react-router-dom";
import './about.css'
import CatsSlider from "@/components/CatsSlider/CatsSlider";

const AboutPage = () => {



    return (
        <div>
            <Navbar/>
            <div className = 'about-wrapper'>

                <div className = 'about-sidebar-wrapper'>
                    <button type = 'submit' className = 'about_btn'>
                        <Link to='/news'>Go to news</Link>
                    </button>
                </div>

            </div>
            <CatsSlider/>
        </div>
    );
};

export default AboutPage;