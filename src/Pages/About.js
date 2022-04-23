import { Image } from "react-bootstrap";
import portrait from "../assets/images/joshua-maurizio-portrait.jpg"

function About() {
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            <Image id="about-portrait" src={portrait}/>
            <p id="about-text">
                Hello! I'm Joshua Maurizio, a web developer in Nashville, Tennessee. 
                I live with my beautiful wife Brittany and our rescue dog Antonio in our home we've been fixing up on the outskirts of Nashville. 
                Web development has always been an interest of mine, and now I'm pursuing it as a full-time career. 
                I've been drawn to web development because I enjoy problem solving, and constantly learning new languages and ideas as new technology unfolds. 
                When I'm not at the computer, I enjoy hiking, fishing, and trying out new bbq recipes with friends.
            </p>
        </div>
    )
};

export default About;