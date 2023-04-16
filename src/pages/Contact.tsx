import { Card, Container } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {

    return (
        <div>
            <h1>Contact Us</h1>
            <Container className="m-auto p-0 d-flex flex-column flex-md-row justify-content-sm-between justify-content-lg-around align-items-center">
            <Card className='h-100 m-3 px-1 py-3 bg-dark bg-opacity-10' style={{maxWidth:'360px'}}>
                <Card.Body>
                <Card.Title className="mb-3 fw-bold">We'd love to hear from you!</Card.Title>
                <Card.Text className="fs-5 fst-italic">
                    Tell us about your shopping experience with us,
                    or if you have any inputs or ideas on how to make it better.
                    Use the message form on this page, and we usually answer within 5 days.
                </Card.Text>
                <Card.Text className="my-3 text-end">
                    Best Wishes, Happy Shopping
                </Card.Text>
                </Card.Body>
            </Card>
            <div className="m-3">
                <h2 className="fs-4 pb-2 mb-4 border-bottom border-info border-2">
                    Our Contact Form:
                </h2>
                <ContactForm/>
                </div>
            </Container>
        </div>
    );
}
