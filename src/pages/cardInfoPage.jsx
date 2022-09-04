import React, { useState } from "react";
import BackgroundManager from "../components/backgrounds";
import TimeCard from '../components/time/timeCard';
import TimeForm from "../components/timeForm";



function CardPage() {

    let [typeWeather, setTypeweather] = useState(null)

    return (
        <>
            <BackgroundManager type={typeWeather} />
            <div className="timeCard_Container">
                <TimeForm />
                <TimeCard setTypeweather={setTypeweather} />
            </div>
        </>
    )

}


export default CardPage;