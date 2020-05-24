import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import Roomscontainer from "../components/RoomsContainer"
import RoomsContainer from '../components/RoomsContainer';
export default function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
        <Banner title="All Rooms">
                    <Link to="/" className="btn-primary">Go back to Home</Link>
        </Banner>
        </Hero>
        <RoomsContainer />
    </>
    )
}
