const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height. ${height}`
    } else if (weight === '' || weight<0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight. ${weight}`
    } else {
        var bmi = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>Your BMI is ${bmi}.</span>`
    }

    if(bmi < 18.6) {
        results.innerHTML += `<p>You are underweight.</p>`
    } else if (bmi > 18.6 && bmi < 24.9) {
        results.innerHTML += `<p>You are normal weight.</p>`
    } else { 
        results.innerHTML += `<p>You are overweight.</p>`
    }
})
 