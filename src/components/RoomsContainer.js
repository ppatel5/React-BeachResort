import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList.js'
import {withRoomConsumer} from '../context'
import Loading from'./Loading'

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading) {
        return <Loading />
        }
        return (
            <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>
            </>
        )
}

//wrapping consumer within component
//higher order component useful when you want to use
//room consumer all over page
export default withRoomConsumer(RoomsContainer)












// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList.js'
// import {RoomConsumer} from '../context'
// import Loading from'./Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) =>{
//                     const {loading,sortedRooms,rooms} = value
//                    if(loading){
//                        return <Loading />
//                    }
//                    return   <div>
//                     Hello from rooms container
//                     <RoomsFilter rooms={rooms} />
//                     <RoomsList rooms={sortedRooms}/>
//                 </div>
//                 }
//             }
//         </RoomConsumer>
      
//     )
// }
