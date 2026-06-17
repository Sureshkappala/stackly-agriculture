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

// Back To Top Button
const topBtn = document.getElementById("backToTop");

if(topBtn){

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

}

// Login Form Redirect
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const role = document.getElementById("role").value;

        if(role === "admin"){

            alert("Admin Login Successful");

            window.location.href = "admin-dashboard.html";

        }

        else if(role === "farmer"){

            alert("Farmer Login Successful");

            window.location.href = "farmer-dashboard.html";

        }

        else{

            alert("Please Select Role");

        }

    });

}

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