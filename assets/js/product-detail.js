const params = new URLSearchParams(window.location.search);

const productId = params.get("id");


async function loadProduct() {

    try {

        const response = await fetch(
            `http://localhost:3000/products/${productId}`
        );

        if (!response.ok) {
            throw new Error("محصول پیدا نشد");
        }

        const product = await response.json();

        loadRelatedProducts(product);

        


        document.getElementById("productTitle").innerText =
            product.title;


        document.getElementById("productImage").src =
            product.image;


        document.getElementById("productPrice").innerText =
            product.price.toLocaleString() + " تومان";


        document.getElementById("productRating").innerText =
            product.rating || "0";


        document.getElementById("breadcrumbProductTitle").innerText =
            product.title;


        document.getElementById("productCategory").innerText =
            product.category;


        // توضیحات

        document.getElementById("productDescription").innerText =
            product.description || "توضیحات محصول ثبت نشده است.";


        // ویژگی‌ها

        const featuresContainer =
            document.getElementById("productFeatures");


        featuresContainer.innerHTML = "";


        if (product.features) {

            product.features.forEach(feature => {

                const li = document.createElement("li");

                li.innerText = feature;

                featuresContainer.appendChild(li);

            });

        }


        // افزودن به سبد خرید

        const buyButton =
            document.getElementById("buyButton");


        buyButton.addEventListener("click", () => {

            addToCart(
                product.id,
                product.title,
                product.price,
                product.image
            );

        });


    } catch (error) {

        console.error(error);

    }

}


loadProduct();







async function loadRelatedProducts(product) {
    const container = document.querySelector(
        "#relatedProducts"
    );

    if (!container) return;

    try {
        const response = await fetch(
            "http://localhost:3000/products"
        );

        const products = await response.json();

        let related = products.filter(item =>
            item.id != product.id &&
            item.category === product.category
        );

        // اگر محصولات هم‌دسته کم بود
        if (related.length < 4) {
            const others = products.filter(item =>
                item.id != product.id &&
                !related.some(r => r.id === item.id)
            );

            related = [
                ...related,
                ...others
            ];
        }

        related = related.slice(0, 4);

        container.innerHTML = "";

        related.forEach(item => {
            container.innerHTML += `
                <div class="swiper-slide">
                    <a href="product.html?id=${item.id}"
                       class="text-decoration-none">

                        <div class="product-card">

                            <img
                                src="${item.image}"
                                alt="${item.title}"
                            >

                            <h3>
                                ${item.title}
                            </h3>

                            <div class="product-price">
                                <span class="new-price-card">
                                    ${item.price.toLocaleString()}
                                    تومان
                                </span>
                            </div>

                        </div>

                    </a>
                </div>
            `;
        });

        new Swiper(".relatedSwiper", {
            slidesPerView: 4,
            spaceBetween: 20,

            navigation: {
                nextEl: ".relatedSwiper .swiper-button-next",
                prevEl: ".relatedSwiper .swiper-button-prev"
            },

            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                }
            }
        });

    } catch (error) {
        console.error(
            "خطا در دریافت محصولات مرتبط:",
            error
        );
    }
}
