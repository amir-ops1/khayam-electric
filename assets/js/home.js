const container = document.getElementById("productsContainer");

const searchInput = document.getElementById("searchInput");

let allProducts = [];

function renderProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `
    

    <div class="col-12 col-md-4 col-xl-3">


            <div class="product-card">


        <a href="product.html?id=${product.id}"
           class="product-link">

                <img
                    src="${product.image}"
                    class="product-image"ّ
                    alt="${product.title}">

                <h3 class="product-title">

                    ${product.title}

                </h3>

                <div class="product-rating">

                    <i class="fa-solid fa-star"></i>

                    <span>${product.rating}</span>

                </div>

                <div class="new-price">

                    ${product.price.toLocaleString()}
                    تومان

                </div>
</a>

        <button
            class="add-cart-btn"

            onclick="addToCart(
                ${product.id},
                '${product.title}',
                ${product.price},
                '${product.image}'
            )">

            افزودن به سبد خرید

        </button>
            </div>

        



    </div>

    </div>

    `;
  });
}

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText),
  );

  renderProducts(filteredProducts);
});

async function loadProducts() {
  if (!container) return;

  allProducts = await getProducts();

  renderProducts(allProducts);
}
loadProducts();

const newProduct = {
  title: "لامپ تست API",

  category: "لامپ",

  brand: "تست",

  price: 999999,

  image: "assets/images/products/product1.jpg",

  rating: 5,
};

// فقط یک بار اجرا کن
// addProduct(newProduct);

// فقط برای تست
// deleteProduct("3sjr5YotCOk");
