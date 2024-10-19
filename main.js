
// Thay đổi nội dung búc thư ở đây
var letterContent = "Chúc Hoàng Mai Chi của tớ ngày 20/10 thật nhiều niềm vui và hạnh phúc. Mong rằng mọi điều tốt đẹp nhất sẽ đến với Mai Chi. Dù ở bất cứ nơi đâu, tớ vẫn luôn ở đây, luôn ủng hộ và chia sẻ mọi điều với Mai Chi. Mấy ngày qua tớ đã nhớ Mai Chi nhiều lắm, tớ xin lỗi vì đã làm Mai Chi thất vọng, tớ xin lỗi vì tất cả những điều mà tớ khiến Mai Chi tiêu cực. Thật sự xin lỗi Mai Chi rất nhiều, tớ không muốn chúng mình như vậy nữa đâu. Tớ yêu Mai Chi nhiều lắmmmm, nên không muốn mất Mai Chi một chút nào đâu. Tớ biết tớ sai rồi nên hãy cùng tớ nhìn nhận lại để chúng mình có cơ hội phát triển tốt hơn nha. Chuyện gì cũng có cách giải quyết mà đúng không, tớ không sợ khó khăn đâu, tớ chỉ sợ bản thân không còn cơ hội thôi. Có gì hãy cứ bảo với tớ nha, tớ vẫn luôn lắng nghe ý kiến của Mai Chi màaaaaaa. ...Dưới đây là bó hoa tớ tự làm để tặng Mai Chi, mong Mai Chi sẽ thích nó. Vì là tớ không thể đưa trực tiếp được nên hãy cảm nhận bằng ánh mắt nhaaaa. Tuy tớ không khéo tay nhưng mà được cái gập xấu huhu... Gửi Hoàng Mai Chi thân yêu-meocondangiu của anh nhaaaaaaaa. ";

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
