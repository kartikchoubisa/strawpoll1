import React from "react"
import "./Dashboard.css"

function Dashboard({ proposalNumber, expiresIn }) {
    return (
        <div className="dashboardContainer">
            <div className="totalProposals">Total Proposals  -  {proposalNumber} </div>
            <div className="expiresIn">Expires in - { expiresIn}</div>
        </div>
    )
}

export default Dashboard
