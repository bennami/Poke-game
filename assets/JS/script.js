const intro = document.querySelector('.intro');
const guess = document.querySelector('.guessPokemon');
const catchPokemon =document.querySelector('.catchIt');

//on load fade out these sections
guess.classList.add("fadeOut");
catchPokemon.classList.add("fadeOut");

document.querySelector('.intro_Button').addEventListener('click', ()=>{
    intro.classList.add("fadeOut");
    guess.classList.add("fadeIn");

});

