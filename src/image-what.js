const what = [
    {
        id:1,
        img:"./image-oq/tokill.jpg",
        title: "Pleasure to kill"
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


