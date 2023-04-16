import { useEffect, useState } from "react"
import axios from "axios"
import { ProductType } from "../utilities/types"
import { ProductCard } from "../components/ProductCard"
import { Col, Row } from "react-bootstrap"

export const Home = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiResponse = await axios
                .get('https://api.noroff.dev/api/v1/online-shop')
                const products: ProductType[] = apiResponse.data;
                setProducts(products)
            } catch (error) {
                console.log(error)
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
        <h1>Look at all the cool products 😻 </h1>
        <Row  md={2} xs={1} xl={3} className="g-5">
            {products.map(product => (
                <Col key={product.id}>
                    <ProductCard product={product} />
                </Col>
        ))}
        </Row>
        </>
    )
}

