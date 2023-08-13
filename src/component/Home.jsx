import React from 'react'
import Products from './Products'
// import { NavLink } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <div className="hero">
                <div className="card bg-dark text-white border-0">
                    <img src="./assets/bg.webp" className="card-img" alt="Bgr-img" height="850px" />
                    <div className="card-img-overlay d-flex align-items-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder b-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
                <Products/>
            </div>
        </div>
    )
}
