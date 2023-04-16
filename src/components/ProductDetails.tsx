import { Product } from "../utilities/types";
import { Card, Button, Col, Row, Container } from "react-bootstrap";


const ProductDetails = ({ product }:
  {product: Product}) => {
  return (
    <Container className="w-100 d-flex flex-column align-items-center" >
        <Card key={product.id} className='h-100' style={{maxWidth:'740px'}}>
          <Row className="row-cols-1 row-cols-md-2 g-0">
            <Col className="">
        <Card.Img src={product.imageUrl} variant="top" alt={product.title} height="300px" style={{ objectFit: "cover"}} />
        </Col>
        <Col className="">
        <Card.Body className="h-100 p-4 d-flex flex-column justify-content-between">
          <Card.Title className="fs-2 fw-semibold">{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          {product.discountedPrice !== product.price ? (
            <div className="d-flex flex-column align-items-end g-2 m-2">
              <span className="text-muted text-decoration-line-through">Old price {product.price} kr</span>{' '}
              <span className="text-danger fs-4 fw-bold">Sale {product.discountedPrice} kr</span>
            </div>
          ) : (
            <div className="fs-4 fw-bold">{product.price} kr</div>
          )}
          <Button>Add to cart</Button>
          </Card.Body>
          </Col>
          </Row>
          <Card.Footer className='d-flex align-items-center justify-content-between'>
                <small className="fw-bold py-2">Rating: {product.rating} </small>
                <div>
                    {product.tags.map((tag) => (
                        <Button key={tag} variant="link" className="p-2">
                        #{tag}
                        </Button>
                    ))}
                </div>
            </Card.Footer>
        </Card>
    </Container>
  );
};

export default ProductDetails;
