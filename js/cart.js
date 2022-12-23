// div внутри карзины в который мы добовляем товары
const cartWrapper = document.querySelector('.cart-wrapper');



// отслеживаем клик на странице
window.addEventListener('click',function (event){
    // проеверяем что клик был совешон по кнопке  "добовить в корзину"  
    if  (event.target.hasAttribute('data-cart')){
        // находим картачку с таваром , внутри которой был совершон клик
        const card = event.target.closest('.card')
        // собираем данные с этого тавара и саписоваем их в удиной обьект prodoctinfo
        const prodoctInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
   


      // проверка есть ли товар в корзине
      const itemInCart = cartWrapper.querySelector(`[data-id="${prodoctInfo.id}"]`);

     // если есть товар в корзине
     if (itemInCart){
        const counterElemend = itemInCart.querySelector('[data-counter]');
        counterElemend.innerText = parseFloat(counterElemend.innerText) + parseInt(prodoctInfo.counter);
     }else {
        // если в товара нетв корзин

      // собранные данные подставим в шаблон для товара в карзине
       const cartItemHTML = `							
       <div class="cart-item" data-id="${prodoctInfo.id}">
       <div class="cart-item__top">
           <div class="cart-item__img">
               <img src="${prodoctInfo.imgSrc}" alt="${prodoctInfo.title}">
           </div>
           <div class="cart-item__desc">
               <div class="cart-item__title">${prodoctInfo.title}</div>
               <div class="cart-item__weight">${prodoctInfo.itemsInBox} / ${prodoctInfo.weight}</div>

               <!-- cart-item__details -->
               <div class="cart-item__details">

                   <div class="items items--small counter-wrapper">
                       <div class="items__control" data-action="minus">-</div>
                       <div class="items__current" data-counter="">${prodoctInfo.counter}</div>
                       <div class="items__control" data-action="plus">+</div>
                   </div>

                   <div class="price">
                       <div class="price__currency">${prodoctInfo.price}</div>
                   </div>

               </div>
               <!-- // cart-item__details -->

           </div>
       </div>
   </div>`;
      // отобразим товар в корзине
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }


    card.querySelector('[data-counter]').innerText = '1';
     
    // отображаем спатуса корзины пустая // полная
    toggleCartStatus();
     //пересчет обшей стоимости
    colcCartPriceAndDelivery();
    } 
})