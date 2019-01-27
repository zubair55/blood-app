  
// console.log(firebase)

let signUpBtn = document.getElementById("signUp")
signUpBtn.addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let blood = $('input[name="blood"]:checked').val();
    // let Acceptor = document.getElementById("Acceptor").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let bgroup = $('input[name="bgroup"]:checked').val();
    document.getElementById("loaders").style.display = 'block'
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            let userObj = {
                name,
                address,
                email,
                password,
                // Donor,
                blood,
                bgroup
            }
//             if(userObj.blood=="Donor"){
//                 let userUid = firebase.auth().currentUser.uid
//                 let d = firebase.database().ref('donor/' + userUid)
//                      .set(userObj)
//                      .then(() => {
//                          document.getElementById("loaders").style.display = 'none'
//                          localStorage.setItem("userButh",JSON.stringify(d)) //new add
//                          swal({
//                              title: "Welcome",
//                              text: "You can use this email to procceed more features",
//                              icon: "success",
//                              button: "Done",
//                          }).then(() => {
//                              window.location = '../pages/signIn.html'
//                          })
//                      })
//                  // console.log(success, "success")
     
//              })
//              .catch((error) => {
//                  document.getElementById("loaders").style.display = 'none'
//                  // Handle Errors here.
//                  var errorCode = error.code;
//                  var errorMessage = error.message;
//                  // console.log(errorMessage)
//                  swal({
//                      title: "Error",
//                      text: errorMessage,
//                      icon: "error",
//                      button: "Ok",
//                  });
//                  // ...
//              });
//      })}else{
//         let userUid = firebase.auth().currentUser.uid
//         let a = firebase.database().ref('acceptor/' + userUid)
//              .set(userObj)
//              .then(() => {
//                  document.getElementById("loaders").style.display = 'none'
//                  localStorage.setItem("userButh",JSON.stringify(a)) //new add
//                  swal({
//                      title: "Welcome",
//                      text: "You can use this email to procceed more features",
//                      icon: "success",
//                      button: "Done",
//                  }).then(() => {
//                      window.location = '../pages/signIn.html'
//                  })
//              })
//          // console.log(success, "success")

//      })
//      .catch((error) => {
//          document.getElementById("loaders").style.display = 'none'
//          // Handle Errors here.
//          var errorCode = error.code;
//          var errorMessage = error.message;
//          // console.log(errorMessage)
//          swal({
//              title: "Error",
//              text: errorMessage,
//              icon: "error",
//              button: "Ok",
//          });
//          // ...
//      });
// })
//      }
            let userUid = firebase.auth().currentUser.uid
           let b = firebase.database().ref('users/'+userObj.blood+"/" + userUid)
                .set(userObj)
                .then(() => {
                    document.getElementById("loaders").style.display = 'none'
                    localStorage.setItem("userButh",JSON.stringify(b)) //new add
                    swal({
                        title: "Welcome",
                        text: "You can use this email to procceed more features",
                        icon: "success",
                        button: "Done",
                    }).then(() => {
                        window.location = '../pages/signIn.html'
                    })
                })
            // console.log(success, "success")

        })
        .catch((error) => {
            document.getElementById("loaders").style.display = 'none'
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(errorMessage)
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: "Ok",
            });
            // ...
        });
})
