const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");
const heartBtns = document.querySelectorAll(".heart-btn");
const deleteBtns = document.querySelectorAll(".delete-btn");
const quantityValues = document.querySelectorAll(".quantity-value");
const itemPrices = document.querySelectorAll(".item-price");
const totalPriceElement = document.getElementById("total-price");

let totalPrice = 0;

minusBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (quantityValues[index].textContent > 1) {
            quantityValues[index].textContent--;
            updateTotalPrice();
        }
    });
});

plusBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        quantityValues[index].textContent++;
        updateTotalPrice();
    });
});

heartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");
    });
});

deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    totalPrice = 0;
    itemPrices.forEach((price, index) => {
        totalPrice += parseFloat(price.textContent.slice(1)) * parseInt(quantityValues[index].textContent);
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

updateTotalPrice();
