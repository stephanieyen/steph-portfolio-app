import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Steph's portfolio</title>
                <meta name="description" content="Welcome to my portfolio!"/>
            </Head> 

            <div id="container">
                <div id="nav-bar">
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Projects</span>
                </div>

                <div id="top-section">
                    <img src="/sypic.jpeg" id="sypic"/>
                    <h1>Hi!<br/>I'm Stephanie.</h1>
                </div>

                {/* <a href="/about.tsx">About</a> */}

                <p>
                    <b>I am an undergraduate at Princeton University, from Cleveland, Ohio.</b> I am an aspiring software engineer, product manager, entrepreneur, venture capitalist, writer... who knows yet? — at the end of the day, I strive to make positive and nuanced impact.
                </p>
                <p>
                    I am passionate about the development of wonderful, community-based public spaces — both physical and digital. 
                    I am interested in the future of <span id="detail">cities</span> (particularly in terms of transportation and housing), <span id="detail">entrepreneurship</span>, and <span id="detail">media</span>; 
                    and care about <span id="detail">art</span>, <span id="detail">nature</span>, and <span id="detail">service</span>.
                </p>
                <hr />
                <p>Some apps I've built</p>
                <div className="project-box">
                </div>
            </div>
        </>
    );
}
