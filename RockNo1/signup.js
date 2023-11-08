import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDtQC9VZ87XrCbIHxVA_eBbx2QkNE5YyTg",
    authDomain: "rockno1-1653c.firebaseapp.com",
    databaseURL: "https://rockno1-1653c-default-rtdb.firebaseio.com",
    projectId: "rockno1-1653c",
    storageBucket: "rockno1-1653c.appspot.com",
    messagingSenderId: "675786142024",
    appId: "1:675786142024:web:a70c853eaabef626f8837d",
    measurementId: "G-J0Z1GGK2BD"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const sendButton = document.querySelector("#send");
const emailInput = document.querySelector("#email");

sendButton.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email !== "") {
        const emailsRef = ref(database, "emails");
        const newEmailRef = push(emailsRef);
        const newEmailKey = newEmailRef.key;
        set(newEmailRef, email)
            .then(() => {
                alert("Email submitted successfully!");
                emailInput.value = "";
            })
            .catch((error) => {
                console.error("Error submitting email:", error);
            });
    } else {
        alert("Please enter a valid email!");
    }
});
