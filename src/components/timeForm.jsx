import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Search } from '../assets/svg/SearchSVG.svg'
import { ReactComponent as Latitude } from '../assets/svg/VectorLatitude.svg'
import { ReactComponent as Longitude } from '../assets/svg/VectorLongitude.svg'


function TimeForm() {

    let navigate = useNavigate()

    let [lon, setLon] = useState(null)
    let [lat, setLat] = useState(null)

    function handlNavigate() {
        navigate(`/search/${lon}/${lat}`)
    }


    return (
        <div className="timeForm_cont">
            <form onSubmit={() => handlNavigate()}>
                <div className="inputTimeCont">
                    <Longitude />
                    <input type="number" step={"any"} placeholder={"Longitud"} onChange={((e) => {setLon(e.target.value)})}/>
                </div>
                <div className="inputTimeCont">
                    <Latitude />
                    <input type="number" step={"any"} placeholder={"Latitud"} onChange={((e) => {setLat(e.target.value)})}/>
                </div>
                <button onSubmit={() => handlNavigate()}><Search /></button>
            </form>
        </div>
    )

}


export default TimeForm;