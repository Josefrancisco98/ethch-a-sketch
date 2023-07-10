const container = document.querySelector('.container')

const div = document.createElement('div')
div.classList.add('cube')



const buttons = document.querySelectorAll('button')



// grid creation
function createGrid (size) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        const rows = document.querySelectorAll('.row')
        for (let x = 0; x < size; x++){
            const cube = document.createElement('div')
            cube.classList.add('cube')
            cube.style.height = 475/size +'px'
            cube.style.width = 475/size + 'px'
            row.appendChild(cube)
        }
    }
}

createGrid(2)




