import React from "react";
import HomeForm from "../components/home/homeForm";
import BackgroundManager from "../components/backgrounds";

function HomePage(props) {
    return (
        <>
            <BackgroundManager/>
            <div className="form_container">
                <HomeForm />
            </div>
        </>
    )
}

export default HomePage;