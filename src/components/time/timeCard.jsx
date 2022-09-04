import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SpinnerLoad from "../spinner";
import axios from 'axios';

// Importing Component
import DynamicError from "../errorComponent";

// Importing SVG's
import { ReactComponent as TemperatureCelcius } from '../../assets/svg/temperature_celcius.svg';
import { ReactComponent as Humidity } from '../../assets/svg/humidity.svg';
import { ReactComponent as Clouds } from '../../assets/svg/akar_cloud.svg';
import { ReactComponent as Wind } from '../../assets/svg/WindSVG.svg';
import { ReactComponent as maxTemp } from '../../assets/svg/maxtemp.svg';
import { ReactComponent as minTemp } from '../../assets/svg/mintemp.svg';


function TimeCard({ setTypeweather }) {

    let [loading, setLoading] = useState(true)
    let [error, setError] = useState("")
    let [weather, setWeather] = useState(null)
    let [cardInfo, setCardInfo] = useState([])


    let { lat, lon } = useParams()

    let navigate = useNavigate()

    function handlNavigate(route) {
        navigate(route)
    }

    useEffect(() => {
        if (loading) {
            console.log('haciendo acción')
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ES&APPID=68310791186b882386508a6dbe33929a&units=metric`).then((res) => {

                setWeather(res.data)
                setTypeweather(res.data.weather[0].id)
                setCardInfo([
                    { id: 0, icon: TemperatureCelcius, data: `${res.data.main.temp}°` },
                    { id: 1, icon: Humidity, data: `${res.data.main.humidity} %` },
                    { id: 2, icon: Clouds, data: `${res.data.clouds.all} %` },
                    { id: 3, icon: Wind, data: `${res.data.wind.speed} m/s` },
                    { id: 4, icon: maxTemp, data: `${res.data.main.temp_max}°` },
                    { id: 5, icon: minTemp, data: `${res.data.main.temp_min}°` }
                ])
                setLoading(false)
            }).catch((e) => {

                console.log(e)

                let errorCases = {
                    "wrong latitude": "La Longitud o Latitud ingresada es inválida.",
                    "wrong longitude": "La Longitud o Latitud ingresada es inválida.",
                    "Internal error": "No hemos encontrado nada en esa dirección!",
                    "unexpected": "Error inesperado!"
                }

                setError(errorCases[e.response.data.message])
                setLoading(false)
            })
        }
    })


    return (
        <div className="time_card">
            {
                loading ?
                    // Si se encuentra en estado de carga se muestra el Spinner de carga.
                    <div className="spinnerLoading">
                        <SpinnerLoad />
                        <h1>Cargando...</h1>
                    </div>
                    :
                    // Sinó renderiza la página.
                    <>
                        {
                            error.length > 0 ?
                                // Si hay un error devuelve formato de Error.
                                <div className="errorCard_container">

                                    <DynamicError nameError={error} />
                                </div>
                                :
                                // Si NO hay error renderiza la carta.
                                <div className="weatherCard_container">
                                    <div className="headerWeather">
                                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                                        <h1>{weather.name.length > 0 ? weather.name : `Lat: ${lat} | Lon: ${lon}`}</h1>
                                        <h3>{weather.weather[0].description}</h3>
                                        {
                                            console.log(weather)
                                        }
                                    </div>
                                    <div className="body_container">
                                        {

                                            cardInfo.map((items) => {
                                                return (
                                                    <div className="bodycontent" key={items.id}>
                                                        <items.icon />
                                                        <h3>{items.data}</h3>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                        }
                    </>
            }

        </div>
    )

}


export default TimeCard;