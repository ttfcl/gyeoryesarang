//.ck-editor__editable
var superkey = null
var end = document.querySelector("#end")
var del = document.querySelector("#del")
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var test = document.querySelector(".gesipan_content2")
var end = document.querySelector(".king")
var end2 = document.querySelector(".king2")
var disItem = document.querySelector("#disItem")
var qwerasdf = document.querySelector("#qwerasdf")

if((localStorage.getItem("master"))) {
    end.classList.remove('hide')
    end2.classList.remove('hide')
}
localStorage.removeItem("bugfix")

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
db.collection('product3').get().then((결과)=>{
  결과.forEach((doc)=>{
    gonjiList.unshift(doc.data())
  })
  master()
})

const master = () => {
  var title = document.querySelector("#title")
  var time = document.querySelector("#time")
  var maker = document.querySelector("#maker")
  let masterKey = localStorage.getItem("key")
  var gesipanImgB = document.querySelector(".gesipan_imgB")
  var gesipanDownB = document.querySelector(".gesipan_downB")
  let imgList = ""
  let downList = ""
  for(let i = 0 ; i < gonjiList[gonjiList.length - masterKey].img.length ; i++) {
    imgList = imgList + gonjiList[gonjiList.length - masterKey].img[i].split(" ")[1].replace("asdfqwerzxcv", " ") + ', '
  }
  for(let i = 0 ; i < gonjiList[gonjiList.length - masterKey].down.length ; i++) {
    downList = downList + gonjiList[gonjiList.length - masterKey].down[i].split(" ")[1].replace("asdfqwerzxcv", " ") + ', '
  }
  console.log(gonjiList[gonjiList.length - masterKey])
  title.value = gonjiList[gonjiList.length - masterKey].title
  time.value = gonjiList[gonjiList.length - masterKey].time
  maker.value = gonjiList[gonjiList.length - masterKey].maker
  superkey = gonjiList[gonjiList.length - masterKey].index
  var 템플릿 = gonjiList[gonjiList.length - masterKey].content
  gesipanImgB.textContent = imgList
  gesipanDownB.textContent = downList
  test.append(템플릿)
  localStorage.removeItem("key")
}




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
  let count = superkey
  var imglink = []
  var downlink = []
  for(let i = 1 ; i < count ; i++) {
    directer = directer + '1'
    index = index + 1
  }
  if(disItem.files.length !== 0) {
    let imgCount = 0 
    const imgTest = () => {
      if(imgCount < disItem.files.length) {
        var storageRef = storage.ref();
        var 저장경로 = storageRef.child('image/' + new Date().getTime() + disItem.files[imgCount].name);
        var 업로드작업 = 저장경로.put(disItem.files[imgCount])
        var 공백제거 = disItem.files[imgCount].name.replace(' ', 'asdfqwerzxcv')
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
    db.collection('product3').doc(directer).set(save)
    console.log('2131232')
    setTimeout(function() {
      location.href = "mainAdmin5.html"
    }, 5000)
  }, 20000);
}

  del.onclick = function() {
    var directer = ''  
    let count = superkey
    let masterCount = gonjiList.length
    for(let i = 0 ; i < count ; i++) {
      directer = directer + '1'
      gonjiList.pop()
    }
    db.collection('product3').doc(directer).delete()
    for(let j = 0 ; j < masterCount - count ; j++) {
      newgonjiList = gonjiList.pop()
    var newindex = superkey
    superkey++
    var newtitle = newgonjiList.title
    var newmaker = newgonjiList.maker
    var newtime = newgonjiList.time
    var newcontent = newgonjiList.content
    var newimg = newgonjiList.img
    var newdown = newgonjiList.down
    var save = {
      'title' : newtitle,
      'maker' : newmaker,
      'time' : newtime,
      'content' : newcontent,
      'index' : newindex,
      'down' : newdown ,
      'img' : newimg
    }
    db.collection('product3').doc(directer).set(save)
    directer = directer + '1'
    db.collection('product3').doc(directer).delete()
    }
}
var king = document.querySelector(".king")
var king2 = document.querySelector(".king2")
if(localStorage.getItem('master') !== '501') {
  king.classList.add('hide')
  king2.classList.add('hide')
}