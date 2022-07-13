import { useState } from "react";

import Project from "../components/Project";
import projects from "../data/projects"

export default function Portfolio() {
    const [search, setSearch] = useState("");

    // filter projects by title + description
    const filteredProjects = projects.filter(d => d.title.toLowerCase().includes(
        search.toLowerCase()) || d.description.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <div id="container">
                
                {/* <div className="projects-summary">
                    <p>Some apps I've built</p>
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                    {filteredProjects.map(d => (
                        <Project
                            title={d.title}
                            description={d.description}
                            tag={d.tag}
                        />
                    ))}
                </div> */}

            </div>
        </>
    );
}
