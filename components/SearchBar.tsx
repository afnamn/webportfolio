'use client'

import { useState } from 'react'

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const [filteredProjects, setFilteredProjects] = useState([
        'Word Cloud Generator',
        'Expense Tracker',
        'BMI Calculator',
        'Trivia Quiz',
        'Weather Bot',
    ])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value.toLowerCase()
        setQuery(searchQuery)

        setFilteredProjects(
            [
                'Word Cloud Generator',
                'Expense Tracker',
                'BMI Calculator',
                'Trivia Quiz',
                'Weather Bot',
            ].filter(project => project.toLowerCase().includes(searchQuery))
        )
    }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                className="p-2 text-black"
                placeholder="Search projects..."
            />
            <ul>
                {filteredProjects.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
        </div>
    )
}
