let scrollContainer = document.querySelector(".galeri");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");



nextbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
})
backbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -=900;
})