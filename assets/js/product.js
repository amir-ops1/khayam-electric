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

 