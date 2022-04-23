import { Card } from "react-bootstrap";

function Cards(props) {
    return(
        <Card className="card bg-transparent" id={props.project.id}>
            <Card.Img src={props.project.image} />
            <Card.Body className="card-body">
                <Card.Text className="card-title">{props.project.name}</Card.Text>
                <Card.Text>{props.project.description}</Card.Text>
                <Card.Link className="card-link" href={props.project.github}>Github</Card.Link>
                <Card.Link className="card-link" href={props.project.url}>Live Link</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default Cards;