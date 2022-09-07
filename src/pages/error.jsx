import React from "react";

// Importing Components
import BackgroundManager from "../components/util/backgroundManager";
import DynamicError from "../components/util/DynamicError";

function ErrorPage() {

    return (

        <div className="error404_container">
            <BackgroundManager />
            <div className="errorCard_container error404">
                <div className="coloCont">
                    <DynamicError nameError={'La página a la que intentas entrar no está disponible!'} />
                </div>
            </div>
        </div>

    )

}

export default ErrorPage;