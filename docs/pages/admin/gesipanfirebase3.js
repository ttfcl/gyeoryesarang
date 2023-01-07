var firebaseConfig = {
  apiKey: "AIzaSyBRiOCj2Nb9BoULzrMrTf-GZhvbGbRqPdY",
      authDomain: "gyeoryesarang.firebaseapp.com",
      projectId: "gyeoryesarang",
      storageBucket: "gyeoryesarang.appspot.com",
      messagingSenderId: "88961959877",
      appId: "1:88961959877:web:66fbedd5a6cd0044feedac"
  };
  firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore();
bd.collection('product').get().then((결과)=>{
    결과.forEach((doc)=>{
      questionList.unshift(doc.data())
   })
   master();
})
