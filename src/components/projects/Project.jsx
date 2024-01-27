import React from 'react'
import './Project.css'
import { projects } from '../../data'
export default function Project() {
    return (
        <div className="project_com">
            <div className="project_wrapper">
                <h3>Projects</h3>
                <div className="projects">
                    {projects.map((item) => {
                        return <>
                            <a href={item.link} target="_blanck"><div className="project">
                                <img src={item.pImage} alt="" />
                                <h4>{item.name}</h4>
                            </div></a>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}
