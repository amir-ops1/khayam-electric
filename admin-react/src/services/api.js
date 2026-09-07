export async function getProducts() {

    const response = await fetch("http://localhost:3000/products");

    const data = await response.json();

    return data;

}





export async function addProduct(product) {

    const response = await fetch("http://localhost:3000/products", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(product)

    });

    return await response.json();

}





export async function deleteProduct(id) {

    await fetch(`http://localhost:3000/products/${id}`, {

        method: "DELETE"

    });

}




export async function updateProduct(id, product) {

    const response = await fetch(`http://localhost:3000/products/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(product)

    });

    return await response.json();

}