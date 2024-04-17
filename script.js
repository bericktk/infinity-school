const img = document.querySelector('#cat-image')

function carregarImagem(){
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((resposta) => {
            return resposta.json()
        })
        .then((dados) => {
            img.src = dados[0].url
        })
}