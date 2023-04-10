import axios from 'axios';

type Product = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

type GetProductsResponse = {
  data: Product[];
};

async function getProducts() {
  try {
    // 👇️ fetch products from an API
    const { data, status } = await axios.get<GetProductsResponse>(
      'https://api.noroff.dev/api/v1/online-shop',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    console.log(`response status is: ${status}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`error message: ${error.message}`);
      return error.message;
    } else {
      console.log(`unexpected error: ${error}`);
      return 'An unexpected error occurred';
    }
  }
}

getProducts();
