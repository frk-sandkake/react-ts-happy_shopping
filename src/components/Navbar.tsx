import { Container, Nav, Navbar as NavbarBs, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <>
        <NavbarBs className='mb-4 navbar-dark'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>
                       Home
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                       Contact
                    </Nav.Link>
                </Nav>
                <Button
                    style={{width: "3rem", height: "3rem", color:'#d7bda5'}}
                    variant='outline-light'
                    className="rounded-circle position-relative"
                >
                <svg
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    >
                    <g id="info"/>
                    <g id="icons">
                    <g id="cart">
                        <path d="M20,13H4c-0.7,0-1.1,0.6-1,1.2l1.4,6.2c0.2,0.9,1,1.6,2,1.6h11.1c1,0,1.8-0.7,2-1.6l1.4-6.2C21.1,13.6,20.6,13,20,13z     M11,18c0,0.5-0.4,1-1,1s-1-0.5-1-1v-2c0-0.5,0.4-1,1-1s1,0.5,1,1V18z M15,18c0,0.5-0.4,1-1,1s-1-0.5-1-1v-2c0-0.5,0.4-1,1-1    s1,0.5,1,1V18z"/><path d="M21,8h-2.2l-1.9-4.8c-0.4-1-1.6-1.5-2.6-1.1c-1,0.4-1.5,1.6-1.1,2.6L14.5,8H9.5l1.3-3.3c0.4-1-0.1-2.2-1.1-2.6    c-1-0.4-2.2,0.1-2.6,1.1L5.2,8H3c-1.1,0-2,0.9-2,2v1c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1v-1C23,8.9,22.1,8,21,8z"/>
                    </g>
                    </g>
                </svg>
                <div
                className="badge rounded-circle border border-dark badge-x position-absolute top-100 start-100 translate-middle py-2 fs-6"
                >2
                </div>
                </Button>
            </Container>
        </NavbarBs>
        </>
    )
}
