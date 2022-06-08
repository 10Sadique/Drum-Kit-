function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // this will stop the function running all together
    
    audio.currentTime = 0 // to rewinding to the start
    audio.play()
    
    key.classList.add("playing")
}

function removeTransiton(e) {
    if (e.propertyName !== "transform") return // skip if it is not transform
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach((key) => key.addEventListener("transitionend", removeTransiton))

window.addEventListener("keydown", playSound)