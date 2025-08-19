let h1= document.querySelector("h1");
window.addEventListener("keydown", function(det){
    h1.textContent=det.key;
});
