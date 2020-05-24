import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'
//Hooks 3rd method after 1 consumer, 2 high order function
//to use context

//get all unique values
const getUnique = (items,value) =>{
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    //console.log(context)
    const{
        handleChange,type,capacity,price,
        minPrice,maxPrice,minSize,maxSize,
        breakFast, pets } = context
        //get Unique types
        let types = getUnique(rooms,'type');
        let capacitys = getUnique(rooms,'capacity');
        //add all
        types = ['all',...types]
        //map to jsx
        types = types.map((item,index) => {
            return <option value={item} key={index}>{item}</option>
        })
        capacitys = capacitys.map((item,index) => {
            return <option value={item} key={index}>{item}</option>
        })
    return (
        <section className="filter-container">
            <Title title="search rooms"></Title>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end  select type */}
                 {/* select type */}
                 <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                        {capacitys}
                    </select>
                </div>
                {/* end  guests */}
                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice}
                        max={maxPrice} id="price" value={price} onChange={handleChange}
                            className="form-control"/>
                </div>
                {/*end  Room Price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                        value={minSize} onChange={handleChange} />
                        <input type="number" name="maxSize" id="size"
                        value={maxSize} onChange={handleChange} />
                    </div>
                </div>
                {/* end size */}
                {/**extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakFast" id="breakFast"
                            defaultChecked={breakFast} onChange={handleChange}/>
                        <label htmlFor="BreakFast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                            defaultChecked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>       
                </div>
               
                 {/*end extras */}

            </form>
    </section>
    )
}
