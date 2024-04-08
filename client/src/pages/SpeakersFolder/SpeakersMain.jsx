import React, { useState, useEffect } from "react";
import "./speakers.css";
import SpeakerCard from "./SpeakerCard";
// import SpeakerData from "./SpeakerData"
import Axios from "axios";
import Footer from "../../components/Footer/Footer";

export default function SpeakersMain() {
    // let speakerData = [];
    const [speakerData, setSpeakerData] = useState([]);

    

  Axios.get("http://localhost:2500/api/speakers").then((response) => {
    // console.log(response);
    response.data.forEach(element => {
        // speakerData.push(element);
        setSpeakerData(speakerData => [...speakerData, element])
    });

  });

  // console.log(speakerData);
  return (
    <>
      {" "}
      <section className="speakers">
        <h1 className="text-center">Our Past Speakers</h1>
        <div className="big-wrapper ">
          <div className="wrapper ">
            <div className="speaker-container">
              <div className="row">
                {speakerData.map((e) => (
                  <SpeakerCard data={e} key={e._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}