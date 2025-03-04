// Array is list of things you want to keep track of

const favoriteReptiles = ["gecko", "komodo dragon", "bearded dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);
// Starts at zero

console.log("First thing:", favoriteReptiles[0]);

console.log("IDK:", favoriteReptiles[9]);

console.log("# of favorite reptiles:", favoriteReptiles.length);

for (let i = 0; i < favoriteReptiles.length; i++) {
    const reptile = favoriteReptiles[i];
    console.log(reptile);
    
}

for (let i = favoriteReptiles.length - 1; i > - 1; i--){
    console.log("Index:", i);
}

