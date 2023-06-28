const productimg = document.querySelectorAll('.product-item');
const itemContainer = document.querySelector('.items-container');
const cartQuantity = document.querySelector('.cart-qty');
const listCard = document.querySelector('.list-card');
const total = document.querySelector('.total');
const quantity = document.querySelector('.itemVol span');



let products = [
  {
    id: 1,
    name: 'Flower 1',
    price: 5,
    image: 'a-removebg-preview (1).png'
  },
  {
    id: 2,
    name: 'Flower 2',
    price: 7,
    image: 'b-removebg-preview.png'
  },
  {
    id: 3,
    name: 'Flower 3',
    price: 10,
    image: 'c-removebg-preview.png'
  },
  {
    id: 4,
    name: 'Flower 4',
    price: 10,
    image: 'd-removebg-preview.png'
  },
  {
    id: 5,
    name: 'Flower 5',
    price: 15,
    image: 'e-removebg-preview.png'
  },
  {
    id: 6,
    name: 'Flower 6',
    price: 3,
    image: 'f-removebg-preview.png'
  },
  {
    id: 7,
    name: 'Flower 7',
    price: 3,
    image: 'g-removebg-preview.png'
  },
  {
    id: 8,
    name: 'Flower 8',
    price: 3,
    image: 'mommy.png'
  }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
      let newDiv = document.createElement('div');
      newDiv.classList.add('product-row'); 
      
      newDiv.innerHTML = `<div class="product-item" id="${value.id}">
      <img src="images/${value.image}" alt="">
      <button onclick="addToCard(${key})"><i class="fa-solid fa-cart-shopping" id="swis"></i></button>
      </div>
      <h3>${value.name}</h3>
      <h4>Price: ${value.price.toLocaleString()}$</h5>`;
      itemContainer.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
  cartQuantity.style.display = 'block';
  if(listCards[key] == null){
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    cartQuantity.innerText = (+cartQuantity.innerText+1);
  }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;
        if(value != null){
          let newDiv = document.createElement('li')
          newDiv.classList.add('card-info');
          newDiv.innerHTML = `<div class="prod-details">
          <img src="images/${value.image}" alt="">
          <h3>${value.name}</h3>
        </div>
        <div class="prod-pricing">
          <span>$${value.price.toLocaleString()}</span>
          <div class="itemVol">
            <button onclick="changeQuantity(${key},${value.quantity - 1})"class="minQty">-</button>
            <span>${value.quantity}</span>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})"class="posQty">+</button>
          </div>
        </div>`;
        listCard.appendChild(newDiv);
        }
    });
    total.innerText = `$ ${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
        cartQuantity.innerText -= 1;
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

    }
    reloadCard();
}

const hamburger = document.querySelector('.fa-solid');
hamburger.onclick = () => {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

const cartShow = document.querySelector('.shop-cart i');
cartShow.onclick = () =>{
  let open = document.querySelector('.card-list');
  open.classList.toggle('active');

};

const contact = document.querySelector('.cont-button');
const msgBtn = document.querySelector('.message-button');
const checkout = document.querySelector('.chk-btn');
const checkBtn = document.querySelector('.checkout-btn');
contact.onclick = () =>{
  let messageOpen = document.querySelector('.message-box');
  messageOpen.classList.add('active');
}
msgBtn.onclick = () =>{
  let messageOpen = document.querySelector('.message-box');
  messageOpen.classList.toggle('active');
}

checkout.onclick = () =>{
  let main = document.querySelector('main');
  let form = document.querySelector('.check-form');
  form.classList.add('active');
  main.style.display = 'none';
}

checkBtn.onclick = () =>{
  alert("Item successfully purchased")
  let main = document.querySelector('main');
  main.style.display = 'block'; 
} 














