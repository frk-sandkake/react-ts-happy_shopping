import { useState } from "react"
import axios from "axios"
import { ProductCard } from "../components/ProductCard"
import { Col, Row } from "react-bootstrap"


export function Home() {
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios
        .get('https://api.noroff.dev/api/v1/online-shop')
        .then(apiResponse => {
            const products = apiResponse.data
            setProducts(products)
        })
    }
    return (
        <>
        <h1>Hi</h1>
        <p><button onClick={fetchProducts}>Fetch Products</button></p>
        <Row  md={2} xs={1} lg={3} className="g-3">{products.map((product) => (
            <Col key={product.id}><ProductCard {...product} /></Col>
        ))}
        </Row>
        </>
    )
}

