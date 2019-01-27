
window.addEventListener('load', async () => {
    await authCheck()
    getAllTask()
})

async function authCheck() {
    let get = await localStorage.getItem("userAuth");
    let data = JSON.parse(get)
    console.log(data)
    if (data.user !== "null") {
        document.getElementById("signin").style.display = 'none'
        document.getElementById("logout").style.display = 'block'
        // document.getElementById("auth").innerHTML = "Welcome <span>" + data.user.email + "</span>"
    } else {
        document.getElementById("signin").style.display = 'block'
        document.getElementById("logout").style.display = 'none'
        document.getElementById("auth").innerHTML = "You dont have Permision to see News"
    }
}

function getParent(snapshot) {
    var ref = snapshot.ref();
    return ref.parent().name();
  }

function showdonor(){
    arrayb = []
    let getb = localStorage.getItem("userButh");
    let data = JSON.parse(getb)

    firebase.database().ref('users/'+"Donor")
        .once("value", (dataa) => {
            // console.log(dataa.val())
            let userTaskb = dataa.val()
            
            
            for (let key in userTaskb) {
                namee = userTaskb[key].name
                // alert(namee)
                userTaskb[key].keyId = key
                arrayb.push(userTaskb[key])
                let objTo = document.getElementById('main');
                let divtest = document.createElement("div");
                divtest.style.color="black";
                divtest.style.height="180px";
                divtest.style.width="auto";
                divtest.style.marginLeft="20px";
                divtest.style.fontSize="20px";
                divtest.style.marginTop="30px";

                divtest.innerHTML = "NAME : " + userTaskb[key].name + "<br>Email : " + userTaskb[key].email +  "<br>Type : " + userTaskb[key].blood + "<br>Blood Group : " + userTaskb[key].bgroup + "<br>Address : " + userTaskb[key].address + ` <br><button class='btn btn-info' onclick='dlt(this)' id=${key} style='margin-top:-2px;margin-bottom:440px'>Accept</button><hr style='width:300px;margin:auto;background-color:black;height:2px;margin-top:20px;'>`;
                
                document.getElementById("auth").innerHTML = "<span id='an' style='border:2px solid black;padding:10px;border-radius:10px'>Welcome " + userTaskb[key].name + "</span>"


                    objTo.appendChild(divtest);
            }
        })}
        
//             from here
/* <button class='btn btn-info' onclick='dlt()' id='b' style='margin-top:-40px;margin-bottom:440px' value="+child.key+">Accept</button>
//             console.log(arrayb[1]) */
//             for(var i=0;i<100;i++) {
               
//                 var objTo = document.getElementById('main');
//                 var divtest = document.createElement("div");
//                 divtest.style.color="black";
//                 divtest.style.height="180px";
//                 divtest.style.width="auto";
//                 divtest.style.marginLeft="20px";
//                 divtest.style.fontSize="20px";
//                 divtest.style.marginTop="30px";
//                 var xx=arrayb[i].blood;
                

                

//                 if(xx=="Donor") {
//                     var ref = firebase.database().ref('users');
// ref.orderByChild('email').equalTo(arrayb[i].email).on("value", function(snapshot) {
//   snapshot.forEach((function(child) {  
    // var x=0;
    // for(var i=0;i<1;i++) {
// var objTo1 = document.getElementById('main');


//     x++;
//                 var divtest1 = document.createElement("div");
                
//                 divtest1.innerHTML = "<button class='btn btn-info' onclick='dlt()' id='b' style='margin-top:-40px;margin-bottom:440px' value="+child.key+">Accept</button>";
//                 divtest1.style.fontSize="30px";
    
//                 objTo1.appendChild(divtest1); 
//     }
// })); 
// });
// from here
//                     divtest.innerHTML = "NAME : " + arrayb[i].name + "<br>Email : " + arrayb[i].email +  "<br>Type : " + arrayb[i].blood + "<br>Blood Group : " + arrayb[i].bgroup + "<br>Address : " + arrayb[i].address + " <br><button class='btn btn-info' onclick='dlt()' id='b' style='margin-top:-40px;margin-bottom:440px' value="+child.key+">Accept</button><hr style='width:300px;margin:auto;background-color:black;height:2px;margin-top:20px;'>";
            
//                     objTo.appendChild(divtest);
             
     
// else {

// }}        
                    
// })
// }

function show(){
    arrayb = []
    let getb = localStorage.getItem("userButh");
    let data = JSON.parse(getb)

    firebase.database().ref('users/'+"Acceptor")
        .once("value", (dataa) => {
            // console.log(dataa.val())
            let userTaskb = dataa.val()
            
            
            for (let key in userTaskb) {
                namee = userTaskb[key].name
                // alert(namee)
                userTaskb[key].keyId = key
                arrayb.push(userTaskb[key])
                let objTo = document.getElementById('main');
                let divtest = document.createElement("div");
                divtest.style.color="black";
                divtest.style.height="180px";
                divtest.style.width="auto";
                divtest.style.marginLeft="20px";
                divtest.style.fontSize="20px";
                divtest.style.marginTop="30px";

                divtest.innerHTML = "NAME : " + userTaskb[key].name + "<br>Email : " + userTaskb[key].email +  "<br>Type : " + userTaskb[key].blood + "<br>Blood Group : " + userTaskb[key].bgroup + "<br>Address : " + userTaskb[key].address + " <br><button class='btn btn-info' onclick='dlte(this)' id=${key} style='margin-top:-2px;margin-bottom:440px'>Donate</button>";
                document.getElementById("auth").innerHTML = "<span id='an' style='border:2px solid black;padding:10px;border-radius:10px'> Welcome " + userTaskb[key].name + "</span>"
                    objTo.appendChild(divtest);
    }})}
