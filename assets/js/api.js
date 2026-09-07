const BASE_URL = "http://localhost:3000";

async function getProducts() {

    const response = await fetch(`${BASE_URL}/products`);

    const data = await response.json();

    return data;

}

async function searchProducts(filters = {}) {

    const params = new URLSearchParams(filters);

    const response = await fetch(
        `${BASE_URL}/products?${params}`
    );

    return await response.json();

}




async function addProduct(product){

    const response = await fetch(
        "http://localhost:3000/products",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)
        }
    );

    return await response.json();

}




async function deleteProduct(id){

    const response = await fetch(

        `http://localhost:3000/products/${id}`,

        {
            method: "DELETE"
        }

    );

    return response.ok;

}





async function updateProduct(id, product){

    const response = await fetch(

        `http://localhost:3000/products/${id}`,

        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)
        }

    );

    return await response.json();

}