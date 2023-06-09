import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import{getDatabase, set, update, ref, get} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { firebaseConfig } from "./firebase_example.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const myForm = document.querySelector(".form")
const myMain = document.querySelector(".main")
console.log(myMain);



const registerNewUser = (e) => {
 e.preventDefault();
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 console.log(email);
 console.log(password);




 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
 const user = userCredential.user;




 const loginTime = new Date();
 set(ref(database, "users/" + user.uid), {
 email: email,
 role: "simple_user",
 timestamp: `${loginTime}`
 });
 console.log("New User Created", user)
 })
 .catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
 console.log(errorMessage);

 });

}




const loginUser = (e) => {
 e.preventDefault();
 const login_email = document.getElementById("email").value
 const login_password = document.getElementById("password").value




 signInWithEmailAndPassword(auth, login_email, login_password)
 .then((userCredential) => {
 const user = userCredential.user;
 const loginTime = new Date();
 update(ref(database, "users/" + user.uid), {
    last_login: loginTime
 })
 console.log(user, "Login successful");




})

 .catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
 console.log(errorMessage);


 });



}


const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
 if (user) {
 const uid = user.uid;
 creating();
get(ref(database, "users/" + user.uid))
.then((snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data.role === "admin") {
        console.log("radom admin")
        admin();
 
function addingDate(e) {
    e.preventDefault();
    const myCategory = document.getElementById("category").value;
set(ref(database, 'category/' + myCategory), {
category: myCategory
  }).then(() => {
alert("Added Susseccfully");
  })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
})
}
document.getElementById("insertCategory").addEventListener("click", addingDate);

    }else{
        normalUsers()
        console.log("paprastasis mirtingasis")
    }
})
 } else {
 console.log("User is signed out");
 creatingForm();
document.getElementById("signUp").addEventListener("click", registerNewUser);
document.getElementById("signIn").addEventListener("click", loginUser);

}

})


const logOut = (e) => {
 e.preventDefault();
 signOut(auth).then(() => {
 console.log("Logged out Successfully")
 }).catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
 console.log(errorMessage);

 })

}



function creating() {
 myMain.innerHTML = "";
 const btnLogout = document.createElement("button");
 btnLogout.textContent = "Logout";
 btnLogout.classList.add("signOut");
 myMain.appendChild(btnLogout);
 btnLogout.addEventListener("click", logOut);

}


function creatingForm() {
 myMain.innerHTML = "";
 const title = document.createElement("h2");
 const username = document.createElement("input");
 const email = document.createElement("input");
 const password = document.createElement("input");
 const newForm = document.createElement("form");
 username.setAttribute("type", "text");
 username.setAttribute("id", "username");
 username.setAttribute("placeholder", "username");
 email.setAttribute("type", "text");
 email.setAttribute("id", "email");
email.setAttribute("placeholder", "email");
password.setAttribute("type", "password");
password.setAttribute("id", "password");
 password.setAttribute("placeholder", "password");
title.textContent = "Register";
 newForm.classList.add("form")
const signUp = document.createElement("button");
 signUp.textContent = "Sign Up";
signUp.classList.add("signUp");
 signUp.setAttribute("id", "signUp");
 const signIn = document.createElement("button");
 signIn.textContent = "Sign In";
 signIn.classList.add("signIn");
 signIn.setAttribute("id", "signIn");
newForm.appendChild(title);
 newForm.appendChild(username);
newForm.appendChild(email);
 newForm.appendChild(password);
 newForm.appendChild(signUp);
 newForm.appendChild(signIn);
 myMain.appendChild(newForm);

}



// creatingForm();

function admin() {
    const category = document.createElement("input");
    const categoryLabel = document.createElement("label");
    const insertButton = document.createElement("button");
    insertButton.textContent = "Prideti kategorija";
    insertButton.classList.add("insertCategory")
    insertButton.setAttribute("id", "insertCategory");
    categoryLabel.textContent = "Category";
    categoryLabel.setAttribute("for", "category");
    category.setAttribute("id", "category");
    category.classList.add("category");
    category.setAttribute("placeholder", "Enter a Category");
    myMain.appendChild(categoryLabel);
    myMain.appendChild(category);
    myMain.appendChild(insertButton);
    console.log("Ka tu");
}



function normalUsers() {

    const myTitle = document.createElement("h2");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const categoryLabel = document.createElement("label");
    const categoryInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    const priceLabel = document.createElement("label");
    const priceInput = document.createElement("input");
    const imagesLabel = document.createElement("label");
    const imagesInput = document.createElement("input");
    const insertButton = document.createElement("button");
    const updateButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    myTitle.textContent = "Skelbimai";
    titleLabel.setAttribute("for", "postTitle");
    titleLabel.textContent = "Title";
    titleInput.setAttribute("id", "postTitle");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Enter an Title");
    categoryLabel.setAttribute("for", "postCategory");
    categoryLabel.textContent = "Category";
    categoryInput.setAttribute("id", "postCategory");
    categoryInput.setAttribute("type", "text");
    categoryInput.setAttribute("placeholder", "Enter an Category");
    descriptionLabel.setAttribute("for", "postDescription");
    descriptionLabel.textContent = "Description";
    descriptionInput.setAttribute("id", "postDescription");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("placeholder", "Enter an Description");
    priceLabel.setAttribute("for", "postPrice");
    priceLabel.textContent = "Price";
    priceInput.setAttribute("id", "postPrice");
    priceInput.setAttribute("type", "number");
    priceInput.setAttribute("placeholder", "Enter an Price");
    imagesLabel.setAttribute("for", "postImages");
    imagesLabel.textContent = "Images";
    imagesInput.setAttribute("id", "postImages");
    imagesInput.setAttribute("type", "text");
    imagesInput.setAttribute("placeholder", "Enter images link");
    insertButton.setAttribute("id", "insertButton");
    insertButton.textContent = "Insert";
    updateButton.setAttribute("id", "updateButton");
    updateButton.textContent = "Update";
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.textContent = "Delete";
    myMain.appendChild(myTitle);
    myMain.appendChild(titleLabel);
    myMain.appendChild(titleInput);
    myMain.appendChild(categoryLabel);
    myMain.appendChild(categoryInput);
    myMain.appendChild(descriptionLabel);
    myMain.appendChild(descriptionInput);
    myMain.appendChild(priceLabel);
    myMain.appendChild(priceInput);
    myMain.appendChild(imagesLabel);
    myMain.appendChild(imagesInput);
    myMain.appendChild(insertButton);
    myMain.appendChild(updateButton);
    myMain.appendChild(deleteButton);
    
    }



 
// function addingDate(e) {
//     e.preventDefault();
//     const myCategory = document.getElementById("category").value;
// set(ref(database, 'category/' + myCategory), {
// category: myCategory
//   }).then(() => {
// alert("Added Susseccfully");
//   })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
// })
// }
