import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <div className="project-name">Tommy - Web Tests</div>
                    <div className="project-type">Web</div>
                </li>
                <li>
                    <div className="project-name">Calvin Klein - Web Tests</div>
                    <div className="project-type">Web</div>
                </li>
                <li>
                    <div className="project-name">Unified - Full Stack</div>
                    <div className="project-type">Feature Experimentation</div>
                </li>
            </ul>
        </nav>
    )
}