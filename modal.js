
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