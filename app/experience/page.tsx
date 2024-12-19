'use client'

import { useState } from 'react'

export default function Experience() {
    const [searchTerm, setSearchTerm] = useState('')

    const experiences = [
        { title: 'PEC - Information Assistant', description: 'Greeted voters and ensured smooth operations.' },
        { title: 'Ardene - Sales Associate', description: 'Assisted customers and kept the store organized.' },
        { title: 'NP - IT Support Assistant', description: 'Provided troubleshooting for staff equipment and software.' },
        { title: 'JC - Sales Associate', description: 'Processed sales and maintained store presentation.' },
        { title: 'SWR - Computer Literacy', description: 'Taught computer skills and tracked client progress.' },
        { title: 'NP - Tech Volunteer', description: 'Provided software setup and IT troubleshooting support.' }
    ]

    const filteredExperience = experiences.filter(experience =>
        experience.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="page-container">
            <div className="page-content">
                <div className="page-header">
                    <h1>Experience</h1>
                    <input
                        type="text"
                        placeholder="Search Experience..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="projects-list">
                    {filteredExperience.map((experience, index) => (
                        <div key={index} className="project-item">
                            <h3>{experience.title}</h3>
                            <p>{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
