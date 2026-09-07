import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import { useState, useEffect } from "react";

import {
    getProducts,
    deleteProduct
} from "./services/api";


function App() {

    const [products, setProducts] = useState([]);

    const [editingProduct, setEditingProduct] = useState(null);

    const [productForm, setProductForm] = useState({

        title: "",
        brand: "",
        category: "",
        price: "",
        rating: "",
        image: ""

    });


    async function loadProducts() {

        const data = await getProducts();

        setProducts(data);

    }


    async function handleDelete(id) {

        await deleteProduct(id);

        await loadProducts();

    }


    function handleEdit(product) {

        setEditingProduct(product);

        setProductForm({

            title: product.title,
            brand: product.brand,
            category: product.category,
            price: product.price,
            rating: product.rating,
            image: product.image

        });

    }


    async function handleProductSaved() {

        await loadProducts();

        setEditingProduct(null);

        setProductForm({

            title: "",
            brand: "",
            category: "",
            price: "",
            rating: "",
            image: ""

        });

    }


    useEffect(() => {

        loadProducts();

    }, []);


return (

    <div className="admin-layout" dir="rtl">

        <Sidebar />

        <main className="main-content">

            <Header />

            <ProductForm
                productForm={productForm}
                setProductForm={setProductForm}
                editingProduct={editingProduct}
                onProductSaved={handleProductSaved}
            />

            <ProductTable
                products={products}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />

        </main>

    </div>

);

}


export default App;