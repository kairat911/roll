
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


// только 1 картачка работает
// btnMinus.addEventListener('click', function(){
// if (parseInt(counter.innerText) > 1){
//     counter.innerText = --counter.innerText;
// }    
// });
// btnPlus.addEventListener('click', function(){
//     counter.innerText = ++counter.innerText;
// })




// для всех картачкек
 window.addEventListener('click', function (event) {
  // переменный для 
  let counter


  // клик только по кнопкам
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
     // роверка обертку шетчика
     const consterWrapper = event.target.closest('.counter-wrapper');
     // находим див с числом счетчика
     counter = consterWrapper.querySelector('[data-counter]');
  }

   // проверка +
    if (event.target.dataset.action === 'plus'){
    counter.innerText = ++counter.innerText;
    }
   // проверка -
   if (event.target.dataset.action === 'minus'){
     //проверяем чтоб счетчик был больше 1
     if (parseInt(counter.innerText) > 1) {
      //изменяем техт в счетчике уменшяя его на 1
      counter.innerText = --counter.innerText;
     }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
      console.log('dkc');
      // удаление 1
      event.target.closest('.cart-item').remove();

      // отоброжение статуса карзины пустая // полная
      toggleCartStatus();
      //вызов функции пресчет
      colcCartPriceAndDelivery();
     }
   }
     //проверка клик на +или- внутри корзины
     if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
      //вызов функции пресчет
      colcCartPriceAndDelivery();
     }
    });





















