// })); 
// });
//                     divtest.innerHTML = "NAME : " + arrayb[i].name + "<br>Email : " + arrayb[i].email +  "<br>Type : " + arrayb[i].blood + "<br>Blood Group : " + arrayb[i].bgroup + "<br>Address : " + arrayb[i].address + " <br><hr style='width:300px;margin:auto;background-color:black;height:2px;margin-top:20px;'>";
            
//                     objTo.appendChild(divtest);
//             }
//             else {

//             }              
            
//             }         
// })
// }
// function show(){
//     let userUid = firebase.auth().currentUser.uid
//     if (userUid !== null || userUid !== undefined) {
//         // let name = document.getElementById("name").value
//         // let message = document.getElementById("message").value

//         // let post = {
//         //     name,
//         //     message
//         // }
//         let get = localStorage.getItem("userButh");
//     let data1 = JSON.parse(get)
//         let posts = document.getElementById("name1")
//         firebase.database().ref('users/' + userUid)
//             .push(data1)
//             .then((succ) => {
//                 firebase.database().ref('users/' + userUid)
//                     .once("value", (data) => {
//                         console.log(data)
//                         let userData = data.val()
//                         console.log(userData)
//                         for(var key in userData){
//                             var names = userData[key].name;
//                             var email = userData[key].email;

//                             var p=document.createElement('p');
//                             p.setAttribute("id","data");
//                             p.innerText="NAME : " + names + "\nEmail : " + email;
//                             document.body.appendChild(p);
                            
//                         }
//                     })
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             })
//     }
// }

let ul = document.getElementById('tsk');
var arrays = [];
function getAllTask() {
    arrays = []
    let get = localStorage.getItem("userAuth");
    let data = JSON.parse(get)
    firebase.database().ref("mytask/" + data.user.uid)
        .once("value", (data) => {
            let userTask = data.val();
            // console.log(userTask)
            for (let key in userTask) {
                
                userTask[key].keyId = key
                arrays.push(userTask[key])
               
            }
            console.log(arrays)
            ul.innerHTML = arrays.map((v) => `<li key="${v.keyId}" class="list-group-item">${v.task} <button onClick="deleteTask(this)">Delete</button></li>`)
        })  
}


// function deleteTask(e) {
//     console.log(e.parentNode.getAttribute('key'))
//     let node = e.parentNode.getAttribute('key')
//     let get = localStorage.getItem("userButh");
//     let data = JSON.parse(get)
//     console.log(data.user.uid)
//     firebase.database().ref("users/" + data.user.uid).child(node).remove()
//         .then(() => {
//             getAllTask()
//         })
// }

function dlt(e){
console.log(e.id)
    
    firebase.database().ref("users/"+"Donor/"+e.id).remove()
    .then(function(){
        alert("Blood Accepted");
        location.reload();
    }).catch(function(error) {
        alert("FAIL");
    })
}

function dlte(e){
    console.log(e.id)
        
        firebase.database().ref("users/"+"Acceptor/"+e.id).remove()
        .then(function(){
            alert("Blood Donated");
            location.reload();
        }).catch(function(error) {
            alert("FAIL");
        })
    }



function logOut() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.setItem("userAuth", JSON.stringify({ user: "null" }))

            window.location = "../pages/signIn.html"
            // Sign-out successful.
        }).catch((error) => {
            let message = error.message;
            console.log(message)
            // An error happened.
        });
}


// function createPost() {
//     let userUid = firebase.auth().currentUser.uid
//     if (userUid !== null || userUid !== undefined) {
//         let name = document.getElementById("name").value
//         let message = document.getElementById("message").value

//         let post = {
//             name,
//             message
//         }
//         let posts = document.getElementById("posts")
//         firebase.database().ref('post/' + userUid)
//             .push(post)
//             .then((succ) => {
//                 firebase.database().ref('post/' + userUid)
//                     .once("value", (data) => {
//                         console.log(data)
//                         let userData = data.val()
//                         console.log(userData)
//                         for(var key in userData){
//                             let names = userData[key].name
//                             let messages = userData[key].message

//                             posts.innerHTML += `
//                             <div class="card bg-primary text-white">
//                                 <strong >${names}</strong>
//                                 <div class="card-body" >${messages}</div>
//                             </div>
//                             `
//                         }
//                     })
//             })
//             .catch((error) => {
//                 console.log(error.message)
//             })
//     }
// } 


function addTask() {
    let task = document.getElementById("task").value;
    let userUid = firebase.auth().currentUser.uid
    if (userUid !== null) {
        let time = firebase.database.ServerValue.TIMESTAMP
        let taskObj = {
            task,
            time
        }
        console.log(taskObj, "taskObj")
        firebase.database().ref("mytask/" + userUid)
            .push(taskObj)
            .then((succ) => {
                getAllTask()
                console.log(succ, "data saved")
            })
            .catch((err) => {
                console.log(err.message)
            })
    } else {

    }
}
