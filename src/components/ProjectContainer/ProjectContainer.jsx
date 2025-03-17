import { useEffect, useState } from "react"
import "./ProjectContainer.css"
import networkManager from "../../scripts/networkManager";

export const ProjectContainer = ({experiments, onExperimentStateChange}) => {
    
    return (
        <div className="project-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {experiments.map(experiment => {
                        return <tr key={experiment.id}>
                            <td>{experiment.name}</td>
                            <td>{experiment.type}</td>
                            <td>{experiment.status}</td>
                            <td>
                                <button onClick={(e) => onExperimentStateChange(experiment, e.target.textContent === "start" ? "running" : "paused")}>{experiment.status === "running" ? "pause" : "start"}</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}