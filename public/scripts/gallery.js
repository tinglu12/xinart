number_of_art = 15;
current_item = 10;
let art ="";



for (let i = 1; i <= current_item; i ++){
  art += `<div class = "art-g"><img class = "art-img" src = "Art/art (${i}).jpg"></div>`;
}

document.querySelector(".art-container").innerHTML = art
