const loginForm = document.getElementById("loginForm");

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