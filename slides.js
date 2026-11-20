let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ["about_me_slide", "fireworks_slides", "western_slides", 
    "outdoors_slides", "custom_slides", "materials"]

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);



function currentSlide(index, id){
    showSlides(slideIndex[id] = index, id);
}

function moveSlides(index, id){
    showSlides(slideIndex[id]+=index, id);
}

function showSlides(index, id){
    let i;
    let slide = document.getElementsByClassName(slideId[id]);
    if (index > slide.length) {slideIndex[id] = 1}
    if (index < 1) {slideIndex[id] = slide.length}
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[slideIndex[id]-1].style.display = "block";
}

// <==================================DO NOT EDIT==================================>
// <==========Original functional code just incase the code above breaks===========>
// let slideIndex = [1, 1, 1, 1, 1];
// let slideId = ["fireworks_slides", "western_slides", "outdoors_slides", "custom_slides", "materials"]

// showSlides(1, 0);
// showSlides(1, 1);
// showSlides(1, 2);
// showSlides(1, 3);
// showSlides(1, 4);

// function currentSlide(index, id){
//     showSlides(slideIndex[id] = index, id);
// }

// function moveSlides(index, id){
//     showSlides(slideIndex[id]+=index, id);
// }

// function showSlides(index, id){
//     let i;
//     let slide = document.getElementsByClassName(slideId[id]);
//     if (index > slide.length) {slideIndex[id] = 1}
//     if (index < 1) {slideIndex[id] = slide.length}
//     for(i = 0; i < slide.length; i++){
//     slide[i].style.display = "none";
//     }
//     slide[slideIndex[id]-1].style.display = "block";
// }