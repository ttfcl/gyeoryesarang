let gesipan = document.querySelector(".gesipan")
let gesipanSoket = document.querySelector(".gesipan_soket")
let gesipanPage = document.querySelector(".gesipan_page")

const master = () => {
  let gesipan = document.querySelector(".gesipan")
  let gesipanSoket = document.querySelector(".gesipan_soket")
  let gesipanPage = document.querySelector(".gesipan_page")

  const converter = function (x) {
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    div1.className = "b4ContentCT"
    div2.className = "b4ContentCT_body"
    div3.className = "b4ContentCT_data"
    let gesipan_r = document.createElement("div")
    gesipan_r.classList = "gesipan_r"
    gesipan_r.id = questionList.length - x
    const gesipanIndex = document.createElement("div")
    gesipanIndex.className = "gesipan_index"
    gesipanIndex.textContent = questionList.length - x
    const gesipanTitle = document.createElement("div")
    gesipanTitle.className = "gesipan_title"
    gesipanTitle.textContent = questionList[x].회사명
    const gesipanMaker = document.createElement("div")
    gesipanMaker.className = "gesipan_maker"
    gesipanMaker.textContent = questionList[x].담당자
    const gesipanTime = document.createElement("div")
    gesipanTime.className = "gesipan_time"
    gesipanTime.textContent = questionList[x].time
    gesipan_r.append(gesipanIndex, gesipanTitle, gesipanMaker, gesipanTime)
    gesipanSoket.append(gesipan_r)

}

const converterButton = function (j) {
    const gesipanButton = document.createElement("button")
    gesipanButton.className = "gesipan_button"
    gesipanButton.textContent = j
    gesipanPage.append(gesipanButton)
}

const render = (x) => {
    let count = 0;
    if(questionList.length < x + 20) {
      count = questionList.length
    }else {
      count = x + 20
    }
    for(i = x ; i < count ; i++) {
        converter(i)
    }
}

const renderButton = (x) => {
    let count = 0 ;
    if(questionList.length/20 > x + 10) {
        count = x + 10
    }else {
        count = questionList.length/20
    }
    for(j = x ; j < count ; j++) {
        converterButton(j+1)
    }
}

render(0)
renderButton(0)



let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
    }) 

}



let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
    })    

let gesipanPageButtonP = document.querySelector(".gesipan_page_button_p")
let gesipanPageButtonN = document.querySelector(".gesipan_page_button_n")
let buttonCount = 0

const converter = function (x) {
  let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    div1.className = "b4ContentCT"
    div2.className = "b4ContentCT_body"
    div3.className = "b4ContentCT_data"
    let gesipan_r = document.createElement("div")
    gesipan_r.classList = "gesipan_r"
    gesipan_r.id = questionList.length - x
    const gesipanIndex = document.createElement("div")
    gesipanIndex.className = "gesipan_index"
    gesipanIndex.textContent = questionList.length - x
    const gesipanTitle = document.createElement("div")
    gesipanTitle.className = "gesipan_title"
    let nameFirst = questionList[i].name.split('')
    let nameFirst2 = nameFirst[0]
    gesipanTitle.textContent = questionList[i].phone1 + '-' + questionList[i].phone2 + '-' + questionList[i].phone3
    const gesipanMaker = document.createElement("div")
    gesipanMaker.className = "gesipan_maker"
    gesipanMaker.textContent = questionList[x].name
    const gesipanTime = document.createElement("div")
    gesipanTime.className = "gesipan_time"
    gesipanTime.textContent = questionList[x].time
    gesipan_r.append(gesipanIndex, gesipanTitle, gesipanMaker, gesipanTime)
    gesipanSoket.append(gesipan_r)
}

const render = (x) => {
  let count = 0;
  if(questionList.length < x + 20) {
    count = questionList.length
  }else {
    count = x + 20
  }
  for(i = x ; i < count ; i++) {
      converter(i)
  }
}

const renderButton = (x) => {
  let count = 0 ;
  if(questionList.length/20 > x + 10) {
      count = x + 10
  }else {
      count = questionList.length/20
  }
  for(j = x ; j < count ; j++) {
      converterButton(j+1)
  }
}

gesipanPageButtonP.onclick = function() {
    if(buttonCount !== 0){
        const gesipanR = document.querySelectorAll('.gesipan_button')
        for(let a of gesipanR) {
          a.remove()
        }
      buttonCount = buttonCount - 10
      const gesipanPage = document.querySelector(".gesipan_page")
      renderButton(buttonCount)
      gesipanPage
      } 
      let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
    })   
}  
gesipanPageButtonN.onclick = function() {
    if(buttonCount < Math.ceil(questionList.length/20)-10){
        const gesipanR = document.querySelectorAll('.gesipan_button')
          for(let a of gesipanR) {
            a.remove()
          }
        buttonCount = buttonCount + 10
        const gesipanPage = document.querySelector(".gesipan_page")
        renderButton(buttonCount)
        gesipanPage
        }  
        let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key3")
      localStorage.setItem("key3", e.id)
      }
    })  
}