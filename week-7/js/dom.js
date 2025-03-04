const titleRef = document.getElementById("title");

console.log(titleRef);

const itemRef = document.getElementsByClassName("item");

console.log(itemRef);

const altTitleRef = document.querySelector("#title");

console.log(altTitleRef);

const items = document.querySelectorAll(".item");

console.log(items);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

titleRef.innerHTML = "DOM Manipulation >:)";

ulRef.innerHTML = "";

const melons = ["Cantaloupe", "Watermelon", "Muskmelon", "Regular Melon", "Blind Melon", "Honeydew",];

for (let i = 0; i < melons.length; i++) {
    const melon = melons[i];
    ulRef.innerHTML += "<li class='item' >" + melon + "</li>";
    
}

titleRef.style.backgroundColor = "red";
titleRef.style.color = "#ff0fff";
titleRef.style.fontSize = "32px";

document.querySelector("body > ul li").style.display = "block";

// when styling elements, keep property or else styling could get messed up - do not style a nav with flex to box

const firstARef = document.querySelector("a");

console.log("first a:", firstARef);
firstARef.href = "dom.html";
firstARef.setAttribute("target", "_blank");


