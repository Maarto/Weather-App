import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Latitude } from '../../assets/svg/VectorLatitude.svg'
import { ReactComponent as Longitude } from '../../assets/svg/VectorLongitude.svg'





function HomeForm() {

    let navigate = useNavigate();

    function SubmitForm(e, latitude, longitude) {
        // e.preventDeafult();
        // console.log(e)
        navigate(`search/${longitude}/${latitude}`)
    }

    let [longitude, setLongitude] = useState(null)
    let [latitude, setLatitude] = useState(null)

    return (
        <form onSubmit={((e) => {
            SubmitForm(e, latitude, longitude);
        })}>
            <h1>Ingrese los datos de su localidad</h1>
            <div className="form_inputs">
                <div className="inputCont">
                    <Longitude />
                    <input type={'number'} required={true} placeholder={"Longitud"} onChange={((e) => { setLongitude(e.target.value) })} step={"any"}/>
                </div>
                <div className="inputCont">
                    <Latitude />
                    <input type={'number'} required={true} placeholder={"Latitud"} onChange={((e) => { setLatitude(e.target.value) })} step={"any"}/>
                </div>
            </div>
            <button onSubmit={((e) => {
                SubmitForm(e, latitude, longitude)
            })}>Buscar</button>
        </form>

    )
}


export default HomeForm;