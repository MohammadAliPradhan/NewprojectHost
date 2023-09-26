import React, { useState } from "react"
import "./Global.css"

export default function () {
    const [button, setButton] = useState(null)
    return (
        <>
            <div className="center">
                <h1>Get Quality Website @ No Cost</h1>\
            </div>

            <div className="center">
                <h2 className="whatall">What and all things you will get</h2>
                <ul className="secSpace">
                    <li>This would be only React Made Website</li>
                    <li>2 Revisions</li>
                    <li>Permission to use the website for  business purpose, or personal purpose</li>
                    <li>No Hidden Cost</li>
                    <li>Basic SEO Included</li>
                </ul>

                <ul className="support">
                    <li>Phone Support: +91 6263370106</li>
                    <li>Email Support: mdsali914@gmail.com</li>
                </ul>

                <div className="buttonA">
                    <button>Mail Us</button>
                    <button>Contact Us</button>
                </div>
            </div>



        </>

    )
}