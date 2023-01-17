let now = new Date()
var year = now.getFullYear(); 
var month = now.getMonth() + 1; 
var day = now.getDate(); 
let monthDay = 0
const popuptime = () => {
    if(month = 12) {
        monthDay = 334
    }
    if(month = 11) {
        monthDay = 304
    }
    if(month = 10) {
        monthDay = 273
    }
    if(month = 9) {
        monthDay = 243
    }
    if(month = 8) {
        monthDay = 212
    }
    if(month = 7) {
        monthDay = 181
    }
    if(month = 6) {
        monthDay = 151
    }
    if(month = 5) {
        monthDay = 120
    }
    if(month = 4) {
        monthDay = 90
    }
    if(month = 3) {
        monthDay = 59
    }
    if(year%4 === 0) {
        monthDay = monthDay + 1
    }
    if(month = 2) {
        monthDay = 31
    }
    if(month = 1) {
        monthDay = 0
    }
    return year * 365 + monthDay + day
}

if(popuptime() - localStorage.getItem("popup1") >= 1) {
    open("popup/popup1.html","","width=800px, height=600px toolbar=0, menubar=no")
}



