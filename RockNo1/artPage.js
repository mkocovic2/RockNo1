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


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const imagesRef = storage.ref().child('images');

imagesRef.listAll().then(function(result) {
    result.items.forEach(function(imageRef) {
        imageRef.getDownloadURL().then(function(url) {
            const img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);
        }).catch(function(error) {
            console.log(error);
        });
    });
}).catch(function(error) {
    console.log(error);
});

