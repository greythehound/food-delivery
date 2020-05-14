
'use strict';

const USERNAME_MAX_LENGTH = 3;

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const closeAuth = document.querySelector('.close-auth');
const modalAuth =  document.querySelector('.modal-auth');
const loginForm =  document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const username = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');
const modalBody = document.querySelector('.modal-body');
const modalPrice = document.querySelector('.modal-pricetag');
const clearCart = document.querySelector('.clear-cart');

var user = '';
let loginValue = localStorage.getItem('foodDelivery');
const cart = [];

const getData = async function(url) {

  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(`fails at ${url}, status ${response.status}`);
  }
  return await response.json();
};

function toggleModal() {
  modal.classList.toggle("is-open");
}

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}

function authorized() {
  console.log('Authorized');
  user = loginValue;
  function logOut(){
    loginValue = null;
    localStorage.removeItem('foodDelivery');
    user = loginValue;
    buttonAuth.style.display = '';
    username.style.display = '';
    buttonOut.style.display = '';
    cartButton.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  username.textContent = loginValue;
  buttonAuth.style.display = 'none';
  username.style.display = 'inline';
  buttonOut.style.display = 'flex';
  cartButton.style.display = 'flex';
  buttonOut.addEventListener('click', logOut);
}

function notAuthorized() {
  console.log('NOT Authorized');

  function login(event){
    event.preventDefault();
    loginValue = loginInput.value;

    if (loginValue.length > USERNAME_MAX_LENGTH) {
      toggleModalAuth();
      loginInput.classList.remove('input-error');
      localStorage.setItem('foodDelivery', loginValue);
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      loginForm.removeEventListener('submit', login);
      loginForm.reset();
      checkAuth();
    } else {
      loginInput.classList.add('input-error');
    }
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  loginForm.addEventListener('submit', login);

}

function checkAuth() {
  if (loginValue) {
    authorized();
  } else {
    notAuthorized();
  }
}

function createCardRestaurant(restaurant) {
  const { image, 
    kitchen, 
    name, 
    price, 
    products, 
    stars, 
    time_of_delivery: timeOfDelivery } = restaurant;

  const card = `
        <a class="card card-restaurant" data-products="${products}">
        <img src="${image}" alt="image" class="card-image"/>
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title">${name}</h3>
            <span class="card-tag tag">${timeOfDelivery} мин</span>
          </div>
          <div class="card-info">
            <div class="rating">
              ${stars}
            </div>
            <div class="price">От ${price} $</div>
            <div class="category">${kitchen}</div>
          </div>
        </div>
      </a>
  `;

  cardsRestaurants.insertAdjacentHTML('beforeend', card);
}

function createCardGood(goods) {

  const { description, id, image, name, price } = goods;

  const card = document.createElement('div');
  card.className = 'card';

  card.insertAdjacentHTML('beforeend', `
      <img src="${image}" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">${name}</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">${description}
          </div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart" id="${id}">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price card-price-bold">${price} $</strong>
        </div>
      </div>
  `);
  cardsMenu.insertAdjacentElement('beforeend', card);
}

function openGoods(event) {
  const target = event.target;
  if(loginValue) {

    const restaurant = target.closest('.card-restaurant');
    if (restaurant){

      cardsMenu.textContent = '';
      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');

      getData(`./db/${restaurant.dataset.products}`).then(function(data) {
        data.forEach(createCardGood)
      });
    }
  } else {
    toggleModalAuth();
  }
}


function addToCart() {
  const target = event.target;
  const buttonAddToCart = target.closest('.button-add-cart');
  if (buttonAddToCart) {
    const card = target.closest('.card');

    const title = card.querySelector('.card-title-reg').textContent;
    const price = card.querySelector('.card-price').textContent;
    const id = buttonAddToCart.id;

    const food = cart.find(function(item){
      return item.id === id;
    })
    if (food) {
      food.count += 1;
    } else {
      cart.push({
        id,
        title,
        price,
        count: 1
      });
    }
  }
}

function renderCart() {

  modalBody.textContent = '';

  cart.forEach(function({ id, title, price, count }) {
    const itemCart = `
      <div class="food-row">
        <span class="food-name">${title}</span>
        <strong class="food-price">${price}</strong>
        <div class="food-counter">
          <button class="counter-button counter-minus" data-id=${id}>-</button>
          <span class="counter">${count}</span>
          <button class="counter-button counter-plus" data-id=${id}>+</button>
        </div>
      </div>
    `;

    modalBody.insertAdjacentHTML('afterbegin', itemCart);
  })

  const totalPrice = cart.reduce(function(result, item) { 
    return result + (parseFloat(item.price) * item.count);
  }, 0);

  modalPrice.textContent = totalPrice + '$';

}

function changeCount(event) {
  const target = event.target;

  if (target.classList.contains('counter-button')) {
    const food = cart.find(function(item) {
      return item.id === target.dataset.id;
    });
    if (target.classList.contains('counter-minus')) {
      food.count--;
      if (food.count === 0) {
        cart.splice(cart.indexOf(food), 1);
      }
    }
    if (target.classList.contains('counter-plus')) {
      food.count++;
    }
    renderCart();
  }
}

function init() {
  getData('./db/partners.json').then(function(data) {
    data.forEach(createCardRestaurant)
  });
  
  
  cartButton.addEventListener("click", function() {
    renderCart();
    toggleModal();
  });

  clearCart.addEventListener('click', function() {
    cart.length = 0;
    renderCart();
  });

  modalBody.addEventListener('click', changeCount);
  
  cardsMenu.addEventListener('click', addToCart);

  close.addEventListener("click", toggleModal);
  
  cardsRestaurants.addEventListener('click', openGoods);
  
  logo.addEventListener('click', function() {
    containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
  })
  
  checkAuth();
}

init();