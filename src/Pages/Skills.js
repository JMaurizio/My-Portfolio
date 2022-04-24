

function Skills() {
    return (
        <div id="skill-bubble-container" className="d-flex flex-column justify-content-center align-self-center text-white">
            <div className="d-flex justify-content-around">
                <div id="html-bubble">HTML</div>
                <div id="css-bubble">CSS</div>
                <div id="javascript-bubble">Javascript</div>
            </div>
            <div className="d-flex justify-content-center">    
                <div id="react-bubble">React</div>
            </div>
            <div className="d-flex justify-content-evenly">    
                <div id="node-bubble">Node.js</div>
                <div id="mongo-bubble">MongoDB</div>
                <div id="express-bubble">Express.js</div>
                <div id="mysql-bubble">MySQL</div>
            </div>
            <div className="d-flex justify-content-end">
                <div id="nosql-bubble">NoSQL</div>
            </div>
        </div>
    )
};

export default Skills;