
const toggle= document.querySelector(".nav-toggle")
const menuTarget= document.querySelector(".nav-menu")

toggle.addEventListener(("click"), function(){
   // Toggle between 'block' and 'none' for menu display
   if (menuTarget.style.display === "block") {
    menuTarget.style.display = "none";
} else {
    menuTarget.style.display = "block";
}
})