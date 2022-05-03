let APIURL = "https://my-json-server.typicode.com/mandim02/TP1"


function frontPageinteractions(){
    
    let utenteBtn = document.querySelector(".utente-front-page")
    let staffBtn = document.querySelector(".staff-front-page")

    utenteBtn.addEventListener("mouseover", function(){
        utenteBtn.classList.add("front-page-side-hovered");
    });

    utenteBtn.addEventListener("mouseout", function(){
        utenteBtn.classList.remove("front-page-side-hovered");
    } );


    utenteBtn.addEventListener("click", function(){
        document.querySelector(".front-page").classList.add("hidden");
        document.querySelector(".login").classList.remove("hidden");
        document.querySelector(".password-region").classList.add("hidden");
        document.getElementById("login-box-header-text").textContent = "Utente";
    })

    staffBtn.addEventListener("mouseover", function(){
        staffBtn.classList.add("front-page-side-hovered");
    });
    staffBtn.addEventListener("mouseout", function(){
        staffBtn.classList.remove("front-page-side-hovered");
    } );

    staffBtn.addEventListener("click", function(){
        document.querySelector(".front-page").classList.add("hidden");
        document.querySelector(".login").classList.remove("hidden");
        document.getElementById("login-box-header-text").textContent = "Staff"
        
    })
}

function loginFunction(){
    if (document.getElementById("login-box-header-text").textContent === "Utente"){
        let username = document.getElementById("login-form").username.value;
        let request = new XMLHttpRequest()
        request.open("GET", APIURL + "/utentes?name=" + username);
        request.send();
        request.onreadystatechange = (e) => {
            console.log(request.responseText)
        }
    }
    if (document.getElementById("login-box-header-text").textContent === "Staff"){
        let username = document.getElementById("login-form").username.value;
        let password = document.getElementById("login-form").password.value;
        let request = new XMLHttpRequest()
        request.open("GET", APIURL + "/stentes?name=" + username);
        request.send();
        request.onreadystatechange = (e) => {
            console.log(request.responseText)
        }
    }
    
    
    console.log("user:" + username + "Pass:" + password);
    return {username, password}
}

function setup(){
    frontPageinteractions();
}

setup();