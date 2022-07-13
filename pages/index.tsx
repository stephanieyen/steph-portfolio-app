import { useState } from "react";

import Head from "next/head";
import Link from "next/link"

import Project from "../components/Project";
import projects from "../data/projects"

export default function Index() {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("about");
    const [search, setSearch] = useState("");

    // filter projects by title + description
    const filteredProjects = projects.filter(d => d.title.toLowerCase().includes(
        search.toLowerCase()) || d.description.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <Head>
                <title>Steph's portfolio</title>
                <meta name="description" content="Welcome to my portfolio!"/>
            </Head> 

            <div id="container">

                <div id="nav-bar" className="bg-white">
                    <Link href="/about"><span>About</span></Link>
                    
                    <span>Portfolio</span>
                    <span>Projects</span>
                </div>

                <div id="top-section">
                    <img src="/sypic.jpeg" id="sypic"/>
                    <h1 className="font-semibold">Hi!<br/>I'm Stephanie.</h1>
                </div>

                <button className={(tab === "about") ? "tab selected" : "tab"} onClick={() => setTab("about")}>About</button>
                <button className={(tab === "present") ? "tab selected" : "tab"} onClick={() => setTab("present")}>Present</button>
                <button className={(tab === "past") ? "tab selected" : "tab"} onClick={() => setTab("past")}>Past</button>
                {(tab === "about") ? (
                    <p>
                        About
                    </p>
                ) : (tab === "present") ? (
                    <p>
                        Present
                    </p>
                ) : (
                    <p>
                        Past
                    </p>
                )}

                <div id="personal-summary" className="leading-normal">
                    <p>
                        <b>I am an undergraduate at Princeton University, from Cleveland, Ohio.</b> I am an aspiring software engineer, product manager, entrepreneur, venture capitalist, writer... who knows yet? — at the end of the day, I strive to make positive and nuanced impact.
                    </p>
                    <p>
                        I am passionate about the development of wonderful, community-based public spaces — both physical and digital. 
                        I am interested in the future of <span id="detail">cities</span> (particularly in terms of transportation and housing), <span id="detail">entrepreneurship</span>, and <span id="detail">media</span>; 
                        and care about <span id="detail">art</span>, <span id="detail">nature</span>, and <span id="detail">service</span>.
                    </p>
                    
                    {/* the following evaluates based on whether open is True */}
                    <button onClick={() => setOpen(!open)}>
                        {open ? "Show less" : "Show more"}
                    </button>
                    {open && (
                        <>
                        <p>
                            More here...
                        </p>
                        </>
                    )}
                </div>

                <hr />

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
