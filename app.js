const pianoKeys = document.querySelectorAll(".key"), 
volumeSlider = document.getElementById("volume-range"),
keyCheckbox = document.getElementById("keys-checkbox");

let allKeys = [],  audio = new Audio('./tunes/a.wav')

function playTune(key) {
    audio.src = `./tunes/${key}.wav`
    audio.play()
    const clickedKey =  document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
}

pianoKeys.forEach(el => {
    allKeys.push(el.dataset.key)
    el.addEventListener("click", function() {
        playTune(this.dataset.key)
    })
})


const keyDowned = (e) => {
    if(allKeys.includes(e.key)) {
        playTune(e.key)
    }
}

const handleVolume = (e) => {
    audio.volume = e.target.value / 100
}

const showHideKeys = () => {

    const keysName = document.querySelectorAll(".key span")

    if(keyCheckbox.checked) {
        keysName.forEach(key => {
            key.classList.remove("hide")
        })
    } else {
        keysName.forEach(key => {
            key.classList.add("hide")
        })
    }
}

keyCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", handleVolume)
document.addEventListener("keydown", keyDowned)





























// const showKeys = document.getElementById("keys-checkbox")

// console.log(showKeys.checked)

// showKeys.addEventListener("change", function() {
//     const spans = document.querySelector(".key span")
//     if(!showKeys.checked) {
//         spans.forEach(span => {
//             span.className.add("hide")
//         })
//     } else {
//         spans.forEach(span => {
//             span.className.remove("hide")
//         })
//     }
// })

