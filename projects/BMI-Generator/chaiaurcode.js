const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault() //stop the submittion
    const height = Number.parseInt(document.querySelector('#height').value)
    const weight = Number.parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`
    } else {

        const BMI = (weight/(height*height) * 10000).toFixed(2)

        // show the result
        result.innerHTML = `<span>${BMI}</span>`
        
        // additional feature
        const weightGuides = document.querySelectorAll('.demo')
        if (BMI < 18.6) {
            weightGuides[1].style.background = '#797978'
            weightGuides[2].style.background = '#797978'
            weightGuides[0].style.background = '#fc6203'
        } else if (BMI > 18.6 && BMI < 24.9) {
            weightGuides[0].style.background = '#797978'
            weightGuides[2].style.background = '#797978'
            weightGuides[1].style.background = '#56fc03'
        } else if (BMI > 24.9) {
            weightGuides[0].style.background = '#797978'
            weightGuides[1].style.background = '#797978'
            weightGuides[2].style.background = '#fc3003'
        } else {
            alert('Something is worng')
        }
    }
})