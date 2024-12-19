// app/projects/page.tsx
'use client'

import { useState } from 'react'

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('')
    const projects = [
        { title: 'Word Cloud Generator', description: 'Developed using Python and matplotlib.' },
        { title: 'Expense Tracker', description: 'Implemented data storage and retrieval functionalities using Python.' },
        { title: 'BMI Calculator', description: 'Implemented a BMI calculator application in Python.' },
        { title: 'Trivia Quiz', description: 'Developed a trivia quiz game using Python.' },
        { title: 'Weather Bot', description: 'Developed using Python and OpenWeatherMap API.' },
        { title: 'Portfolio Website', description: 'Created a portfolio website using HTML, CSS, and JavaScript.' } // Added new project
    ]

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="page-container">
            <div className="page-content">
                <div className="page-header">
                    <h1>Projects</h1>
                    <input
                        type="text"
                        placeholder="Search Projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="projects-list">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-item">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
