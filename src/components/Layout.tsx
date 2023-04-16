
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";


export function Layout() {
    return (
        <div>
        <Header/>
        <Container className="mb-4">
        <Outlet/>
        </Container>
        <Footer/>
        </div>
    );
};
