import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact"
import Projects from "../Pages/Projects"
import Skills from "../Pages/Skills";


function Header({page, setPage}) {
    const setHome = () => setPage(<Home/>);
    const setAbout = () => setPage(<About/>);
    const setProjects = () => setPage(<Projects/>);
    const setContact = () => setPage(<Contact/>);
    const setSkills = () => setPage(<Skills/>);
    function homeClick() {
        document.getElementById("nav-toggle").checked=false
        setHome();
    };
    function aboutClick() {
        document.getElementById("nav-toggle").checked=false
        setAbout();
    };
    function projectClick() {
        document.getElementById("nav-toggle").checked=false
        setProjects();
    };
    function contactClick() {
        document.getElementById("nav-toggle").checked=false
        setContact();
    };
    function skillClick() {
        document.getElementById("nav-toggle").checked=false
        setSkills();
    };
    
    return(
        <div className="nav">
            <input type="checkbox" className="nav-checkbox" id="nav-toggle"></input>
            <label for="nav-toggle" className="nav-button">
                <div className="nav-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </div>
            </label>
            <div className="nav-background"></div>

            <div className="nav-nav">
                <div className="nav-list">
                    <button className="nav-item"onClick={() => homeClick() } href="Home">Home</button>
                    <button className="nav-item"onClick={() => aboutClick()} href="About">About</button>
                    <button className="nav-item"onClick={() => skillClick()} href="Contact">Skills</button>
                    <button className="nav-item"onClick={() => projectClick()} href="Projects">Projects</button>
                    <button className="nav-item"onClick={() => contactClick()} href="Contact">Contact</button>   
                </div>
            </div>
        </div>
    )
};

export default Header;