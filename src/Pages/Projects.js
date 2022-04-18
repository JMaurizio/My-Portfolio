import { useState } from "react";
import Cards from "../Components/Cards";
import programmer from "../assets/images/programmer-dashboard.png";
import chattleship from "../assets/images/chattleship-board-crop.png";
import catro from "../assets/images/catro-logo.png";

function Projects() {
    const [projectInfo] = useState([
        {
            name: 'Catro Gaming',
            github: 'https://github.com/JoelKovalcson/Catro-Gaming',
            image: catro,
            url: 'https://catro-gaming.herokuapp.com/',
            description: 'A retro style arcade with single and multiplayer games(more soon to come).',
            id: 'catro'
        },
        {
            name: 'Chattleship',
            github: 'https://github.com/JoelKovalcson/ChattleShip',
            image: chattleship,
            url: 'https://chattleship.herokuapp.com/',
            description: 'A Battleship like game with real time chat functionality.',
            id: 'chattleship'
        },
        {
            name: 'Programmer Dashboard',
            github: 'https://github.com/JoelKovalcson/Programmer-Dashboard',
            image: programmer,
            url: 'https://joelkovalcson.github.io/Programmer-Dashboard/',
            description: 'A webpage where programmers can view their github feed and hacker news.',
            id: 'programmer'
        },
    ]);

    const project = [];
    for(let i = 0; i < projectInfo.length; i++) {
        project.push(<Cards key={`Project-${i}`} project={projectInfo[i]}/>)
    }
    return(
        <div className="d-flex flex-wrap">
            {project}
        </div>
    )
};

export default Projects;