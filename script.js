function showMessage() { 
    alert("Hello! Welcome to my website."); 
}
    
function changeBgColor() { 
    document.body.style.backgroundColor = "lightblue"; 
    }

function displayGreeting() {
        let name = document.getElementById("nameInput").value;
        document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to my website!";
      }
      
function changeBgColorUser(){
          let color = document.getElementById("colorInput").value;
          document.body.style.backgroundColor= color
      }

function checkAge() {
        let age = document.getElementById("ageInput").value;
        if (age >= 18) {
            alert("You're an adult!");
        } else {
            alert("You're still a kid!");
        }
    }
function favorite() {
        document.getElementById("message").textContent = "You favorited this!";
      }
      
      function unfavorite() {
        document.getElementById("message").textContent = "";
      }