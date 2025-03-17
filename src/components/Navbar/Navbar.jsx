import "./Navbar.css";

export const Navbar = ({onProjectSelected, selectedProject}) => {

    const handleClick = (project) => {
        onProjectSelected(project);
    }

    return (
        <nav>
            <ul className="project-list">
                <li onClick={() => handleClick("th")} className={selectedProject === "th" ? "project-list-item selected" : "project-list-item"}>
                    <div className="project-name">Tommy - Web Tests</div>
                    <div className="project-type">Web</div>
                </li>
                <li onClick={() => handleClick("ck")} className={selectedProject === "ck"? "project-list-item selected" : "project-list-item"}>
                    <div className="project-name">Calvin Klein - Web Tests</div>
                    <div className="project-type">Web</div>
                </li>
                <li onClick={() => handleClick("fe")} className={selectedProject === "fe" ? "project-list-item selected" : "project-list-item"}>
                    <div className="project-name">Unified - Full Stack</div>
                    <div className="project-type">Feature Experimentation</div>
                </li>
            </ul>
        </nav>
    )
}