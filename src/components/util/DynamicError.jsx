import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as WarningCircle } from '../../assets/svg/warning-circle.svg';
function DynamicError({ nameError }) {

    let [error, setError] = useState("")

    let navigate = useNavigate()

    function handlNavigate() {
        navigate("/")
    }

    useEffect(() => {
        setError(nameError)
    }, [nameError])


    return (
        <>
            <WarningCircle />
            <h1>Oops! ha ocurrido un <span className="error_tit">error</span>!</h1>
            <h3>{error}</h3>
            <button onClick={(() => { handlNavigate('/') })}>Volver al inicio</button>
        </>
    )

}

export default DynamicError;