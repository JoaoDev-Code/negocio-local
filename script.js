// ========================================
// CONFIGURAÇÕES
// ========================================

// Troque pelo número comercial correto.
// Formato: código do país + DDD + número, sem espaços.
const telefoneWhatsApp = "5527995799319";

const CHAVE_FAVORITOS = "autoprime_favoritos";

// ========================================
// CATÁLOGO DE VEÍCULOS
// Os dados técnicos abaixo são demonstrativos.
// Confira as informações antes de usar o site comercialmente.
// ========================================

const carros = [
    {
        id: 1,
        imagem: "https://cdn.autopapo.com.br/box/uploads/2020/07/02114850/frente-do-honda-civic-si-2020-branco-estacionado-em-pista.jpeg",
        nome: "Honda Civic",
        marca: "Honda",
        ano: 2020,
        preco: 98900,
        km: 42000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Branco",
        tipo: "Sedã",
        descricao: "Automático • Flex • Completo",
        imagens: [
            "https://cdn.autopapo.com.br/box/uploads/2020/07/02114850/frente-do-honda-civic-si-2020-branco-estacionado-em-pista.jpeg"
        ]
    },
    {
        id: 2,
        imagem: "https://images.ctfassets.net/uaddx06iwzdz/1IUN1eDajHEYybfKHVvig1/f4990be250ec7fd217a09387afeebaae/00-10-03-01-0c9a9968.jpg",
        nome: "Toyota Corolla",
        marca: "Toyota",
        ano: 2019,
        preco: 96500,
        km: 51000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Prata",
        tipo: "Sedã",
        descricao: "Automático • Couro",
        imagens: [
            "https://images.ctfassets.net/uaddx06iwzdz/1IUN1eDajHEYybfKHVvig1/f4990be250ec7fd217a09387afeebaae/00-10-03-01-0c9a9968.jpg"
        ]
    },
    {
        id: 3,
        imagem: "https://www.fletcherchrysler.com/static/dealer-16205/MY20_-_MY21_Jeep_Compass_Limited_in_mountains_1400.jpg",
        nome: "Jeep Compass",
        marca: "Jeep",
        ano: 2021,
        preco: 119900,
        km: 35000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Cinza",
        tipo: "SUV",
        descricao: "SUV • Completo",
        imagens: [
            "https://www.fletcherchrysler.com/static/dealer-16205/MY20_-_MY21_Jeep_Compass_Limited_in_mountains_1400.jpg"
        ]
    },
    {
        id: 4,
        imagem: "https://media.ed.edmunds-media.com/volkswagen/jetta/2020/oem/2020_volkswagen_jetta_sedan_14t-sel-ulev_fq_oem_2_1600.jpg",
        nome: "VW Jetta",
        marca: "Volkswagen",
        ano: 2020,
        preco: 110000,
        km: 39000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Preto",
        tipo: "Sedã",
        descricao: "Turbo • Automático",
        imagens: [
            "https://media.ed.edmunds-media.com/volkswagen/jetta/2020/oem/2020_volkswagen_jetta_sedan_14t-sel-ulev_fq_oem_2_1600.jpg"
        ]
    },
    {
        id: 5,
        imagem: "https://reginaldodecampinas.com.br/wp-content/uploads/2021/01/BMW-320-2018-1-Copy-1024x768.jpg",
        nome: "BMW 320i",
        marca: "BMW",
        ano: 2018,
        preco: 145000,
        km: 58000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Branco",
        tipo: "Sedã",
        descricao: "Premium • Automático",
        imagens: [
            "https://reginaldodecampinas.com.br/wp-content/uploads/2021/01/BMW-320-2018-1-Copy-1024x768.jpg"
        ]
    },
    {
        id: 6,
        imagem: "https://www.carkeys.co.uk/media/30617/a3sb007.jpg?center=0.62745098039215685%2C0.42857142857142855&height=800&mode=crop&width=1200",
        nome: "Audi A3",
        marca: "Audi",
        ano: 2020,
        preco: 132000,
        km: 31000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Cinza",
        tipo: "Hatch",
        descricao: "Turbo • Automático",
        imagens: [
            "https://www.carkeys.co.uk/media/30617/a3sb007.jpg?center=0.62745098039215685%2C0.42857142857142855&height=800&mode=crop&width=1200"
        ]
    },
    {
        id: 7,
        imagem: "https://storage.googleapis.com/fotosautos/automotoras/sinwm/80/01011193083-1-1-3.jpg",
        nome: "Mercedes C180",
        marca: "Mercedes-Benz",
        ano: 2019,
        preco: 155000,
        km: 47000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Preto",
        tipo: "Sedã",
        descricao: "Luxo • Automático",
        imagens: [
            "https://storage.googleapis.com/fotosautos/automotoras/sinwm/80/01011193083-1-1-3.jpg"
        ]
    },
    {
        id: 8,
        imagem: "https://assets.nexuspointapex.co.uk/resize/2048/tenant_d9013b5a-4990-4f3e-beec-4e1fc85990eb/media/9912689/DY21XXA_1.jpg",
        nome: "Hyundai Tucson",
        marca: "Hyundai",
        ano: 2021,
        preco: 118000,
        km: 28000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Prata",
        tipo: "SUV",
        descricao: "SUV • Completo",
        imagens: [
            "https://assets.nexuspointapex.co.uk/resize/2048/tenant_d9013b5a-4990-4f3e-beec-4e1fc85990eb/media/9912689/DY21XXA_1.jpg"
        ]
    },
    {
        id: 9,
        imagem: "https://media.ed.edmunds-media.com/chevrolet/cruze/2012/oem/2012_chevrolet_cruze_sedan_2lt_fq_oem_1_1600.jpg",
        nome: "Chevrolet Cruze",
        marca: "Chevrolet",
        ano: 2018,
        preco: 92000,
        km: 62000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Preto",
        tipo: "Sedã",
        descricao: "LTZ • Automático",
        imagens: [
            "https://media.ed.edmunds-media.com/chevrolet/cruze/2012/oem/2012_chevrolet_cruze_sedan_2lt_fq_oem_1_1600.jpg"
        ]
    },
    {
        id: 10,
        imagem: "https://www.webmotors.com.br/imagens/prod/344753/FORD_FUSION_2.0_TITANIUM_AWD_16V_GASOLINA_4P_AUTOMATICO_34475314251385897.jpg",
        nome: "Ford Fusion",
        marca: "Ford",
        ano: 2019,
        preco: 105000,
        km: 55000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Branco",
        tipo: "Sedã",
        descricao: "Titanium • Automático",
        imagens: [
            "https://www.webmotors.com.br/imagens/prod/344753/FORD_FUSION_2.0_TITANIUM_AWD_16V_GASOLINA_4P_AUTOMATICO_34475314251385897.jpg"
        ]
    },
    {
        id: 11,
        imagem: "https://images.contentstack.io/v3/assets/blt1bd0ccbd0b7d1870/blteeb600761fcf77d8/68a4c83cca0792186bff7901/1_d2fe52bbb3eeb93-1310_44983c0c411d0ed.jpg",
        nome: "Honda HR-V",
        marca: "Honda",
        ano: 2022,
        preco: 112000,
        km: 26000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Cinza",
        tipo: "SUV",
        descricao: "SUV • Automático",
        imagens: [
            "https://images.contentstack.io/v3/assets/blt1bd0ccbd0b7d1870/blteeb600761fcf77d8/68a4c83cca0792186bff7901/1_d2fe52bbb3eeb93-1310_44983c0c411d0ed.jpg"
        ]
    },
    {
        id: 12,
        imagem: "https://www.toyotarp.com/images/ImagenesModelo/Yaris_Sedan/YarisExt01.webp",
        nome: "Toyota Yaris Sedan",
        marca: "Toyota",
        ano: 2022,
        preco: 89900,
        km: 22000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Prata",
        tipo: "Sedã",
        descricao: "Econômico • Automático",
        imagens: [
            "https://www.toyotarp.com/images/ImagenesModelo/Yaris_Sedan/YarisExt01.webp"
        ]
    },
    {
        id: 13,
        imagem: "https://www.primemotorz.com/imagetag/1683/main/l/Used-2020-Jeep-Renegade-latitude-4x4-Latitude-1710278058.jpg",
        nome: "Jeep Renegade",
        marca: "Jeep",
        ano: 2020,
        preco: 104000,
        km: 44000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Vermelho",
        tipo: "SUV",
        descricao: "SUV • Automático",
        imagens: [
            "https://www.primemotorz.com/imagetag/1683/main/l/Used-2020-Jeep-Renegade-latitude-4x4-Latitude-1710278058.jpg"
        ]
    },
    {
        id: 14,
        imagem: "https://s1.cdn.autoevolution.com/images/news/gallery/2020-nissan-sentra-looks-much-better-larger-engine-comes-standard_2.jpg",
        nome: "Nissan Sentra",
        marca: "Nissan",
        ano: 2020,
        preco: 97000,
        km: 49000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Preto",
        tipo: "Sedã",
        descricao: "Conforto • Automático",
        imagens: [
            "https://s1.cdn.autoevolution.com/images/news/gallery/2020-nissan-sentra-looks-much-better-larger-engine-comes-standard_2.jpg"
        ]
    },
    {
        id: 15,
        imagem: "https://editorial.pxcrush.net/carsales/general/editorial/201201_volkswagen_t-cross_03.jpg?height=682&width=1024",
        nome: "VW T-Cross",
        marca: "Volkswagen",
        ano: 2022,
        preco: 115000,
        km: 24000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Branco",
        tipo: "SUV",
        descricao: "SUV • Automático",
        imagens: [
            "https://editorial.pxcrush.net/carsales/general/editorial/201201_volkswagen_t-cross_03.jpg?height=682&width=1024"
        ]
    },
    {
        id: 16,
        imagem: "https://cdn.mos.cms.futurecdn.net/574t9xbympfccqyFvKV2F8.jpg",
        nome: "Chevrolet Equinox",
        marca: "Chevrolet",
        ano: 2021,
        preco: 138000,
        km: 33000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Cinza",
        tipo: "SUV",
        descricao: "SUV • Turbo",
        imagens: [
            "https://cdn.mos.cms.futurecdn.net/574t9xbympfccqyFvKV2F8.jpg"
        ]
    },
    {
        id: 17,
        imagem: "https://www.carkeys.co.uk/media/35134/028.jpg?center=0.6095505617977528%2C0.5280898876404494&height=800&mode=crop&width=1200",
        nome: "Peugeot 3008",
        marca: "Peugeot",
        ano: 2021,
        preco: 142000,
        km: 37000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Azul",
        tipo: "SUV",
        descricao: "SUV • Premium",
        imagens: [
            "https://www.carkeys.co.uk/media/35134/028.jpg?center=0.6095505617977528%2C0.5280898876404494&height=800&mode=crop&width=1200"
        ]
    },
    {
        id: 18,
        imagem: "https://nextgen-cella.cdn.dealersolutions.com.au/20260219/aedc730fa5db18ab2b924c0706a77ffe.jpg",
        nome: "Mitsubishi Eclipse Cross",
        marca: "Mitsubishi",
        ano: 2022,
        preco: 148000,
        km: 19000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Branco",
        tipo: "SUV",
        descricao: "SUV • AWD",
        imagens: [
            "https://nextgen-cella.cdn.dealersolutions.com.au/20260219/aedc730fa5db18ab2b924c0706a77ffe.jpg"
        ]
    },
    {
        id: 19,
        imagem: "https://cdn.motor1.com/images/mgl/MkYbB8/s1/kia-sportage-2025-corea-del-sud.jpg",
        nome: "Kia Sportage",
        marca: "Kia",
        ano: 2023,
        preco: 125000,
        km: 16000,
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Preto",
        tipo: "SUV",
        descricao: "SUV • Completo",
        imagens: [
            "https://cdn.motor1.com/images/mgl/MkYbB8/s1/kia-sportage-2025-corea-del-sud.jpg"
        ]
    },
    {
        id: 20,
        imagem: "https://www.autopista.es/uploads/s1/49/22/84/1/5d1f11b00ce694bf478b50a5-volvo-xc40-2020-el-suv-sueco-estrena-actualizacion.jpeg",
        nome: "Volvo XC40",
        marca: "Volvo",
        ano: 2021,
        preco: 165000,
        km: 21000,
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Cinza",
        tipo: "SUV",
        descricao: "Segurança • Premium",
        imagens: [
            "https://www.autopista.es/uploads/s1/49/22/84/1/5d1f11b00ce694bf478b50a5-volvo-xc40-2020-el-suv-sueco-estrena-actualizacion.jpeg"
        ]
    }
];

