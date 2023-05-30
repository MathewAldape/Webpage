const container = document.getElementById('container')
const rect = document.querySelector('rect')
const left_btn = document.querySelector('.left_btn')
const right_btn = document.querySelector('.right_btn')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')
const factorio = document.getElementById('factorio')
const drg = document.getElementById('drg')

let angle_change = 90

let current_angle = 0

left_btn.addEventListener('click', () => {
    current_angle = current_angle - angle_change
    update()
})

right_btn.addEventListener('click', () => {
    current_angle = current_angle + angle_change
    update()
})

function update(){
    container.style.transform = 'rotate(' + -current_angle + 'deg)'
    link1.style.rotate = current_angle + 'deg'
    link2.style.rotate = current_angle + 'deg'
    link3.style.rotate = current_angle + 'deg'
    link4.style.rotate = current_angle + 'deg'
    factorio.style.rotate = -4*current_angle + 'deg'
    drg.style.rotate = 4*current_angle + 'deg'
    console.log(current_angle)
}