import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../welcome/Footer";
import JobCard from "./JobCard";
import cardData from "../cardData";

export default function Jobs() {

    const card = cardData.map(item => {
        return <JobCard
                    key={item.id}
                    {...item}
                />
    })

    return (
        <section className="jobs--sect">
            <Navbar />

            <h1>Available jobs that match your profile</h1>
            {/* <div></div> */}

            <div className="card--cont">
                {card}
            </div>

            <button>Show More Jobs</button>

            <Footer />
        </section>
    )
}