// ========================================
// ELEMENTOS DO HTML
// ========================================

const listaCarros = document.querySelector("#listaCarros");
const listaFavoritos = document.querySelector("#listaFavoritos");
const favoritosVazio = document.querySelector("#favoritosVazio");

const pesquisa = document.querySelector("#pesquisa");
const filtroMarca = document.querySelector("#filtroMarca");
const filtroAno = document.querySelector("#filtroAno");
const filtroCambio = document.querySelector("#filtroCambio");
const filtroPreco = document.querySelector("#filtroPreco");
const ordenacao = document.querySelector("#ordenacao");
const limparFiltros = document.querySelector("#limparFiltros");
const contadorCarros = document.querySelector("#contadorCarros");

const modal = document.querySelector("#modal");
const detalhesCarro = document.querySelector("#detalhesCarro");
const fecharModal = document.querySelector("#fecharModal");

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const navFavCount = document.querySelector("#navFavCount");
const contatoWhatsApp = document.querySelector("#contatoWhatsApp");

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function formatarQuilometragem(km) {
    return km.toLocaleString("pt-BR") + " km";
}

function gerarLinkWhatsApp(carro) {
    const mensagem = `Olá! Tenho interesse no ${carro.nome} ${carro.ano}, anunciado por ${formatarPreco(carro.preco)}. Gostaria de mais informações.`;
    return `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
}

function obterFavoritos() {
    try {
        const salvos = JSON.parse(localStorage.getItem(CHAVE_FAVORITOS));
        return Array.isArray(salvos) ? salvos : [];
    } catch (erro) {
        return [];
    }
}

let favoritos = obterFavoritos();

function salvarFavoritos() {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
    atualizarContadorFavoritos();
}

function atualizarContadorFavoritos() {
    navFavCount.textContent = favoritos.length;
}

// ========================================
// CARREGAR OPÇÕES DOS FILTROS
// ========================================

function carregarFiltros() {
    const marcas = [];

    carros.forEach((carro) => {
        if (!marcas.includes(carro.marca)) {
            marcas.push(carro.marca);
        }
    });

    marcas.sort();

    marcas.forEach((marca) => {
        filtroMarca.innerHTML += `<option value="${marca}">${marca}</option>`;
    });

    const anos = [];

    carros.forEach((carro) => {
        if (!anos.includes(carro.ano)) {
            anos.push(carro.ano);
        }
    });

    anos.sort((a, b) => b - a);

    anos.forEach((ano) => {
        filtroAno.innerHTML += `<option value="${ano}">${ano}</option>`;
    });
}

// ========================================
// CRIAR CARD DE VEÍCULO
// ========================================

function criarCard(carro) {
    const estaFavoritado = favoritos.includes(carro.id);

    return `
        <article class="card">
            <div class="card-imagem">
                <img src="${carro.imagem}" alt="${carro.nome} ${carro.ano}" loading="lazy">
                <button
                    class="favoritar ${estaFavoritado ? "ativo" : ""}"
                    type="button"
                    data-favorito="${carro.id}"
                    aria-label="${estaFavoritado ? "Remover dos" : "Adicionar aos"} favoritos"
                    aria-pressed="${estaFavoritado}"
                    title="${estaFavoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
                >${estaFavoritado ? "♥" : "♡"}</button>
            </div>

            <div class="card-info">
                <p class="card-marca">${carro.marca}</p>
                <h3>${carro.nome} ${carro.ano}</h3>
                <p class="card-descricao">${carro.descricao}</p>

                <div class="card-specs">
                    <span>${carro.ano}</span>
                    <span>${formatarQuilometragem(carro.km)}</span>
                    <span>${carro.cambio}</span>
                </div>

                <strong class="card-preco">${formatarPreco(carro.preco)}</strong>

                <div class="card-botoes">
                    <button class="btn-detalhes" type="button" data-detalhes="${carro.id}">
                        Ver detalhes
                    </button>
                    <a class="btn-consultar" href="${gerarLinkWhatsApp(carro)}"
                        target="_blank" rel="noopener noreferrer">Consultar</a>
                </div>
            </div>
        </article>
    `;
}

// ========================================
// MOSTRAR VEÍCULOS
// ========================================

function mostrarCarros(lista) {
    contadorCarros.textContent = `${lista.length} veículo(s) encontrado(s)`;

    if (lista.length === 0) {
        listaCarros.innerHTML = `
            <div class="sem-resultados">
                <h3>Nenhum veículo encontrado</h3>
                <p>Tente alterar sua pesquisa ou seus filtros.</p>
            </div>
        `;
        return;
    }

    listaCarros.innerHTML = lista.map(criarCard).join("");
}

function mostrarFavoritos() {
    const carrosFavoritos = carros.filter((carro) => favoritos.includes(carro.id));

    favoritosVazio.hidden = carrosFavoritos.length > 0;
    listaFavoritos.innerHTML = carrosFavoritos.map(criarCard).join("");
}

// ========================================
// PESQUISA, FILTROS E ORDENAÇÃO
// ========================================

function filtrarCarros() {
    const texto = pesquisa.value.trim().toLowerCase();
    const marcaSelecionada = filtroMarca.value;
    const anoSelecionado = filtroAno.value;
    const cambioSelecionado = filtroCambio.value;
    const precoSelecionado = filtroPreco.value;

    let carrosFiltrados = carros.filter((carro) => {
        const nomeCorresponde =
            carro.nome.toLowerCase().includes(texto) ||
            carro.marca.toLowerCase().includes(texto);

        const marcaCorresponde =
            marcaSelecionada === "" || carro.marca === marcaSelecionada;

        const anoCorresponde =
            anoSelecionado === "" || carro.ano === Number(anoSelecionado);

        const cambioCorresponde =
            cambioSelecionado === "" || carro.cambio === cambioSelecionado;

        let precoCorresponde = true;

        if (precoSelecionado === "ate100") {
            precoCorresponde = carro.preco <= 100000;
        } else if (precoSelecionado === "100a120") {
            precoCorresponde = carro.preco > 100000 && carro.preco <= 120000;
        } else if (precoSelecionado === "120a150") {
            precoCorresponde = carro.preco > 120000 && carro.preco <= 150000;
        } else if (precoSelecionado === "acima150") {
            precoCorresponde = carro.preco > 150000;
        }

        return nomeCorresponde &&
            marcaCorresponde &&
            anoCorresponde &&
            cambioCorresponde &&
            precoCorresponde;
    });

    if (ordenacao.value === "menor-preco") {
        carrosFiltrados.sort((a, b) => a.preco - b.preco);
    } else if (ordenacao.value === "maior-preco") {
        carrosFiltrados.sort((a, b) => b.preco - a.preco);
    } else if (ordenacao.value === "menor-ano") {
        carrosFiltrados.sort((a, b) => a.ano - b.ano);
    } else if (ordenacao.value === "maior-ano") {
        carrosFiltrados.sort((a, b) => b.ano - a.ano);
    }

    mostrarCarros(carrosFiltrados);
}

pesquisa.addEventListener("input", filtrarCarros);
filtroMarca.addEventListener("change", filtrarCarros);
filtroAno.addEventListener("change", filtrarCarros);
filtroCambio.addEventListener("change", filtrarCarros);
filtroPreco.addEventListener("change", filtrarCarros);
ordenacao.addEventListener("change", filtrarCarros);

limparFiltros.addEventListener("click", () => {
    pesquisa.value = "";
    filtroMarca.value = "";
    filtroAno.value = "";
    filtroCambio.value = "";
    filtroPreco.value = "";
    ordenacao.value = "recentes";
    filtrarCarros();
});

// ========================================
// FAVORITOS
// ========================================

function alternarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter((item) => item !== id);
    } else {
        favoritos.push(id);
    }

    salvarFavoritos();
    filtrarCarros();
    mostrarFavoritos();
}

document.addEventListener("click", (evento) => {
    const botaoFavorito = evento.target.closest("[data-favorito]");
    const botaoDetalhes = evento.target.closest("[data-detalhes]");

    if (botaoFavorito) {
        alternarFavorito(Number(botaoFavorito.dataset.favorito));
    }

    if (botaoDetalhes) {
        abrirDetalhes(Number(botaoDetalhes.dataset.detalhes));
    }
});

// ========================================
// DETALHES E GALERIA DO VEÍCULO
// ========================================

function abrirDetalhes(id) {
    const carro = carros.find((item) => item.id === id);

    if (!carro) {
        return;
    }

    const imagens = carro.imagens && carro.imagens.length
        ? carro.imagens
        : [carro.imagem];

    detalhesCarro.innerHTML = `
        <div class="galeria-principal">
            <img id="imagemGaleria" src="${imagens[0]}" alt="${carro.nome}">
        </div>

        <div class="galeria-miniaturas">
            ${imagens.map((imagem, indice) => `
                <button type="button" class="${indice === 0 ? "ativa" : ""}"
                    data-imagem="${indice}" aria-label="Ver foto ${indice + 1}">
                    <img src="${imagem}" alt="">
                </button>
            `).join("")}
        </div>

        <div class="modal-dados">
            <p class="card-marca">${carro.marca}</p>
            <h2 id="modalTitulo">${carro.nome} ${carro.ano}</h2>
            <p>${carro.descricao}</p>

            <div class="modal-specs">
                <div><small>Ano</small><strong>${carro.ano}</strong></div>
                <div><small>Quilometragem</small><strong>${formatarQuilometragem(carro.km)}</strong></div>
                <div><small>Combustível</small><strong>${carro.combustivel}</strong></div>
                <div><small>Câmbio</small><strong>${carro.cambio}</strong></div>
                <div><small>Cor</small><strong>${carro.cor}</strong></div>
                <div><small>Categoria</small><strong>${carro.tipo}</strong></div>
            </div>

            <strong class="modal-preco">${formatarPreco(carro.preco)}</strong>
            <a class="modal-whatsapp" href="${gerarLinkWhatsApp(carro)}"
                target="_blank" rel="noopener noreferrer">Consultar este veículo pelo WhatsApp ↗</a>
        </div>
    `;

    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
    fecharModal.focus();
}

detalhesCarro.addEventListener("click", (evento) => {
    const miniatura = evento.target.closest("[data-imagem]");

    if (!miniatura) {
        return;
    }

    const carroId = Number(detalhesCarro.querySelector(".modal-dados h2").textContent.match(/\d+/)?.[0]);
    const titulo = detalhesCarro.querySelector(".modal-dados h2").textContent;
    const carro = carros.find((item) => titulo.startsWith(item.nome));

    if (!carro) {
        return;
    }

    const indice = Number(miniatura.dataset.imagem);
    const imagem = carro.imagens[indice] || carro.imagem;

    detalhesCarro.querySelector("#imagemGaleria").src = imagem;
    detalhesCarro.querySelectorAll(".galeria-miniaturas button").forEach((botao) => {
        botao.classList.toggle("ativa", botao === miniatura);
    });
});

function fecharDetalhes() {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
}

fecharModal.addEventListener("click", fecharDetalhes);

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        fecharDetalhes();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.classList.contains("ativo")) {
        fecharDetalhes();
    }
});

// ========================================
// MENU RESPONSIVO
// ========================================

menuToggle.addEventListener("click", () => {
    const aberto = navLinks.classList.toggle("ativo");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    menuToggle.textContent = aberto ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("ativo");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

// ========================================
// INICIALIZAÇÃO
// ========================================

contatoWhatsApp.href = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent("Olá! Gostaria de conhecer os veículos da AutoPrime.")}`;
document.querySelector("#anoAtual").textContent = new Date().getFullYear();

carregarFiltros();
filtrarCarros();
mostrarFavoritos();
atualizarContadorFavoritos();
