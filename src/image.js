const imagem = [
    {
        id:1,
        img: "./image/adam.jpg",
        title: "Adam"
    },

    {
        id: 2,
        img: "./image/bernadette.jpg",
        title: "Bernadette"
    },
    {
         id:3,
         img:"./image/charlotte.jpg",
         title: "Charlotte"
    },
    {
        id:4,
        img: "./image/clausen.jpg",
        title: "Clausen"
    },
    {
        id: 5,
        img: "./image/derfremde.jpg",
        title: "JONAS ADULTO"
    },
    {
         id:6,
         img:"./image/doppler_bernd.jpg",
         title: "BERND DOPPLER"
    },
    {
        id:7,
        img: "./image/doppler_elisabeth.jpg",
        title: "ELISABETH DOPPLER"
    },
    {
        id:8,
        img: "./image/doppler_franziska.jpg",
        title: "FRANZISKA DOPPLER"
    },
    {
        id:9,
        img: "./image/doppler_greta.jpg",
        title: "GRETA DOPPLER"
    },
    {
        id:10,
        img: "./image/doppler_helge.jpg",
        title: "HELGE DOPPLER"
    },
    {
        id:11,
        img: "./image/doppler_peter.jpg",
        title: "PETER DOPPLER"
    },
    {
        id:12,
        img: "./image/gretchen.jpg",
        title: "GRENTCHEN"
    },
    {
        id:13,
        img: "./image/kahnwald_daniel.jpg",
        title: "DANIEL KAHNWALD"
    },
    {
        id:14,
        img: "./image/kahnwald_hannah.jpg",
        title: "HANNAH KAHNWALD"
    },
    {
        id:15,
        img: "./image/kahnwald_ines.jpg",
        title: "INES KAHNWALD"
    },
    {
        id:16,
        img: "./image/kahnwald_jonas.jpg",
        title: "JONAS KAHNWALD"
    },
    {
        id:17,
        img: "./image/kahnwald_michael.jpg",
        title: "MICHAEL KAHNWALD"
    },
    {
        id:18,
        img: "./image/nielsen_agnes.jpg",
        title: "AGNES NIELSEN"
    },
    {
        id:19,
        img: "./image/nielsen_jana.jpg",
        title: "JANA NIELSEN"
    },
    {
        id:20,
        img: "./image/nielsen_katharina.jpg",
        title: "KATHARINA NIELSEN"
    },
    {
        id:21,
        img: "./image/nielsen_mads.jpg",
        title: "MADS NIELSEN"
    },
    {
        id:22,
        img: "./image/nielsen_magnus.jpg",
        title: "MAGNUS NIELSEN"
    },
    {
        id:23,
        img: "./image/nielsen_martha.jpg",
        title: "MARTHA NIELSEN"
    },
    {
        id:24,
        img: "./image/nielsen_mikkel.jpg",
        title: "MIKKEL NIELSEN"
    },
    {
        id:25,
        img: "./image/nielsen_tronte.jpg",
        title: "TRONTE NIELSEN"
    },
    {
        id:26,
        img: "./image/nielsen_ulrich.jpg",
        title: "ULRICH NIELSEN"
    },
    {
        id:27,
        img: "./image/noah.jpg",
        title: "NOAH"
    },
    {
        id:28,
        img: "./image/relogeiro.jpg",
        title: "RELOJOEIRO"
    },
    {
        id:29,
        img: "./image/silja.jpg",
        title: "SILJA"
    },
    {
        id:30,
        img: "./image/teidemann_regina.jpg",
        title: "REGINA TIEDEMANN"
    },
    {
        id:31,
        img: "./image/tiedemann_aleksander.jpg",
        title: "ALEKSANDER TIEDEMANN"
    },
    {
        id:32,
        img: "./image/tiedemann_bartosz.jpg",
        title: "BARTOSZ TIEDEMANN"
    },
    {
        id:33,
        img: "./image/tiedemann_claudia.jpg",
        title: "CLAUDIA TIEDEMANN"
    },
    {
        id:34,
        img: "./image/tiedemann_doris.jpg",
        title: "DORIS TIEDEMANN"
    },
    {
        id:35,
        img: "./image/tiedemann_egon.jpg",
        title: "EGON TIEDEMANN"
    },
    {
        id:36,
        img: "./image/woller.jpg",
        title: "WOLLER"
    }
]

//const foto = document.createElement("IMG")
const photo = imagem.map(function (item) {
    return `          
    <div id="container-who">
    <div class="row">
        <div id="cards" class="img-card">
            <img class="photos" src=${item.img} alt="${item.title}">
            <br>
            <p class="subtitle">${item.title}</p>    
    </div>
    </div>    
</div>            
    `
})
document.getElementById("cards").innerHTML = photo.join("");
console.log(photo)



{/* <div id="cards" class="img-card">
<div class="juntos">
  <img class="photos" src=${item.img} alt="">
  <p class="subtitle"> ${item.title}</p>

</div> */}