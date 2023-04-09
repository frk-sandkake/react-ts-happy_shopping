/**
const API_URL = '<https://api.noroff.dev/api/v1/online-shop';
console.log(API_URL);

async function getProducts() {
    const response = await fetch('<https://api.noroff.dev/api/v1/online-shop', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    });
    console.log(response);
    const data = await response.json();
    console.log(data);
}

getProducts();
 */