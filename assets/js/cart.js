

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

        <img src="${item.image}" class="cart-image">



    <div class="cart-info">

        <h3>${item.title}</h3>

        <p>
            قیمت:
            ${item.price.toLocaleString()}
            تومان
        </p>

<div class="qty-box">

    <button
        class="qty-btn"
        onclick="changeQty(${item.id}, -1)">
        -
    </button>

    <span class="qty-number">
        ${item.qty}
    </span>

    <button
        class="qty-btn"
        onclick="changeQty(${item.id}, 1)">
        +
    </button>

</div>

    </div>

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
) {

    new Swiper(".electricSwiper", {
        slidesPerView: 2,
        spaceBetween: 20
    });

}

if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".productSwiper")
) {

    new Swiper(".productSwiper", {
        loop: true
    });

}





function changeQty(id, value){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let item =
        cart.find(p => p.id === id);

    if(item){

        item.qty += value;

        if(item.qty <= 0){

            cart =
                cart.filter(p => p.id !== id);

        }

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}