import React from 'react'

import { Link } from 'react-router-dom';

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import SimpleButton from '../components/StyleHero'
require('react-dom');
window.React2 = require('react');
console.log('React versions are same'+window.React1 === window.React2);
export default function () {
    
    return (
        <div>
            <>
            <Hero hero="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="All rooms available under $299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>    
            </>
            <Services />
            <FeaturedRooms />
           <SimpleButton>Hello</SimpleButton>
        </div>
    )
}
