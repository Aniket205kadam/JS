const clock = document.querySelector('#clock')
const heading = document.createElement('h1')

function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    heading.innerHTML = `<strong>${currentTime}</strong>`
    clock.appendChild(heading)
}
// updateTime()
setInterval(updateTime, 1000)
