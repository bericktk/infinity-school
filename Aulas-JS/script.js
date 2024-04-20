const formulario = document.querySelector("#formulario")

const marca = document.querySelector("#marca")
const modelo = document.querySelector("#modelo")
const ano_lanc = document.querySelector("#ano_lanc")
const cor = document.querySelector("#cor")
const ar = document.querySelector("#ar")

const cartoes = document.querySelector("#cartoes")



function montarCard(carro){

    const novo_carro = document.createElement("div")
    novo_carro.classList.add("card")

    const marca_carro = document.createElement("h2")
    marca_carro.textContent = `Marca: ${carro.marca}`

    const modelo_carro = document.createElement("p")
    modelo_carro.textContent = `Modelo: ${carro.modelo}`

    const ano_carro = document.createElement("p")
    ano_carro.textContent = `Ano de Lançamento: ${carro.ano}`

    const cor_carro = document.createElement("p")
    cor_carro.textContent = `Cor: ${carro.cor}`

    const ar_carro = document.createElement("p")
    ar_carro.textContent = `Possui ar: ${carro.ar ? "Sim" : "Não"}`

    novo_carro.appendChild(marca_carro)
    novo_carro.appendChild(modelo_carro)
    novo_carro.appendChild(ano_carro)
    novo_carro.appendChild(cor_carro)
    novo_carro.appendChild(ar_carro)


    cartoes.appendChild(novo_carro)

}

function cadastrarCarro(e){
    e.preventDefault()

    const carro_criado_agora = {
        marca: marca.value,
        modelo: modelo.value,
        ano: ano_lanc.value,
        cor: cor.value,
        ar: ar.checked
    }



    // AQUI EU BUSCO A LISTA DO LOCALSTORAGE QUE ESTA COMO STRING E TRANSFORMO EM ARRAY
    const lista = JSON.parse(localStorage.getItem("lista_de_carros")) || []

    // COLOCO O CARRO QUE ACABEI DE CRIAR NELA
    lista.push(carro_criado_agora)

    // ATUALIZO O LOCALSTORAGE COM A LISTA COM SEU NOVO ITEM TRANSFORMANDO EM STRING
    localStorage.setItem("lista_de_carros", JSON.stringify(lista) )



    montarCard(carro_criado_agora)


    marca.value = ""
    modelo.value = ""
    ano_lanc.value = ""
    cor.value = ""
    ar.checked = false
    
    marca.focus()
}


function carregarPagina(){
    // BUSCO A LISTA DO LOCAL STORANGE E TRANSFORMO ELA DE STRING PARA ARRAY
    const lista = JSON.parse(localStorage.getItem("lista_de_carros")) || []

    // PERCORRO ESSA LISTA E MONTO UM CARD COM CADA ITEM QUE VIER
    lista.forEach((item)=>{
        montarCard(item)
    })
}


formulario.addEventListener("submit", cadastrarCarro)

carregarPagina()





====================================================================================================================
VERSÃO NÃO OTIMIZADA
const formulario = document.querySelector("#formulario")

const marca = document.querySelector("#marca")
const modelo = document.querySelector("#modelo")
const ano_lanc = document.querySelector("#ano_lanc")
const cor = document.querySelector("#cor")
const ar = document.querySelector("#ar")

const cartoes = document.querySelector("#cartoes")


