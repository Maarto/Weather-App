import React from "react";
import HomeForm from "../components/home/homeForm";
import BackgroundManager from "../components/util/backgroundManager";

function HomePage() {
    return (
        <>
            <BackgroundManager />
            <div className="form_container">
                <HomeForm />
            </div>
        </>
    )
}

export default HomePage;