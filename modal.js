
// get modal element
var modal = document.getElementById("simplemodal");

// get open modal button 
var modalBtn = document.getElementById("modal-btn");

//get close button 
var closeBtn = document.getElementsByClassName("closebtn")[0];

// listen for open click 
modalBtn.addEventListener("click", openModal);

// listen for close click 
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// listen for close click 
window.addEventListener("click", outsideClick);


//function to close modal if clicked outside

function outsideClick(a) {
    if (a.target == modal) {
        modal.style.display = "none";
    }
}

/**** ***************************************************************** */


var modal2 = document.getElementById("simplemodal2");

var modalBtn2 = document.getElementById("modal-btn2");

var closeBtn22 = document.getElementsByClassName("closeBtn2")[0];

modalBtn2.addEventListener("click", openModal2);


function openModal2() {
    modal2.style.display = "block";
}
closeBtn22.addEventListener("click", closeModal);

function closeModal() {
    modal2.style.display = "none";
}

window.addEventListener("click", outsideClick2);

function outsideClick2(a) {
    if (a.target == modal2) {
        modal2.style.display = "none";
    }
}
