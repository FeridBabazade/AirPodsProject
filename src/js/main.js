

const chooseColor = document.querySelectorAll(".choose__color-btn")
const chooseItem = document.querySelectorAll(".content-item")


chooseColor.forEach(function (element) {
    element.addEventListener("click",open)
})

// bu basada nauwnikler img ustune regi deyismek ucundur
function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button
    // REGI QATMAQ UCUN
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function (item) {
        item.classList.remove('choose__color-btn--active')
    })

    target.classList.add('choose__color-btn--active')

    chooseItem.forEach(function (item) {
        item.classList.remove("content-item__active")
    })
    // REGI QATMAQ UCUN
    contentActive.forEach(function (item) {
        item.classList.add("content-item__active")
        
    })
}