const square = document.querySelector(".square");
gsap.registerPlugin(ScrollTrigger)
// const squareTween = gsap.to(square, {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square",
//         start: "top 30%",
//         end: "bottom 22%",
//         markers: true,
//         toggleClass: "blue"
//     }
// });
const squareTween = gsap.to(square, {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: "bottom 22%",
        toggleActions: "restart pause resume none",
       // toggleActions: onEnter onLeave onEnterBack onLeaveBack",
        markers: true,
       // toggleClass: "blue"
    }
})

// const scroll_1 = ScrollTrigger.create({
//     trigger: square,
//     animation: squareTween
// });