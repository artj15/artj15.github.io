function scrollDown() {
    window.scrollTo(
        {top: window.innerHeight, behavior: "smooth"}
    )
}

let button = document.querySelector(".header_btn")
button.addEventListener(
    "click",
    scrollDown
)

anime(
    {
        targets: ".header_left h1",
        duration: 500,
        easing: "linear",
        opacity: 1
    }
)

anime(
    {
        targets: ".header_left p",
        duration: 500,
        delay: 200,
        easing: "linear",
        opacity: 1
    }
)

anime(
    {
        targets: ".header_btn",
        duration: 300,
        easing: "easeOutQuad",
        translateY: [-window.innerHeight / 2, 0]
    }
)