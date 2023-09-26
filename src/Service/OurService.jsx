import React from "react";
import ourServiceData from "./OurData"
import "./OurService.css"


export default function () {

    const service = ourServiceData.map((x) => {
        return (
            <div className="parentService">
                <div className="cardService">
                    <img src={x.image} alt="" className="cardImageSize" />
                    <div className="containerService">
                        <h4><b>John something</b></h4>
                        <p>Architect</p>
                    </div>
                </div>

            </div>
        )
    })
    return (
        <div className="parentService">{service}</div>
    )
}
