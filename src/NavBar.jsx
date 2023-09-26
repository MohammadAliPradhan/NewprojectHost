import React from "react";
import { useState } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/getsome">Get Into Web Page
            </Link>

            <Link to="/getsome"><p>Fruit</p> 
            </Link>
        </div>
    )
}