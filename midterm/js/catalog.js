const catalogRef = document.querySelector("#catalog");

const catalogItems = [
    {image: "https://picsum.photos/200",
        name: "My First Fire",
    },
    {image: "https://picsum.photos/200",
        name: "Handy Hand",
    },
    {image: "https://picsum.photos/200",
        name: "Nap Sack",
    },
    {image: "https://picsum.photos/200",
        name: "Hot Tub Wildlife Feeder",
    },
    {image: "https://picsum.photos/200",
        name: "Toilet Meadow",
    },
    {image: "https://picsum.photos/200",
        name: "Pudding Pouch",
    },
];

catalogRef.innerHTML = "";
for (let i = 0; i < catalogItems.length; i++) {
    const item = catalogItems[i];
    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>";
    
    newArticle.innerHTML += newP;

    catalogRef.appendChild(newArticle);


    
}
