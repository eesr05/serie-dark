const what = [
    {
        id:1,
        img:"./image-oq/sic.jpg",
        title: "SIC MUNDUS"
    },
    {
        id:2,
        img:"./image-oq/barris.jpg",
        title: "BARRIS"
    },
    {
        id:3,
        img:"./image-oq/bunkerentrada.jpg",
        title: "ENTRADA BUNKER"
    },
    {
        id:4,
        img:"./image-oq/cadeirabunker.jpg",
        title: "CADEIRA BUNKER"
    },
    {
        id:5,
        img:"./image-oq/cadernocouro.jpg",
        title: "CADERNO"
    },
    {
        id:6,
        img:"./image-oq/cartadespedida.jpg",
        title: "CARTA MIKKEL"
    },
    {
        id:7,
        img:"./image-oq/cartaz.jpg",
        title: "CRIANÇAS DESAPARECIDAS"
    },
    {
        id:8,
        img:"./image-oq/casajonas.jpg",
        title: "CASA DOS KAHNWALD"
    },
    {
        id:9,
        img:"./image-oq/casamikkel.jpg",
        title: "CASA DOS NIELSEN"
    },
    {
        id:10,
        img:"./image-oq/caverna.jpg",
        title: "CAVERNA"
    },
    {
        id:11,
        img:"./image-oq/chocolate.jpg",
        title: "RAIDER"
    },
    {
        id:12,
        img:"./image-oq/colar.jpg",
        title: "MOEDA"
    },
    {
        id:13,
        img:"./image-oq/gun.jpg",
        title: "ARMA"
    },
    {
        id:14,
        img:"./image-oq/hotel.jpg",
        title: "WALDHOTEL WINDEN"
    },
    {
        id:15,
        img:"./image-oq/igreja.jpg",
        title: "IGREJA E CEMITÉRIO"
    },
    {
        id:16,
        img:"./image-oq/livro.jpg",
        title: "UMA VIAGEM NO TEMPO"
    },
    {
        id:17,
        img:"./image-oq/machine.jpg",
        title: "A MÁQUINA DO TEMPO"
    },
    {
        id:18,
        img:"./image-oq/passaromorto.jpg",
        title: "ANIMAIS MORTOS"
    },
    {
        id:19,
        img:"./image-oq/plutonio.jpg",
        title: "PARTÍCULA DE DEUS"
    },
    {
        id:20,
        img:"./image-oq/relogio.jpg",
        title: "RELÓGIO DE BOLSO DOURADO"
    },
    {
        id:21,
        img:"./image-oq/textsics.jpg",
        title: "A TÁBUA DE ESMERALDA"
    },
    {
        id:22,
        img:"./image-oq/tokill.jpg",
        title: "PLEASURE TO KILL "
    },
    {
        id:23,
        img:"./image-oq/triqueta.jpg",
        title: "TRIQUETA"
    },
    {
        id:24,
        img:"./image-oq/usina.jpg",
        title: "USINA"
    },
    {
        id:25,
        img:"./image-oq/pingente.jpg",
        title: "PINGENTE DE PRATA"
    }
]

const photowhat = what.map(function (item) {
    return `          
    <div id="container-who2">
    <div class="row2">
        <div id="cards2" class="img-card">
            <img class="photos" src=${item.img} alt="${item.title}">
            <br>
            <p class="subtitle">${item.title}</p>    
    </div>
    </div>    
</div>            
    `
})
document.getElementById("cards2").innerHTML = photowhat.join("");
console.log(photowhat)


