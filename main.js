

// captura formulario 
const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable');

// consumir API READ

const getData = async () => {
    try {
        const response = await axios.get(apiUrl);
        renderTable(response.data);
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

const renderTable = (data) => {
    console.log(data);
    dataTable.innerHTML = '';
    data.forEach(item => {
        const row = `
<tr class="border-b"></tr>
        <td class="py-2 px-4">${item.name}</td>
        <td class="py-2 px-4">${item.lastName}</td>
        <td class="py-2 px-4">${item.phone}</td>
        <td class="py-2 px-4">${item.direction}</td>
        <td class="py-2 px-4">${item.reasons}</td>
        <td class="py-2 px-4"><img class="w-16 h-16 object-cover rounded" src="${item.img}" alt=""></td>
       
        </tr>`;
        dataTable.insertAdjacentHTML('beforeend', row);
    });
}

getData();


// Selección de elementos
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
const userMenuButton = document.getElementById('user-menu-button');
const userMenu = userMenuButton.nextElementSibling;

// Estado del menú
let menuMovilAbierto = false;
let menuUsuarioAbierto = false;

// Función para mostrar/ocultar el menú móvil
function toggleMobileMenu() {
    menuMovilAbierto = !menuMovilAbierto;
    if (menuMovilAbierto) {
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'true');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
}

// Función para mostrar/ocultar el menú del usuario
function toggleUserMenu() {
    menuUsuarioAbierto = !menuUsuarioAbierto;
    if (menuUsuarioAbierto) {
        userMenu.classList.add('transform', 'opacity-100', 'scale-100');
        userMenu.classList.remove('opacity-0', 'scale-95');
        userMenu.setAttribute('aria-expanded', 'true');
    } else {
        userMenu.classList.add('opacity-0', 'scale-95');
        userMenu.classList.remove('transform', 'opacity-100', 'scale-100');
        userMenu.setAttribute('aria-expanded', 'false');
    }
}

// Cerrar el menú del usuario si se hace clic fuera de él
function cerrarMenusSiFueraClick(event) {
    if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
        menuUsuarioAbierto = false;
        userMenu.classList.add('opacity-0', 'scale-95');
        userMenu.classList.remove('transform', 'opacity-100', 'scale-100');
        userMenu.setAttribute('aria-expanded', 'false');
    }
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        menuMovilAbierto = false;
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
}

// Eventos para alternar los menús
mobileMenuButton.addEventListener('click', toggleMobileMenu);
userMenuButton.addEventListener('click', toggleUserMenu);

// Evento para cerrar los menús si se hace clic fuera de ellos
document.addEventListener('click', cerrarMenusSiFueraClick);
