  var end = document.querySelector("#end")
  var title = document.querySelector("#title")
  var time = document.querySelector("#time")
  var maker = document.querySelector("#maker")
  var img = document.querySelector("#disItem")
  let qwerasdf = document.querySelector("#qwerasdf")
  var Ptitle = document.querySelector(".title_modal")
  var happyend = document.querySelector(".happyend")
  var happyend2 = document.querySelector(".happyend2")
  var badend = document.querySelector(".badend")
  var king = document.querySelector(".king")


  var firebaseConfig = {
    apiKey: "AIzaSyBRiOCj2Nb9BoULzrMrTf-GZhvbGbRqPdY",
      authDomain: "gyeoryesarang.firebaseapp.com",
      projectId: "gyeoryesarang",
      storageBucket: "gyeoryesarang.appspot.com",
      messagingSenderId: "88961959877",
      appId: "1:88961959877:web:66fbedd5a6cd0044feedac"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.firestore();

  db.collection('product2').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
    })
  })
  

  end.onclick = function() {
  Ptitle.classList.add('hide')
  happyend.classList.add('hide')
  if(title.value === '' || (time.value === '') || (maker.value === '')) {
    return Ptitle.classList.remove('hide')
  }
  badend.classList.add('hide')
  happyend.classList.remove('hide')
  let directer = '1'  
  let index = 1
  let count = gonjiList.length
  var imglink = []
  var downlink = []
  for(let i = 0 ; i < count ; i++) {
    directer = directer + '1'
    index = index + 1
  }
  if(img.files.length !== 0) {
    let imgCount = 0 
    const imgTest = () => {
      if(imgCount < img.files.length) {
        var storageRef = storage.ref();
        var 저장경로 = storageRef.child('image/' + new Date().getTime() + img.files[imgCount].name);
        var 업로드작업 = 저장경로.put(img.files[imgCount])
        var 공백제거 = img.files[imgCount].name.replace(' ', 'asdfqwerzxcv')
        업로드작업.on( 'state_changed', 
        // 변화시 동작하는 함수 
        null, 
        //에러시 동작하는 함수
        (error) => {
          console.error('실패사유는', error);
        }, 
        // 성공시 동작하는 함수
        () => {
          업로드작업.snapshot.ref.getDownloadURL().then((url) => {
            imglink.push(url + ' ' + 공백제거);
            imgCount++
            imgTest()
          });
          }
        );
      }
    }
    imgTest()
  }
  if(qwerasdf.files.length !== 0) {
    let downCount = 0 
    const downTest = () => {
      if(downCount < qwerasdf.files.length) {
        var storageRef = storage.ref();
        var 저장경로 = storageRef.child('image/' + new Date().getTime() + qwerasdf.files[downCount].name);
        var 업로드작업 = 저장경로.put(qwerasdf.files[downCount])
        var 공백제거 = qwerasdf.files[downCount].name.replace(' ', 'asdfqwerzxcv')
        업로드작업.on( 'state_changed', 
        // 변화시 동작하는 함수 
        null, 
        //에러시 동작하는 함수
        (error) => {
          console.error('실패사유는', error);
        }, 
        // 성공시 동작하는 함수
        () => {
          업로드작업.snapshot.ref.getDownloadURL().then((url) => {
            downlink.push(url + ' ' + 공백제거);
            downCount++
            downTest()
          });
          }
        );
      }
    }
    downTest()
  }
  setTimeout(function() {
    let title2 = title.value
    let maker2 = maker.value
    let time2 = time.value
    var content = CKEDITOR.instances.editor1.getData()
    var save = {
    'title' : title2,
    'maker' : maker2,
    'time' : time2,
    'content' : content,
    'img' : imglink,
    'down' : downlink,
    'index' : index
  }
    db.collection('product2').doc(directer).set(save)
    console.log('2131232')
    setTimeout(function() {
      location.href = "mainAdmin5.html"
    }, 5000)
  }, 20000);
  }
  if(localStorage.getItem('master') !== '501') {
    king.classList.add('hide')
  }