// generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const changeBackground = function() {
    // change background color
    document.body.style.backgroundColor = randomColor()
}

let intervalId = null; 
document.querySelector('#start').addEventListener('click', (event) => {
    if (intervalId === null) {
        intervalId = setInterval(changeBackground, 1000)
    }
    document.body.style.color = '#FFFFFF'
})

document.querySelector('#stop').addEventListener('click', (event)=> {
    document.body.style.backgroundColor = '#FFFFFF'
    document.body.style.color = '#000000'
    clearInterval(intervalId)
    intervalId = null
})
