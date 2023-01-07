
let login = document.querySelector('#login')
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var js = []
var firebaseConfig = {
  apiKey: "AIzaSyBRiOCj2Nb9BoULzrMrTf-GZhvbGbRqPdY",
  authDomain: "gyeoryesarang.firebaseapp.com",
  projectId: "gyeoryesarang",
  storageBucket: "gyeoryesarang.appspot.com",
  messagingSenderId: "88961959877",
  appId: "1:88961959877:web:66fbedd5a6cd0044feedac"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.collection('impo').get().then((결과)=>{
    결과.forEach((doc)=>{
      js.unshift(doc.data())
    })
  })

login.onclick = function() {
    let id = document.querySelector("#id")
    let pw = document.querySelector("#pw")
    console.log(id.value)
    if(id.value === "admin" && pw.value === "dsjjfehl332#!") {
        happyend.classList.remove('hide')
        happyend2.classList.remove('hide')
        Ptitle.classList.add('hide')
        badend.classList.add('hide')
        localStorage.removeItem("master")
        localStorage.setItem("master", "501")
    } else {
        Ptitle.classList.remove('hide')
        badend.classList.remove('hide')
        localStorage.removeItem("master")
    }
} 
