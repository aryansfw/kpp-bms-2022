const mainSection = document.querySelector(".main")
const scrollHandle = document.querySelector(".scroll-handle")
const scrollHandleRect = document.querySelector(".scroll-handle-rect")
const scrollBar = document.querySelector(".scroll-bar")
const scrollBarRect = document.querySelector(".scroll-bar-rect")

let speed = 1
let distance = 5

window.scrollTo({top: 0, behavior: "smooth"})

let pageHeight = document.documentElement.scrollHeight
let windowHeight = window.innerHeight

let scrollBarHeight = scrollBarRect.width.baseVal.value
let scrollHandleHeight = scrollHandleRect.width.baseVal.value = Math.round(windowHeight/pageHeight * scrollBarHeight)

dragElement(scrollHandle)

function dragElement(elem) {
    let mousePos = 0, offsetPos = 0
    elem.onmousedown = dragMouseDown

    function dragMouseDown(e) {
        e.preventDefault()
        mousePos = e.clientY
        
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
    }

    function elementDrag(e) {
        offsetPos = mousePos - e.clientY
        mousePos = e.clientY

        let newElemPos = elem.offsetTop - offsetPos

        // If new position is inside scrollbar
        if (newElemPos >= scrollBar.offsetTop && newElemPos <= scrollBar.offsetTop + scrollBarHeight - scrollHandleHeight) {
            let scrollPercentage = newElemPos/(scrollBarHeight - scrollHandleHeight)
            elem.style.top = newElemPos + 'px';
            window.scrollTo({ top: scrollPercentage * (pageHeight - windowHeight) })
        }
    }
    
    
    function closeDragElement() {
        document.onmouseup = null
        document.onmousemove = null
    }
}

document.onwheel = scrollPage
document.onkeydown = scrollPage

const scrollDistance = 20

function scrollPage(e) {
    if (e.key && (e.key != "ArrowDown" && e.key != "ArrowUp")) return

    let newWindowPos = window.scrollY + ((e.deltaY) ? e.deltaY : ((e.key == "ArrowDown") ? scrollDistance : -scrollDistance))
    // let newWindowPos = window.scrollY + ((e.deltaY > 0) ? 30 : -30)
    
    let newElemPos = newWindowPos/pageHeight * scrollBarHeight

    scrollHandle.style.top = newElemPos + 'px';
    if (newElemPos < scrollBar.offsetTop) {
        scrollHandle.style.top = scrollBar.offsetTop + 'px';
    }
    if (newElemPos > scrollBar.offsetTop + scrollBarHeight - scrollHandleHeight) {
        scrollHandle.style.top = scrollBar.offsetTop + scrollBarHeight - scrollHandleHeight + 'px';
    }

    window.scrollTo({ top: newWindowPos, behavior: "smooth" })
}

window.onresize = adjustElements

function adjustElements(e) {
    pageHeight = document.documentElement.scrollHeight
    windowHeight = window.innerHeight

    scrollBarHeight = scrollBarRect.width.baseVal.value
    scrollHandleHeight = scrollHandleRect.width.baseVal.value = Math.round(windowHeight/pageHeight * scrollBarHeight)
}