import { useState } from "react";

import Head from "next/head";
import Link from "next/link"

export default function Index() {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("about");
    
    return (
        <>
            <Head>
                <title>Steph's portfolio</title>
                <meta name="description" content="Welcome to my portfolio!"/>
            </Head> 

            <div id="container">

                {/* Nav bar */}
                <div id="nav-bar" className="bg-white fixed top-0 left-0 w-full h-16 z-10 flex justify-end">
                    <Link href="/"><span>About</span></Link>
                    <Link href="/experiences"><span>Experiences</span></Link>
                    <Link href="/portfolio"><span>Portfolio</span></Link>
                </div>

                {/* Top section [picture + intro] */}
                <div className="h-56 mt-32 align-middle flex">
                    <img src="/sypic.jpeg"/>
                    <h1 className="leading-tight text-6xl font-semibold text-left justify-center mx-8">🌻 Hi! I'm Stephanie Yen.</h1>
                </div>

                {/* Tabs */}
                <div className="my-8">
                <button className={(tab === "about") ? "tab selected" : "tab"} onClick={() => setTab("about")}>About</button>
                <button className={(tab === "present") ? "tab selected" : "tab"} onClick={() => setTab("present")}>Present</button>
                <button className={(tab === "past") ? "tab selected" : "tab"} onClick={() => setTab("past")}>Past</button>
                </div>

                {/* Content under selected tabs */}
                {(tab === "about") ? (
                    // Personal summary
                    <>
                        <p>
                            <b>I am an undergraduate junior studying Computer Science + Urban Studies at Princeton University, from Cleveland, Ohio.</b> I am an aspiring software engineer, product manager, entrepreneur, venture capitalist, writer... who knows yet? — at the end of the day, I strive to make positive and nuanced impact.
                            <br></br> 
                            <br></br>
                            I am passionate about the development of wonderful, community-based public spaces — both physical and digital. 
                            I am interested in the future of <span id="detail">cities</span> (particularly in terms of transportation and housing), <span id="detail">entrepreneurship</span>, and <span id="detail">media</span>; 
                            and care about <span id="detail">art</span>, <span id="detail">nature</span>, and <span id="detail">service</span>.
                            <br></br>
                            <br></br>
                            In my free time, I love to watch films, find new music, and write. Currently loving Studio Ghibli, jazz, and memoirs (most recently, Michelle Zauner's).
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
                    </>
                ) : (tab === "present") ? (
                    <p>
                        Present
                    </p>
                ) : (
                    <p>
                        Past
                    </p>
                )}

                <hr />

                {/* Bottom section [picture + intro] */}
                <div className="h-56 flex">
                    <h2 className="leading-tight text-3xl font-medium text-left">Let's connect!</h2>
                </div>
                
            </div>

        </>
    );
}
