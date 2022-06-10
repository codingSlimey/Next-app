import React from "react";

export default function JobCard(props) {
    return (
        <section className="card--sect">

            <div className="card--box1">
                <img src={props.logo} className="card--img"/>
                <div className="box1--inner">
                    <h6>{props.company}</h6>
                    <span>{props.country}.</span>
                </div>
            </div>

            <div className="card--box2">
                <h3>{props.title}</h3>
                <span>{props.type}</span>
            </div>

            <div className="card--box3">
                <p>{props.description}</p>
            </div>

            <div className="card--box4">
                <p>${props.salary}/<small>month</small></p>

                <a href="#">Apply Now</a>
            </div>
            
        </section>
    )
}