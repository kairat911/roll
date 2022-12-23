function colcCartPriceAndDelivery(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    

    
    // общя стоимость товара
    let totalPrice = 0;


    // обходим все блоки с ценами в корзине
    cartItems.forEach(function (item) {
   // находим количество товаров
    const amountEl = item.querySelector('[data-counter]');
    const pricEl = item.querySelector('.price__currency');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(pricEl.innerText);
    totalPrice += currentPrice;
    });

    totalPriceEl.innerText = totalPrice;
    // скрыть и показать блок со стоимости заказа
    if (totalPrice > 0){
        cartDelivery.classList.remove('none');
    }else{
        cartDelivery.classList.add('none')
    }
    // указываем стоимость доставки
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    }else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = "250 ₽"
    }
}
