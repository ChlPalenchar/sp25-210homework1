// Reference variables (referencing DOM/html pages)
const petsUlRef = document.querySelector("#pets");

// Data variables
const pets = ["Cat", "Dog", "Fox", "Mouse", "Snake", "Fish", "Bird"];
const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240",
    "https://picsum.photos/250",
    "https://picsum.photos/260",
];


console.table(pets);

// Loop through list

for (let i = 0; i < pets.length; i++) {
   const pet = pets[i];
   console.log(pet);

   const image = images[i];
   console.log(image);



   const imageHtml = "<image src='" + image + "' alt='' />";

   petsUlRef.innerHTML += "<li>" + pet + imageHtml + "</li>";
}


