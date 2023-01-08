const 회사명 = document.querySelector("#회사명")
const 담당자 = document.querySelector("#담당자")
const 연락처 = document.querySelector("#연락처")
const 이메일 = document.querySelector("#이메일")
const 문의내용 = document.querySelector("#문의내용")
const 전송버튼 = document.querySelector("#전송버튼")
const 생일 = document.querySelector("#생일")
const 이메일2 = document.querySelector("#이메일2")

let gonjiList = []
let countList = []

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
  db.collection('product').get().then((결과)=>{
      결과.forEach((doc)=>{
        gonjiList.unshift(doc.data())
     })
  })

전송버튼.onclick = () => {
    if(회사명.value === '') {
        alert("회사명을 입력해주세요.")
    }else {
        if(담당자.value === '') {
            alert("담당자 성함을 입력해주세요.")
        }else {
            if(연락처.value === '') {
                alert("연락처를 입력해주세요.")
            }else {
                if(이메일.value === '') {
                    alert("이메일을 입력하세요.")
                }else {
                    if(문의내용.value === '') {
                        alert("문의내용을 입력하세요")
                    } else {
                        let directer = '1'  
                        let index = 1
                        let count = gonjiList.length
                        let time = new Date().getFullYear() + '-' + String(Number(new Date().getUTCMonth()) + 1) + '-' + new Date().getUTCDate()
                        for(let i = 0 ; i < count ; i++) {
                            directer = directer + '1'
                            index = index + 1
                        }
                        var save = {
                            "회사명" : 회사명.value,
                            "담당자" : 담당자.value,
                            "연락처" : 연락처.value,
                            "이메일" : 이메일.value,
                            "content" : 문의내용.value,
                            "time" : time,
                            "index" : index,
                            "생일" : 생일.value,
                            "이메일2" : 이메일2.value
                        }
                        let NumberCount = 0
                        db.collection('count').get('count').then((결과)=>{
                            결과.forEach((doc)=>{
                                countList.unshift(doc.data())
                                console.log(countList)
                                NumberCount = countList[0].count + 1
                                console.log(NumberCount)
                                db.collection('count').doc('count').set({"count" : NumberCount})
                            })
                        })
                        
                        db.collection('product').doc(directer).set(save)
                        전송버튼.classList.add("hide")
                        alert("확인 버튼을 누르면 저장이 진행됩니다. 이후 자동으로 이동되며 창을 닫지 말아주세요.")
                        전송버튼.classList.add("hide")
                        setTimeout(function() {
                            location.href = "../../index.html";
                        }, 5000); 
                    }
                }
            } 
        }
    }
}