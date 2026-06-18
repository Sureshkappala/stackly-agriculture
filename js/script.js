window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const role = document.getElementById("role").value;

        if(role === "admin"){
            window.location.href = "admin-dashboard.html";
        }

        else if(role === "farmer"){
            window.location.href = "farmer-dashboard.html";
        }

        else{
            alert("Please select a role");
        }

    });

}
// Navbar Scroll Effect
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if(navbar){

        if(window.scrollY > 80){
            navbar.classList.add("scrolled");
        }else{
            navbar.classList.remove("scrolled");
        }

    }

});


// Password Show/Hide
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if(togglePassword && password){

    togglePassword.addEventListener("click", () => {

        const type =
        password.getAttribute("type") === "password"
        ? "text"
        : "password";

        password.setAttribute("type", type);

        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");

    });

}
window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".custom-navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if(hamburger && navLinks){

    hamburger.addEventListener("click", function(){

        navLinks.classList.toggle("active");

        document.body.classList.toggle("menu-open");
        document.documentElement.classList.toggle("menu-open");

    });

}
const navbarCollapse =
document.getElementById("navbarNav");

if(navbarCollapse){

    navbarCollapse.addEventListener("show.bs.collapse", function () {
        document.body.classList.add("menu-open");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
        document.body.classList.remove("menu-open");
    });

}

const navbarContent =
document.getElementById("navbarContent");

navbarContent.addEventListener("show.bs.collapse", function () {

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

});

navbarContent.addEventListener("hide.bs.collapse", function () {

    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2000);

});




