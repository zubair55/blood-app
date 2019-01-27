
// console.log(firebase)

let signInBtn = document.getElementById("signIn")
signInBtn.addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("loaders").style.display = 'block'
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((success) => {
            console.log(success)
            document.getElementById("loaders").style.display = 'none'
            
            localStorage.setItem("userAuth",JSON.stringify(success))

            var favDrink = prompt("ENTER 'd' For Donor \nENTER 'a' For Acceptor");
switch(favDrink) {
  case "d":
  location.href = 'home.html'
    break;
  case "a":
  location.href = 'donor.html'
    break;
  
  default:
    alert("Wrong Input");
    break;
}
            
           
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: "Ok",
            });
            // ...
        });
})

