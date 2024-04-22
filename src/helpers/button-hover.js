import { gsap } from 'gsap'

export const buttonHover = () => {
  console.log("I'm button hover.js")

  const box = document.querySelector('.box')
  const tl = gsap.timeline({ paused: true })

  tl.to('.box', { backgroundColor: 'green' })

  box.addEventListener('mouseenter', () => {
    tl.play()
  })

  box.addEventListener('mouseleave', () => {
    tl.reverse()
  })
}
