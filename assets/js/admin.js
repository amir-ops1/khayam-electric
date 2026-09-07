let currentPage = 1;
const ITEMS_PER_PAGE = 10;

const pagination =
    document.querySelector("#pagination");

const loader =
document.querySelector("#loader");

const toast = document.querySelector("#toast");



const table =
document.getElementById("productsTable");
const form =
document.getElementById("productForm");
let editingProductId = null;


const searchInput = document.querySelector("#searchInput");

const filterCategory =
    document.querySelector("#filterCategory");

const sortSelect  =
    document.querySelector("#sortProducts");


const titleInput =
document.getElementById("title");

const brandInput =
document.getElementById("brand");

const categoryInput =
document.getElementById("category");

const priceInput =
document.getElementById("price");

const ratingInput =
document.getElementById("rating");

const imageInput =
document.getElementById("image");







function getFormData(){

    return{

        title: titleInput.value,

        brand: brandInput.value,

        category: categoryInput.value,

        price: Number(priceInput.value),

        rating: Number(ratingInput.value),

        image: imageInput.value

    };

}


async function  fillForm(product){

    titleInput.value = product.title;

    categoryInput.value = product.category;

    await updateBrandOptions(product.category);

    brandInput.value = product.brand;

    priceInput.value = product.price;

    ratingInput.value = product.rating;

    imageInput.value = product.image;

}





form.addEventListener("submit", async function(event){

    event.preventDefault();

const newProduct = getFormData();

if(
    !newProduct.title ||
    !newProduct.brand ||
    !newProduct.category ||
    !newProduct.price ||
    !newProduct.rating ||
    !newProduct.image
){
    alert("لطفاً تمام فیلدها را تکمیل کنید.");

    return;
}

if(editingProductId){

    newProduct.id = Number(editingProductId);

    await updateProduct(

        editingProductId,

        newProduct

    );

    editingProductId = null;

}else{

    await addProduct(newProduct);

}

loadProducts();

form.reset();
});


function renderProducts(products){

    table.innerHTML = "";

    products.forEach(product => {

        table.innerHTML += `

        <tr>

            <td>

                <img
                    src="${product.image}"
                    width="60">

            </td>

            <td>

                ${product.title}

            </td>

            <td>

                ${product.price.toLocaleString()}

            </td>

            <td>

                ${product.brand}

            </td>

            <td>

                <button
    class="delete-btn"
    data-id="${product.id}">

    حذف

</button>

<button
    class="edit-btn"
    data-id="${product.id}">

    ویرایش

</button>

            </td>

        </tr>

        `;

    });

}

loadProducts();





document.addEventListener("click", async function(event){

    if(event.target.classList.contains("delete-btn")){

        const id = event.target.dataset.id;

        const confirmDelete = confirm(
    "آیا از حذف این محصول مطمئن هستید؟"
);

if(!confirmDelete){
    return;
}

        const deleted = await deleteProduct(id);

        if(deleted){

            loadProducts();

        }

    }


    if(event.target.classList.contains("edit-btn")){

const id = event.target.dataset.id;

const products = await getProducts();

const product =
    products.find(item => item.id == id);

editingProductId = id;

fillForm(product);

}



});

const filters = {

    category: "لامپ",

    brand: "پارس شهاب"

};

const params = new URLSearchParams(filters);

searchInput.addEventListener(
    "input",
    applyFilters
);







filterCategory.addEventListener(
    "change",
    applyFilters
);




async function loadProducts(filters = {}) {

const products =
    await getProducts();

const sortedProducts =
    sortProductList(
        products,
        sortSelect.value
    );

renderProducts(sortedProducts);

const pageCount = getPageCount(
    sortedProducts.length,
    ITEMS_PER_PAGE
);

renderPagination(pageCount);

const pageProducts =
    paginate(
        sortedProducts,
        currentPage,
        ITEMS_PER_PAGE
    );

renderProducts(pageProducts);


}





function getBrandsByCategory(products, category) {

    return [...new Set(

        products
            .filter(product => product.category === category)
            .map(product => product.brand)

    )];

}



categoryInput.addEventListener("change", async () => {

    const products = await getProducts();

    const brands = getBrandsByCategory(
        products,
        categoryInput.value
    );

    renderBrandOptions(brands);

});



async function updateBrandOptions(category) {

    const products = await getProducts();

    const brands = getBrandsByCategory(
        products,
        category
    );

    renderBrandOptions(brands);

}



function renderBrandOptions(brands) {

    brandInput.innerHTML = "";

    brands.forEach(brand => {

        brandInput.innerHTML += `
            <option value="${brand}">
                ${brand}
            </option>
        `;

    });

}





function getFilters() {

    return {

        title_like: searchInput.value.trim(),

        category: filterCategory.value,


    };

}





async function applyFilters() {

    const filters = getFilters();

    await loadProducts(filters);

}




sortSelect.addEventListener(
    "change",
    applyFilters
);




function sortProductList(products, sortType) {

    const sortedProducts = [...products];

    switch (sortType) {

        case "price-asc":

            sortedProducts.sort((a, b) => a.price - b.price);

            break;

        case "price-desc":

            sortedProducts.sort((a, b) => b.price - a.price);

            break;

        case "rating-desc":

            sortedProducts.sort((a, b) => b.rating - a.rating);
        
            break;

    }

    return sortedProducts;

}








function getPageCount(totalItems, itemsPerPage) {

    return Math.ceil(
        totalItems / itemsPerPage
    );

}



function paginate(products, currentPage, itemsPerPage){

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const endIndex =
        startIndex + itemsPerPage;

    return products.slice(
        startIndex,
        endIndex
    );

}



function renderPagination(pageCount) {

    pagination.innerHTML = "";

    for (let page = 1; page <= pageCount; page++) {

        const button = document.createElement("button");

        button.textContent = page;

        if (page === currentPage) {

    button.classList.add("active");

}

        button.addEventListener("click", () => {

    currentPage = page;

    loadProducts();

});

        pagination.append(button);

    }

}





function showLoader(){

    loader.classList.remove("hidden");

}

function hideLoader(){

    loader.classList.add("hidden");

}

