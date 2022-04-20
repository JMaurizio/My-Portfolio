import { Card } from "react-bootstrap";

function Cards(props) {
    return(
        <Card id={props.project.id}>
            <Card.Img variant="top" src={props.project.image} />
            <Card.Body>
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={props.project.github}>Github</Card.Link>
                <Card.Link href={props.project.url}>Live Link</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default Cards;