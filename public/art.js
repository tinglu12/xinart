number_of_art = 15;
let art ="";

for (let i = 1; i <= number_of_art; i ++){
  art += `<div class = "art-g"><img class = "art-g" src = "Art/art (${i}).jpg"></div>`;
}

document.querySelector(".art-container").innerHTML = art
