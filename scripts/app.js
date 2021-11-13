const translate = document.querySelectorAll(".translate");
const header__title = document.querySelector(".header__title");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const fade = document.querySelector("header");
const footer = document.querySelector(".footer");


let header_height = header.offsetHeight;
let fade_height = fade.offsetHeight;
let footer_height = fade.offsetHeight;


window.addEventListener('scroll', () => {
    //console.log("we have movement");
    let scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`
    })
        header__title.style.opacity = - scroll / (header_height / 9) + 1;
        fade.style.opacity = - scroll / (fade_height / 6) + 1;

        //main__title.style.opacity = + scroll / (header_height / 1) / 55;
        //nav.style.opacity = - scroll / (header_height / 9) + 1;
})

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("grid__img");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter__link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("filter-active");
    current[0].className = current[0].className.replace(" filter-active", "");
    this.className += " filter-active";
  });
}

var modalBtns = document.querySelectorAll('.grid__img');

modalBtns.forEach(function(btn){
      btn.onclick = function(){
      var modal = btn.getAttribute('data-modal');

      document.getElementById(modal).style.display = "flex";
    };
});   

var closeBtns = document.querySelectorAll(".modal__close");

closeBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = (btn.closest(".modal-holder").style.display = "none");
    };
});


var burgerBtn = document.querySelectorAll('.nav__burger-menu');

burgerBtn.forEach(function(btn){
      btn.onclick = function(){

      document.getElementById('burger').style.display = "flex";
    
    };
});   
