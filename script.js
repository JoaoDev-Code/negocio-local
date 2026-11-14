
// Array de veículos
const carros = [
    {
        nome: "Honda Civic 2020",
        descricao: "Automático • Flex • Completo",
        preco: 98900
    },
    {
        nome: "Toyota Corolla 2019",
        descricao: "Automático • Couro",
        preco: 96500
    },
    {
        nome: "Jeep Compass 2021",
        descricao: "SUV • Completo",
        preco: 119900
    },
    {
        nome: "VW Jetta 2020",
        descricao: "Turbo • Automático",
        preco: 110000
    },
    {
        nome: "BMW 320i 2018",
        descricao: "Premium • Automático",
        preco: 145000
    },
    {
        nome: "Audi A3 2020",
        descricao: "Turbo • Automático",
        preco: 132000
    },
    {
        nome: "Mercedes C180",
        descricao: "Luxo • Automático",
        preco: 155000
    },
    {
        nome: "Hyundai Tucson",
        descricao: "SUV • Completo",
        preco: 118000
    },
    {
        nome: "Chevrolet Cruze",
        descricao: "LTZ • Automático",
        preco: 92000
    },
    {
        nome: "Ford Fusion",
        descricao: "Titanium • Automático",
        preco: 105000
    },
    {
        nome: "Honda HR-V",
        descricao: "SUV • Automático",
        preco: 112000
    },
    {
        nome: "Toyota Yaris Sedan",
        descricao: "Econômico • Automático",
        preco: 89900
    },
    {
        nome: "Jeep Renegade",
        descricao: "SUV • Automático",
        preco: 104000
    },
    {
        nome: "Nissan Sentra",
        descricao: "Conforto • Automático",
        preco: 97000
    },
    {
        nome: "VW T-Cross",
        descricao: "SUV • Automático",
        preco: 115000
    },
    {
        nome: "Chevrolet Equinox",
        descricao: "SUV • Turbo",
        preco: 138000
    },
    {
        nome: "Peugeot 3008",
        descricao: "SUV • Premium",
        preco: 142000
    },
    {
        nome: "Eclipse Cross",
        descricao: "SUV • AWD",
        preco: 148000
    },
    {
        nome: "Kia Sportage",
        descricao: "SUV • Completo",
        preco: 125000
    },
    {
        nome: "Volvo XC40",
        descricao: "Segurança • Premium",
        preco: 165000
    }
]

// Selecionando a lista de carros
const listaCarros = document.querySelector("#listaCarros")

// Percorrendo o array
carros.forEach((carro) => {

    listaCarros.innerHTML += `
        <div class="card">

            <h3>${carro.nome}</h3>

            <p>${carro.descricao}</p>

            <span>
                ${carro.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </span>

        </div>
    `
})
