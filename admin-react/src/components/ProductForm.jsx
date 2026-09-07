import { addProduct, updateProduct } from "../services/api";





function ProductForm({
    productForm,
    setProductForm,
    editingProduct,
    onProductSaved
}) {



    const handleChange = (event) => {

        const { name, value } = event.target;

        setProductForm({

            ...productForm,

            [name]: value

        });

    };



    const handleSubmit = async (event) => {

    event.preventDefault();

    try {
if (
    !productForm.title.trim() ||
    !productForm.brand.trim() ||
    !productForm.category.trim() ||
    !productForm.price
) {
    alert("لطفاً همه فیلدها را تکمیل کنید.");
    return;
}

        if (editingProduct) {

    await updateProduct(editingProduct.id, productForm);

} else {

    await addProduct(productForm);

}


        await onProductSaved();

        setProductForm({

            title: "",
            brand: "",
            category: "",
            price: "",
            rating: "",
            image: ""

        });

    } catch (error) {

        console.error(error);

    }

};

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="title"
                placeholder="عنوان"
                value={productForm.title}
                onChange={handleChange}
            />

            <input
                type="text"
                name="brand"
                placeholder="برند"
                value={productForm.brand}
                onChange={handleChange}
            />

            <input
                type="text"
                name="category"
                placeholder="دسته بندی"
                value={productForm.category}
                onChange={handleChange}
            />

            <input
                type="number"
                name="price"
                placeholder="قیمت"
                value={productForm.price}
                onChange={handleChange}
            />

            <input
    type="number"
    name="rating"
    placeholder="امتیاز"
    value={productForm.rating}
    onChange={handleChange}
/>

<input
    type="text"
    name="image"
    placeholder="assets/images/products/product4.jpg"
    value={productForm.image}
    onChange={handleChange}
/>

            <button type="submit">

                ثبت محصول

            </button>

        </form>

    );

}

export default ProductForm;