const when =[
    {
        id:1,
        img: "./image-quando/1921.jpg",
        title:"1921"
    },
    {
        id:2,
        img: "./image-quando/1953.jpg",
        title: "1953 / 1954"
    },
    {
        id:3,
        img: "./image-quando/1986.jpg",
        title: "1986"
    },
    {
        id:4,
        img: "./image-quando/2019.jpg",
        title: "2019 / 2020"
    },
    {
        id:5,
        img: "./image-quando/2053.jpg",
        title: "2053"
    }
]

const photowhen = when.map(function (item) {
    return `          
    <div id="container-who3">
    <div class="row3">
        <div id="cards3" class="img-card">
            <img class="photos" src=${item.img} alt="${item.title}">
            <br>
            <p class="subtitle">${item.title}</p>    
    </div>
    </div>    
</div>            
    `
})
document.getElementById("cards3").innerHTML = photowhen.join("");
console.log(photowhen)


