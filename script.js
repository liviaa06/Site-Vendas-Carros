// Simulação de dados de carros (novos e usados)
const carros = [
    { tipo: 'novo', nome: 'Carro Novo 1', ano: 2023, preco: 50000, imagem: 'carro1.jpg' },
    { tipo: 'usado', nome: 'Carro Usado 1', ano: 2018, preco: 30000, imagem: 'carro4.jpg' },
    { tipo: 'novo', nome: 'Carro Novo 2', ano: 2022, preco: 40000, imagem: 'carro2.jpg' },
    { tipo: 'usado', nome: 'Carro Usado 2', ano: 2019, preco: 25000, imagem: 'carro5.jpg' },
    { tipo: 'novo', nome: 'Carro Novo 3', ano: 2021, preco: 35000, imagem: 'carro3.jpg' },
    { tipo: 'usado', nome: 'Carro Usado 3', ano: 2017, preco: 20000, imagem: 'carro6.jpg' }
];

// Função para inicializar a exibição de todos os carros
function inicializarCarros() {
    const carrosContainer = document.querySelector('.carros');
    carrosContainer.innerHTML = '';

    carros.forEach(carro => {
        const carroHTML = `
            <div class="carro ${carro.tipo}">
                <img src="${carro.imagem}" alt="${carro.nome}">
                <h3>${carro.nome}</h3>
                <p>Ano: ${carro.ano}</p>
                <p>Preço: R$ ${carro.preco}</p>
            </div>
        `;
        carrosContainer.innerHTML += carroHTML;
    });
}

// Função para filtrar os carros por tipo (todos, novos, usados)
function filtrarCarros(tipo) {
    const carrosContainer = document.querySelector('.carros');
    carrosContainer.innerHTML = '';

    carros.forEach(carro => {
        if (tipo === 'todos' || carro.tipo === tipo) {
            const carroHTML = `
                <div class="carro ${carro.tipo}">
                    <img src="${carro.imagem}" alt="${carro.nome}">
                    <h3>${carro.nome}</h3>
                    <p>Ano: ${carro.ano}</p>
                    <p>Preço: R$ ${carro.preco}</p>
                </div>
            `;
            carrosContainer.innerHTML += carroHTML;
        }
    });
}

// Inicializar exibindo todos os carros ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    inicializarCarros();
});