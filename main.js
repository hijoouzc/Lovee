
// Thay đổi nội dung búc thư ở đây
var letterContent = "Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anhh ... Anh rất yêu em💕";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
var durationWrite = 20;

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    let letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardWomenDay").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardWomenDay = document.querySelector(".cardWomenDay")

cardWomenDay.addEventListener("click", () => {
    cardWomenDay.classList.toggle("open") 

    if(cardWomenDay.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
