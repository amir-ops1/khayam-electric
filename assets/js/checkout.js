function renderCheckout(){

    const itemsContainer =
        document.querySelector(".checkout-items");

    if(!itemsContainer) return;

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    itemsContainer.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.qty;

        itemsContainer.innerHTML += `

        <div class="checkout-item">

            <span>

                ${item.title}

                ×

                ${item.qty}

            </span>

            <span>

                ${(item.price * item.qty).toLocaleString()}

                تومان

            </span>

        </div>

        `;

    });

    document.querySelector(
        ".checkout-total-price"
    ).innerText =
        total.toLocaleString();

}

renderCheckout();



const form =
document.getElementById("checkoutForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullName =
    document.getElementById("fullName");

    const phone =
    document.getElementById("phone");

    const address =
    document.getElementById("address");

    const errors =
    document.querySelectorAll(".error");

    errors.forEach(error => {
        error.innerText = "";
    });

    let isValid = true;

    if(fullName.value.trim() === ""){

        errors[0].innerText =
        "نام را وارد کنید";

        isValid = false;
    }

    if(!/^09\d{9}$/.test(phone.value)){

        errors[1].innerText =
        "شماره موبایل معتبر نیست";

        isValid = false;
    }

    if(address.value.trim() === ""){

        errors[2].innerText =
        "آدرس را وارد کنید";

        isValid = false;
    }

    if(isValid){

        alert("سفارش با موفقیت ثبت شد");

    }

});