import "./Navbar.css";

export const Navbar = ({onProjectSelected}) => {

    const handleClick = (project) => {
        onProjectSelected(project);
    }

    return (
        <nav>
            <ul>
                <li onClick={() => handleClick("th")}>
                    <div className="project-name">Tommy - Web Tests</div>
                    <div className="project-type">Web</div>
                </li>
                <li onClick={() => handleClick("ck")}>
                    <div className="project-name">Calvin Klein - Web Tests</div>
                    <div className="project-type">Web</div>
                </li>
                <li onClick={() => handleClick("fe")}>
                    <div className="project-name">Unified - Full Stack</div>
                    <div className="project-type">Feature Experimentation</div>
                </li>
            </ul>
        </nav>
    )
}