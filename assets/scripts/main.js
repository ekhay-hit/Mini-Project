'use strict'
 // assigning varaibles selectors
 const modal = document.querySelector(".modal");
 
 // const htmlModal = document.querySelector('.modal-0');
 // const cssModal = document.querySelector('.css-modal');
 // const gitModal = document.querySelector('.git-modal');
 // const jsModal = document.querySelector('.js-modal');
 // selector to blur the backround
 const overlay = document.querySelector(".overlay");
 const btnCloseModal = document.querySelectorAll(".close-modal");
 const btnOpenModal = document.querySelectorAll(".show-modal");

 // showing modal
 // const showHtml = document.querySelector('.show');
 // const showCss = document.querySelector('.css-modal');
 // const showGit = document.querySelector('.git-modal');
 // const showJs = document.querySelector('.js-modal');

 //function to show the modal
 // const showModal =function(i){
 //   document.querySelector(`.modal-${i}`).classList.remove('hidden');
 //     overlay.classList.add("overlay");
 // };

 // function to hide modal
 // const hideModal = function (i){
 //   document.querySelector(`.modal-${i}`).classList.add('hidden');
 //     overlay.classList.remove("hidden")
 // };

 for (let i = 0; i < btnOpenModal.length; i++)
   // btnOpenModal.addEventListener("click", showModal(i));
   // btnCloseModal.addEventListener("click", hideModal(i));
   btnOpenModal[i].addEventListener("click", function () {
     // checking if hidden class not exist and adding it before removing from clicked topic
     for (let i = 0; i < btnOpenModal.length; i++) {
       if (
         !document
           .querySelector(`.modal-${i}`)
           .classList.contains("hidden")
       ) {
         document.querySelector(`.modal-${i}`).classList.add("hidden");
         overlay.classList.add("hidden");
       }
     }
     // after all hidden class been removed. adding the class to the appropriate topic
     document.querySelector(`.modal-${i}`).classList.remove("hidden");
     overlay.classList.remove("hidden");
     console.log(i);
   });

 for (let i = 0; i < btnOpenModal.length; i++)
   btnCloseModal[i].addEventListener("click", function () {
     document.querySelector(`.modal-${i}`).classList.add("hidden");
     overlay.classList.add("hidden");
   });

 for (let i = 0; i < btnOpenModal.length; i++)
   overlay.addEventListener("click", function () {
     document.querySelector(`.modal-${i}`).classList.add("hidden");
     overlay.classList.add("hidden");
   });

 // to  find the name of the key console log e object  and click that key to get the name, use inspect mode to find it in the console
 for (let i = 0; i < btnOpenModal.length; i++)
   document.addEventListener("keydown", function (e) {
     // check if escape key was clicked and  the modle is not hidden
     if (
       !document.querySelector(`.modal-${i}`).classList.contains("hidden")
     ) {
       if (e.key === "Escape")
         document.querySelector(`.modal-${i}`).classList.add("hidden");
       overlay.classList.add("hidden");
     }
   });