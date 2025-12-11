// LOGIN
const validUser = { username: "admin", password: "123" };

function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.add('hidden'));
    document.getElementById(moduleId).classList.remove('hidden');
}

function logout() {
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('nav').classList.add('hidden');
    document.querySelectorAll('.module').forEach(m => m.classList.add('hidden'));
    document.getElementById('login-form').reset();
}

document.getElementById('login-form').addEventListener('submit', function(e){
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === validUser.username && pass === validUser.password){
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('nav').classList.remove('hidden');
    } else {
        document.getElementById('login-error').textContent = "Usuario o contraseña incorrectos";
    }
});

// REGISTRO
let owners = [];
let pets = [];

function addOwner(){
    const name = document.getElementById('owner-name').value;
    const phone = document.getElementById('owner-phone').value;
    const email = document.getElementById('owner-email').value;
    owners.push({name, phone, email});
    alert('Dueño registrado');
}

function addPet(){
    const name = document.getElementById('pet-name').value;
    const species = document.getElementById('pet-species').value;
    const breed = document.getElementById('pet-breed').value;
    pets.push({name, species, breed});
    alert('Mascota registrada');
}

// AGENDA
let services = [];

function addService() {
    const date = document.getElementById('service-date').value;
    const time = document.getElementById('service-time').value;
    const pet = document.getElementById('service-pet').value;
    const type = document.getElementById('service-type').value;

    if (date === "" || time === "" || pet === "" || type === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    services.push({ date, time, pet, type });

    const tbody = document.querySelector("#service-table tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${date}</td>
        <td>${time}</td>
        <td>${pet}</td>
        <td>${type}</td>
        <td><button class="botones" onclick="deleteService(this)">Eliminar</button></td>
    `;

    tbody.appendChild(row);

    // Limpiar inputs
    document.getElementById('service-date').value = "";
    document.getElementById('service-time').value = "";
    document.getElementById('service-pet').value = "";
    document.getElementById('service-type').value = "";
}

function deleteService(button) {
    const row = button.closest("tr");
    row.remove();
}

// CARRITO
let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;

    const tbody = document.querySelector("#cart-table tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${price}bs</td>
        <td><button class="botones" onclick="deleteCartItem(this, {price})">Eliminar</button></td>
    `;

    tbody.appendChild(row);

    // Actualizar total
    document.getElementById('total').textContent = total;
}

// Función para eliminar producto del carrito
function deleteCartItem(button, price){
    const row = button.closest("tr");
    row.remove();
    total -= price;
    document.getElementById('total').textContent = total;
}




function logout() {
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('nav').classList.add('hidden');
    document.querySelectorAll('.module').forEach(m => m.classList.add('hidden'));
    document.getElementById('login-form').reset();

    // Ocultar bienvenida
    document.getElementById('welcome-section').classList.add('hidden');
}
