import { useParams } from "react-router-dom";

interface ProductDetails {
    id: string;
    title: string;
    price: number;
    discountedPrice: number;
    imageUrl: string;
    rating: number;
    tags: [
        string
      ];
    reviews: string;
}

const ProductDetails = () => {
    let params = useParams();
    console.log("params: ", params)
    console.log(params.id)
    return (
        <h1>Hello Product details : {params.id}</h1>

    )
}

export default ProductDetails;
