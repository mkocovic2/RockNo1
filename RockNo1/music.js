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

const demosRef = storage.ref().child('demos');

demosRef.listAll().then(function(result) {
  result.items.forEach(function(demoRef) {
    demoRef.getDownloadURL().then(function(url) {
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = url;

      const trackTitle = demoRef.name.split('.').slice(0, -1).join('.');

      const trackContainer = document.createElement('div');
      trackContainer.classList.add('tracks');

      const trackTitleHeading = document.createElement('p');
      trackTitleHeading.textContent = trackTitle;
      trackContainer.appendChild(trackTitleHeading);

      trackContainer.appendChild(audio);

      const demoTitle = document.querySelector('.demoTitle');
      demoTitle.appendChild(trackContainer);
    }).catch(function(error) {
      console.log(error);
    });
  });
}).catch(function(error) {
  console.log(error);
});