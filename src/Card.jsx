import react from "react"
import data from "./data"

export default function () {

    const card = data.map((card) => {
        return (<div className="parentCard">
            <div className="card">
                <img className="image-width" src={card.image} alt="" />
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect</p>
                </div>
            </div>
        </div>
        )
    })

    return (
        <>
            <div className="cardsImg">{card}</div>
        </>



    )
}