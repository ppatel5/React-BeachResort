import React, { Component } from 'react'
import {RoomContext} from "../context"
import Title from "./Title"
import Room from "./Room"
import Loading from "./Loading"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading,featuredRooms} = this.context
        console.log(featuredRooms)
        featuredRooms = featuredRooms.map(room => {
            return <Room key={room.id} room= {room}/>
        })
        // 
        return (
            
            <section className="featured-rooms">
                <Title title="Featured Rooms"></Title>
                <div className="featured-rooms-center">
                {loading? <Loading />: featuredRooms}
                </div>
              

            </section>
         
        )
    }
}
