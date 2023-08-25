let number_of_art = 15;
let current_item = 10;
let art ="";
let grid = document.querySelector(".art-container");


for (let i = 1; i <= current_item; i ++){
  art += `<div class = "art-g"><img class = "art-img" src = "Art/art (${i}).jpg"></div>`;
}

grid.innerHTML = art

