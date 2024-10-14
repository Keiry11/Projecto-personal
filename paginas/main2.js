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


