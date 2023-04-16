import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        body: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOnSubmit = (
        event: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>
        ) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log(formData);
        }
        setValidated(true);
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleOnSubmit} style={{minWidth:'320px', maxWidth:'640px'}}>
                <Form.Group controlId="formFullName" className="mb-3">
                <FloatingLabel label='Full Name' controlId="floatingFullName">
                    <Form.Control
                    required
                    minLength={3}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter full name
                    </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                    <FloatingLabel label='Email' controlId="floatingEmail">
                    <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="email@address.io"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter valid email address
                    </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formSubject" className="mb-3">
                <FloatingLabel label='Subject' controlId="floatingSubject">
                    <Form.Control
                    required
                    minLength={3}
                    type="text"
                    name="subject"
                    placeholder="Message title"
                    value={formData.subject}
                    onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a title for your message
                    </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formBody" className="mb-3">
                <FloatingLabel label='Message' controlId="floatingTextarea">
                    <Form.Control
                    required
                    minLength={3}
                    as="textarea"
                    rows={3}
                    style={{height:'88px'}}
                    name="body"
                    placeholder="Write message here"
                    value={formData.body}
                    onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a message
                    </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" className="my-3 w-100" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}