import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact"
import Projects from "../Pages/Projects"


function Header({page, setPage}) {
    return(
        <Navbar variant="dark" bg="dark">
            <Container className="d-flex flex-column">
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                    <NavDropdown
                    title="My Logo"
                    menuVariant="dark"
                    align="end"
                    >
                    <NavDropdown.Item onClick={() => setPage(<Home/>)} href="#Home">Home</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={() => setPage(<About/>)} href="#About">About</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={() => setPage(<Projects/>)} href="#Projects">Projects</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={() => setPage(<Contact/>)} href="#Contact">Contact</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;