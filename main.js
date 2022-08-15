const current = document.querySelector('#current');
const selected = document.querySelectorAll('.img-container img');

console.log(selected);
const opacity = 0.5;
selected.forEach(selected => {
    selected.addEventListener('click', imgClick);
})


function imgClick(e) {

    selected.forEach(selected => {selected.style.opacity = 1;})
    current.src = e.target.src;

    fade();
    
    e.target.style.opacity = opacity;
}
function fade() {
    current.classList.add('fade-in');
    setTimeout(() =>{
        current.classList.remove('fade-in');
    }, 500);
}

const totalImages = selected.length;
let index = 0;
const opac = setInterval(() =>{
    current.src = selected[index].src;
    fade();
    index++;
    if (index === totalImages) index = 0;
   
}, 3000);


    

opac();





// for(let i = 0; i < selected.length; i++) {
    //     if(selected.length[i] > 0) {
    //         current.src = selected.src[i];
    //     }
    //     else{
    //         selected.src = current.src;
    //     }
    // }
    // return current.src;