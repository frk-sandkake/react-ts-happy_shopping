import { Col, Row } from "react-bootstrap"
import storeItems from "../utilities/items.json"
import { ProductCard } from "../components/ProductCard"

export function Home() {
    return (
        <>
        <h1>Hi</h1>
        <Row  md={2} xs={1} lg={3} className="g-3">{storeItems.map((product) => (
            <Col key={product.id}><ProductCard {...product} /></Col>
        ))}
        </Row>
        </>
    )
}

