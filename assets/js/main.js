console.log(JSON.parse(localStorage.getItem("cart")));

if(document.querySelector(".topBannerSwiper")){

    new Swiper(".topBannerSwiper", {

        direction: "vertical",

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }

    });

}





if(document.querySelector(".lightingSwiper")){

    new Swiper(".lightingSwiper", {

        slidesPerView: 2,

        spaceBetween: 20,

        breakpoints: {

            576: {
                slidesPerView: 3
            },

            768: {
                slidesPerView: 4
            },

            1200: {
                slidesPerView: 6
            }

        }

    });

}



if(document.querySelector(".electricSwiper")){

    new Swiper(".electricSwiper", {

        slidesPerView: 2,

        spaceBetween: 20,

        breakpoints: {

            576: {
                slidesPerView: 3
            },

            768: {
                slidesPerView: 5
            },

            1200: {
                slidesPerView: 7
            }

        }

    });

}

if(document.querySelector(".productSwiper")){

    new Swiper(".productSwiper", {

        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }

    });

}

const filterToggle = document.querySelector(".mobile-filter-toggle");

const filters = document.querySelector(".products-filter");

if(filterToggle && filters){

    filterToggle.addEventListener("click", () => {

        filters.classList.toggle("show");

    });

}











const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        document
            .querySelectorAll(".tab-btn")
            .forEach(b => b.classList.remove("active"));

        document
            .querySelectorAll(".tab-content")
            .forEach(tab => tab.classList.remove("active"));

        btn.classList.add("active");

        document
            .getElementById(btn.dataset.tab)
            .classList.add("active");

    });

});



new Swiper(".relatedSwiper", {

    slidesPerView: 2,

    spaceBetween: 15,

    breakpoints: {

        576: {
            slidesPerView: 2
        },

        768: {
            slidesPerView: 3
        },

        1200: {
            slidesPerView: 4
        }

    }

});



///نمایش سبد خرید

function renderCart() {
     

    const container = document.querySelector(".cart-items");

    if (!container) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        container.innerHTML += `
        
        <div class="cart-item">

            <h3>${item.title}</h3>

            <p>
                قیمت:
                ${item.price.toLocaleString()}
                تومان
            </p>

            <p>
                تعداد:
                ${item.qty}
            </p>

            <button onclick="removeItem(${index})">
                حذف
            </button>

        </div>

        `;
    });

    document.querySelector(".total-price").innerText =
        total.toLocaleString();
}

///کم و زیاد کردن تعداد

function changeQty(id, value){

    let item = cart.find(p => p.id === id);

    if(item){
        item.qty += value;

        if(item.qty <= 0){
            cart = cart.filter(p => p.id !== id);
        }
    }

    renderCart();
}

///حذف محصول

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

}
renderCart();

if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".electricSwiper")
) 

if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".productSwiper")
) {

    new Swiper(".productSwiper", {
        loop: true
    });

}



///سبدخرید

let cart = [];

function addToCart(id, title, price, image){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let existing =
        cart.find(item => item.id === id);

    if(existing){

        existing.qty++;

    }else{

        cart.push({

            id,
            title,
            price,
            image,
            qty:1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
updateCartCount();
}



function updateCartCount(){

    const badge =
        document.querySelector(".cart-count");

    if(!badge) return;

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let total = 0;

    cart.forEach(item => {

        total += item.qty;

    });

    badge.innerText = total;

}

updateCartCount();