import React from "react";
import { ReactComponent as CloudLogo } from '../../assets/svg/VectorCloud.svg';
import { Link } from 'react-router-dom'

function NavigationBar() {

    return (
        <nav>
            <div className="nav_logo">
                <CloudLogo />
                <h3>El tiempo</h3>
            </div>
            <Link to={'/'}>Inicio</Link>
        </nav>
    )

}

export default NavigationBar;