function cadastrarCarro(e){
    e.preventDefault()

    const carro_criado_agora = {
        marca: marca.value,
        modelo: modelo.value,
        ano: ano_lanc.value,
        cor: cor.value,
        ar: ar.checked
    }

    const lista = JSON.parse(localStorage.getItem("lista_de_carros")) || []

    lista.push(carro_criado_agora)

    localStorage.setItem("lista_de_carros", JSON.stringify(lista) )


    const novo_carro = document.createElement("div")
    novo_carro.classList.add("card")

    const marca_carro = document.createElement("h2")
    marca_carro.textContent = `Marca: ${marca.value}`

    const modelo_carro = document.createElement("p")
    modelo_carro.textContent = `Modelo: ${modelo.value}`

    const ano_carro = document.createElement("p")
    ano_carro.textContent = `Ano de Lançamento: ${ano_lanc.value}`

    const cor_carro = document.createElement("p")
    cor_carro.textContent = `Cor: ${cor.value}`

    const ar_carro = document.createElement("p")
    ar_carro.textContent = `Possui ar: ${ar.checked ? "Sim" : "Não"}`

    novo_carro.appendChild(marca_carro)
    novo_carro.appendChild(modelo_carro)
    novo_carro.appendChild(ano_carro)
    novo_carro.appendChild(cor_carro)
    novo_carro.appendChild(ar_carro)


    cartoes.appendChild(novo_carro)


    marca.value = ""
    modelo.value = ""
    ano_lanc.value = ""
    cor.value = ""
    ar.checked = false
    
    marca.focus()
}


function carregarPagina(){
    const lista = JSON.parse(localStorage.getItem("lista_de_carros")) || []

    lista.forEach((carro)=>{
        const novo_carro = document.createElement("div")
        novo_carro.classList.add("card")
    
        const marca_carro = document.createElement("h2")
        marca_carro.textContent = `Marca: ${carro.marca}`
    
        const modelo_carro = document.createElement("p")
        modelo_carro.textContent = `Modelo: ${carro.modelo}`
    
        const ano_carro = document.createElement("p")
        ano_carro.textContent = `Ano de Lançamento: ${carro.ano}`
    
        const cor_carro = document.createElement("p")
        cor_carro.textContent = `Cor: ${carro.cor}`
    
        const ar_carro = document.createElement("p")
        ar_carro.textContent = `Possui ar: ${carro.ar ? "Sim" : "Não"}`
    
        novo_carro.appendChild(marca_carro)
        novo_carro.appendChild(modelo_carro)
        novo_carro.appendChild(ano_carro)
        novo_carro.appendChild(cor_carro)
        novo_carro.appendChild(ar_carro)
    
    
        cartoes.appendChild(novo_carro)
    })
}


formulario.addEventListener("submit", cadastrarCarro)

carregarPagina()



===================================================================================================================
VERSÃO PARA SE DESAFIAR


const formulario = document.querySelector("#formulario")

const marca = document.querySelector("#marca")
const modelo = document.querySelector("#modelo")
const ano_lanc = document.querySelector("#ano_lanc")
const cor = document.querySelector("#cor")
const ar = document.querySelector("#ar")

const cartoes = document.querySelector("#cartoes")


function cadastrarCarro(e){
    e.preventDefault()
    
    const novo_carro = document.createElement("div")
    novo_carro.classList.add("card")

    const marca_carro = document.createElement("h2")
    marca_carro.textContent = `Marca: ${marca.value}`

    const modelo_carro = document.createElement("p")
    modelo_carro.textContent = `Modelo: ${modelo.value}`

    const ano_carro = document.createElement("p")
    ano_carro.textContent = `Ano de Lançamento: ${ano_lanc.value}`

    const cor_carro = document.createElement("p")
    cor_carro.textContent = `Cor: ${cor.value}`

    const ar_carro = document.createElement("p")
    ar_carro.textContent = `Possui ar: ${ar.checked ? "Sim" : "Não"}`

    novo_carro.appendChild(marca_carro)
    novo_carro.appendChild(modelo_carro)
    novo_carro.appendChild(ano_carro)
    novo_carro.appendChild(cor_carro)
    novo_carro.appendChild(ar_carro)


    cartoes.appendChild(novo_carro)


    marca.value = ""
    modelo.value = ""
    ano_lanc.value = ""
    cor.value = ""
    ar.checked = false
    
    marca.focus()
}



formulario.addEventListener("submit", cadastrarCarro)
