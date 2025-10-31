const timer = document.querySelector('.timer')
const btnStart = document.querySelector('.btnStart')
const btnPause = document.querySelector('.btnPause')
const btnStop = document.querySelector('.btnStop')

let seconds = 0
let timerId = null

function showTime (){
    timer.textContent = seconds
}


btnStart.addEventListener('click', function () {
    if(timerId !== null) {
    }else {
        timerId = setInterval(function(){
            seconds = seconds + 1
            showTime()
        }, 1000)
    }
})


btnStop.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId)
        timerId = null
    }
    seconds = 0
    showTime()
})


btnPause.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId)
        timerId = null
    }
    showTime()
})

showTime()