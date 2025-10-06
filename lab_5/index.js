var counterElement = document.createElement('div')
counterElement.textContent = '00:00'
document.body.appendChild(counterElement)

var knopka = document.createElement('button')
knopka.textContent = 'speed +'
document.body.appendChild(knopka)

var knopka2 = document.createElement('button')
knopka2.textContent = 'speed -'
document.body.appendChild(knopka2)

var knopka3 = document.createElement('button')
knopka3.textContent = 'reset'
document.body.appendChild(knopka3)

document.body.style.backgroundColor = 'gray'

knopka.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightgreen'
    counterElement.style.color = 'lightcoral'
})

knopka2.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightcoral'
    counterElement.style.color = 'lightgreen'
})

knopka3.addEventListener('click', function () {
    document.body.style.backgroundColor = 'gray'
    counterElement.style.color = 'black'
})