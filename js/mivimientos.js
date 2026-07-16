// slider movimiento 

const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const card = document.querySelectorAll(".card");

let currentIndex = 0;

const cardWidth = card[0].offsetWidth + 20;

const maxindex = card.length - 4;

next.addEventListener("click" , () => {
    if(currentIndex < maxindex){
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };
});


prev.addEventListener("click" , () => {
    if(currentIndex > 0){
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };
});

// --------------------------------------------------------------------------