import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../utilities/types";
import { ListGroup, Container } from "react-bootstrap";
import { ReviewCard } from "../components/ReviewCard";
import ProductDetails from "../components/ProductDetails";
import axios from "axios";

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    const [product, setProduct] = useState<Product>();
   const [isLoading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>('');

   useEffect(() => {
     const fetchProduct = async () => {
       setLoading(true);

       try {
         const response = await axios.get<Product>(`https://api.noroff.dev/api/v1/online-shop/${id}`);
         setProduct(response.data);
         console.log("DATA: ", response.data);
         setLoading(false);
       } catch (error) {
         setError(`Error fetching: ${error}`);
         setLoading(false);
       }
     };

     fetchProduct();
   }, []);

   if (isLoading) {
     return <div>Loading...</div>;
   }

   if (error) {
     return <div>{error}</div>;
   }

    return (
        <>
        {product && (
            <>
            <h1>{product.title}</h1>
            <Container className="w-100 d-flex flex-column align-items-center" >
            <ProductDetails product={product}/>
            <ListGroup className="mt-5 p-2 w-100 flush bg-transparent" style={{maxWidth:'740px'}}>
                <ListGroup.Item className="bg-transparent border-0">
                    <h2>Reviews:</h2>
                </ListGroup.Item>
                <ListGroup.Item className="w-100 bg-transparent border-0">
                {product.reviews.map((review) => (
                            <ReviewCard key={review} review={review} />
                        ))}
                </ListGroup.Item>
            </ListGroup>
            </Container>
            </>
        )}
        </>
    )
}
