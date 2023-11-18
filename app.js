// app.js
// ... (kode JavaScript lainnya)
function hideSplashScreen() {
  const splashScreen = document.getElementById('splashScreen');
  splashScreen.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  // Simulate a delay (e.g., 3 seconds) for demonstration purposes
  setTimeout(hideSplashScreen, 3000);
});

// app.js
let dishData = [];

function addDish() {
  const dishName = document.getElementById('dishName').value;
  const price = document.getElementById('price').value;

  const dish = {
    name: dishName,
    price: price
  };

  dishData.push(dish);
  displayDishes();
}

function displayDishes() {
  const dishList = document.getElementById('dishList');
  dishList.innerHTML = '';

  dishData.forEach(dish => {
    const li = document.createElement('li');
    li.textContent = `${dish.name} - $${dish.price}`;
    dishList.appendChild(li);
  });
}

function calculateTotal() {
  const total = dishData.reduce((sum, dish) => sum + parseFloat(dish.price), 0);
  document.getElementById('result').textContent = `Total: $${total}`;
}
// ... (skrip JavaScript lainnya)

// app.js
// ... (kode JavaScript yang sudah ada)

// Menampilkan opsi menu dalam dropdown
document.addEventListener('DOMContentLoaded', function () {
  const dishSelect = document.getElementById('dishSelect');
  dishData.forEach(dish => {
    const option = document.createElement('option');
    option.value = dish.name;
    option.textContent = dish.name;
    dishSelect.appendChild(option);
  });
});

// Menambahkan pemesanan ke daftar
function addOrder() {
  const customerName = document.getElementById('customerName').value;
  const dishName = document.getElementById('dishSelect').value;
  const quantity = document.getElementById('quantity').value;

  const order = {
    customer: customerName,
    dish: dishName,
    quantity: quantity
  };

  orderData.push(order);
  displayOrders();
}

// Menampilkan daftar pemesanan
function displayOrders() {
  const orderList = document.getElementById('orderList');
  orderList.innerHTML = '';

  orderData.forEach(order => {
    const li = document.createElement('li');
    li.textContent = `${order.customer} ordered ${order.quantity} ${order.dish}(s)`;
    orderList.appendChild(li);
  });
}
