'use strict'
// assigning varaibles selectors
const modal = document.querySelector('.modal');
// const htmlModal = document.querySelector('.modal-0');
// const cssModal = document.querySelector('.css-modal');
// const gitModal = document.querySelector('.git-modal');
// const jsModal = document.querySelector('.js-modal');
// selector to blur the backround
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// showing modal
// const showHtml = document.querySelector('.show');
// const showCss = document.querySelector('.css-modal');
// const showGit = document.querySelector('.git-modal');
// const showJs = document.querySelector('.js-modal');

// function to show the modal
// const showModal =function(){
//     // modal.classList.remove("hidden");
//     // document.sec
//     overlay.classList.add("overlay");
// };

// function to hide modal 
// const hideModal = function (){
//     modal.classList.add("hidden");
//     overlay.classList.remove("hidden")
// };

for(let i=0; i<btnOpenModal.length; i++){

    btnOpenModal[i].addEventListener('click', function(){
        console.log('button clicked');
        // document.querySelector(`.modal-${i}`).classList.remove('hidden');
    });
}


    // btnCloseModal.addEventListener("click", hideModal);
    // overlay.addEventListener('click',hideModle);
//to  find the name of the key console log e object  and click that key to get the name, use inspect mode to find it in the console
// document.addEventListener('keydown', function (e) {
//     // check if escape key was clicked and  the modle is not hidden
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//       hideModleModal();
//     }
//   });