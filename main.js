let dragItem = null
const boardZone = document.querySelector('.board_zone')
const createBoardBtn = document.querySelector('.createboard')
const createCardBtn = document.querySelector('.createCard')
let boardArr
let cardArr

// ! localStorage.boardArr ? boardArr = [] : JSON.parse(localStorage.getItem('boardArr'))
// ! localStorage.cardArr ? boardArr = [] : JSON.parse(localStorage.getItem('cardArr'))


// const addLocal = () => {
//     localStorage.setItem('boardArr', JSON.stringify(boardArr))
// }



// function boardArr(){
//     this.name = 'Новая доска'
// }





createBoardBtn.addEventListener('click', () => {
    boardArr.push(new boardArr())
    fillBoard()
    addLocal()
    dragNdrog()
})

// const fillBoard = () => {
//     boardZone.innerHTML = ''
//     if (boardArr.length > 0){
//         boardArr.forEach(item => {
//             boardArr.innerHTML += createBoard(item)
//         })
//     }
// }


const createBoard = () => {
    return `
    <section class="board">
        <section class="card_zone"></section>
    </section>
    `
}







createCardBtn.addEventListener('click', () => {
    cardArr.push(new cardArr())
    fillBoard()
    addLocal()
    dragNdrog()
})

const createCard = () => {
    return `
    <div class="card" draggable="true">
        <h2 class="card_title">Название карточки-1</h2>
        <p class="card_text">Текст карточки</p>
    </div>
    `
}










const dragNdrog = () => {
    const card = document.querySelectorAll('.card')
    const board = document.querySelectorAll('.card_zone')

    for (let index = 0; index < card.length; index++) {
        const item = card[index];
        
        item.addEventListener('dragstart', () => {
            dragItem = item
            setTimeout(() => {
                item.style.display = 'none'
            }, 0);
        })
        item.addEventListener('dragend', () => {
            setTimeout(() => {
                item.style.display = 'block'
                dragItem = null
            }, 0);

        })
        for (let j = 0; j < board.length; j++) {
            const element = board[j];
            
            element.addEventListener('dragover', e => e.preventDefault())

            element.addEventListener('dragenter', function (e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0, 0, 0, .3)'
            })

            element.addEventListener('drop', function(e) {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                this.append(dragItem)
            })
        }
    }

}

dragNdrog()
addLocal()