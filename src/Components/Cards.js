import { Card } from "react-bootstrap";

function Cards(props) {
    return(
        <Card className="card bg-dark" id={props.project.id}>
            <Card.Img variant="top" src={props.project.image} />
            <Card.Body className="card-body">
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
                <Card.Link className="card-link" href={props.project.github}>Github</Card.Link>
                <Card.Link className="card-link" href={props.project.url}>Live Link</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default Cards;