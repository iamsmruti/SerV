// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-LfymcYKAsdS61L1sSS50NhddL1aU2Vc",
    authDomain: "serv-db03a.firebaseapp.com",
    projectId: "serv-db03a",
    storageBucket: "serv-db03a.appspot.com",
    messagingSenderId: "928023101421",
    appId: "1:928023101421:web:650c254d34c33e672b31e4",
    measurementId: "G-467QV90Q0H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let firestore = firebase.firestore()
const db = firestore.collection("requests")

let submit = document.getElementById('submit')

submit.addEventListener('click', submitForm)

function submitForm(e){
    e.preventDefault()
    
    const name = document.querySelector('#name').value
    const number = document.querySelector('#number').value
    const service = document.querySelector('#service').value
    const message = document.querySelector('#message').value

    db.doc().set({
        name: name,
        number: number,
        service: service,
        message: message
    }).then( ()=>{
        console.log("data saved")
    }).catch((error) => {
        console.log(error)
    })
   
    document.getElementById("myForm").reset();

    alert("We will contact you soon ! ...")
}

db.get().then(snap => {
    size = snap.size // will return the collection size
    console.log(size);
    document.querySelector('.req').innerHTML = eval(size*10)
})
const analytics = getAnalytics(app);