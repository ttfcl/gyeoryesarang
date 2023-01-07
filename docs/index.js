let 몇명 = document.querySelector("#몇명")

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
db.collection('count').get('count').then((결과)=>{
  결과.forEach((doc)=>{
    console.log(doc.data())
    몇명.textContent = doc.data().count
  })
})
