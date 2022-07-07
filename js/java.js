// porto elementi in js
const source = document.querySelector('#gallery');
const back = document.getElementById('back');
const next = document.getElementById('next');

// array
const imgList = [ "img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg" ]

let imgTag= '';
// ciclo For
for (i = 0; i < imgList.length ; i++) {
    imgTag += `<img src="${imgList[i]}" alt="landscape${i+1}" class="d-none">`
}

// porto in Dom
source.innerHTML = imgTag

// creo variabile di appoggio
let img = document.querySelectorAll('#gallery img')
let current = 0;
console.log(current);

// rendo visibile la prima immagine
img[current].classList.remove('d-none');
img[current].classList.add('active');

// bottone next con ritorno
next.addEventListener('click', function() {
    // cambio immagine e aggiusto le classi
    img[current].classList.remove('active');
    img[current].classList.add('d-none');
    //porto alla prima quando sono all'ultima
    if (current === img.length -1 ) {
        current = 0;
    }
    // incremento immagine current
    current++;
    img[current].classList.remove('d-none');
    img[current].classList.add('active');
})

// bottone back con ritorno
back.addEventListener('click', function() {
    // cambio immagine e aggiusto le classi
    img[current].classList.remove('active');
    img[current].classList.add('d-none');
    console.log(current)
    current--;
    // porto all'ultima quando sono all'ultima
    if (current < 0) {
        current = img.length -1;
        console.log(current)
    }
    // decremento immagine current

    img[current].classList.remove('d-none');
    img[current].classList.add('active'); 
})
