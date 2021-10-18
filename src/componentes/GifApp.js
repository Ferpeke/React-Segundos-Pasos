import React from "react";
import ReactDOM from "react-dom";
import { GridCard } from "./GridCard";

export const GifApp = () => {
    return (
        <>
            <div className = "container">
                <div className = "row">
                    <div className = "col-12">
                        <GridCard />
                    </div>
                </div>
            </div> 

        </>
    )
}