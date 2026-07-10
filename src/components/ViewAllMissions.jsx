import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAllMissions = () => {

    const [data, changeData] = useState([])
    const fetchMissionData = () =>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/mission.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
      ()=>{
        fetchMissionData()
      }  
    )
  return (
    <div
      style={{
        backgroundColor: "#F4F7F2",
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <div className="container py-5">

        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "#2B5748" }}
        >
          All Space Missions
        </h2>

        <div className="row g-4">

          {data.map((value, index) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-4"
                key={index}
              >
                <div className="card h-100 shadow border-0 rounded-4">

                  <img
                    src={value.image}
                    className="card-img-top"
                    alt="Mission"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  />

                  <div className="card-body">

                    <h4
                      className="fw-bold text-center mb-3"
                      style={{ color: "#2B5748" }}
                    >
                      {value.missionName}
                    </h4>

                    <p className="card-text">
                      <strong>Agency :</strong> {value.agency}
                      <br />
                      <strong>Destination :</strong> {value.destination}
                      <br />
                      <strong>Launch Year :</strong> {value.launchYear}
                      <br />
                      <strong>Budget :</strong> ₹ {value.budget} Crores
                      <br />
                      <strong>Status :</strong> {value.status}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default ViewAllMissions;