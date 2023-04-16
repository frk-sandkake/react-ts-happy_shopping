import { Card, Button } from 'react-bootstrap'
import { Product } from "../utilities/types"
import { Link } from 'react-router-dom'


export const ProductCard = ({ product }: {
    product: Product;
}) => {
    return (
        <Card key={product.id} className='h-100'>
            <Card.Img variant='top' src={product.imageUrl} height='200px' style={{ objectFit: "cover"}}/>
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title className='fs-3 fw-semibold'>{product.title}</Card.Title>
                {product.discountedPrice !== product.price ? (
                    <div className="d-flex flex-column align-items-end g-2 m-2">
                    <span className="text-muted text-decoration-line-through">Old price {product.price} kr</span>{' '}
                    <span className="text-danger fs-4 fw-bold">Sale {product.discountedPrice} kr</span>
                    </div>
                ) : (
                    <div className="d-flex flex-column align-items-end g-2 m-2 fs-4 fw-bold">{product.price} kr</div>
                )}
                <Link to={`/products/${product.id}`} ><Button variant='primary' className='w-100'>View Product</Button></Link>
            </Card.Body>
            <Card.Footer className='d-flex align-items-center justify-content-between'>
                <small className="py-2">Rating: {product.rating} </small>
                <div>
                    {product.tags.map((tag) => (
                        <Button key={tag} variant="link" className="p-2">
                        #{tag}
                        </Button>
                    ))}
                </div>
            </Card.Footer>
        </Card>
    )
}
