let openModal = document.getElementById("open-modal")
let overlay = document.getElementById("overlay")
openModal.addEventListener("click", function(){
    overlay.style.display = "block"
})

let closeModal = document.getElementById("close-modal")
closeModal.addEventListener("click", function(){
    overlay.style.display = "none"
})

let funFact = document.getElementById("fun-fact")
let elseBtn = document.getElementById("else-btn")
elseBtn.addEventListener("click", function(){
    funFact.textContent = "Did you know that Mona Lisa has no eyebrows?"
})