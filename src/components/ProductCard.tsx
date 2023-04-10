import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type ProductCardProps = {
    id: string
    title: string
    price: number
    imageUrl: string
}

export function ProductCard({ id, title, price, imageUrl } :
ProductCardProps ) {
    return (
        <Card  key={id}>
            <Card.Img variant='top' src={imageUrl} height='200px' style={{ objectFit: "cover"}}/>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between align-items-baseline'>
                    <span className='fs-3'>{title} </span>
                    <span className='ms-2 text-muted'>{price}</span>
                </Card.Title>
                <Link to={`/productdetails/${id}`}><Button variant='primary'>View Product</Button></Link>
            </Card.Body>
        </Card>
    )
}
