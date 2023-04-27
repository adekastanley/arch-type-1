const heroTextId = document.querySelector('.main-text')
const heroTextWords = Splitting({target:heroTextId, by: 'words'})
// const target = document.querySelector('.main-text')
// const result = Splitting({target:target, by: 'words'});


// console.log(result[0].words)
const heroH1Span = heroTextWords[0].words

const heroText = gsap.timeline()

heroText.from (heroH1Span, {
    y: 100,
    stagger: 0.5,
    duration: .4,
    opacity: 0
})
