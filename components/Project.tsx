export default function Project(props: {
    title: string,
    description: string, 
    tag: string,
}) {
    return ( 
        <>
            <div className="project-box">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="badge"><span>{props.tag}</span></div>
            </div>
        </>
    )
}