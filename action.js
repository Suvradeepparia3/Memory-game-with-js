document.addEventListener('DOMContentLoaded', () => {

    // card optuion
    const cardArray = [
        {
            name: 'cat',
            img: 'image/cat.png'
        },
        {
            name: 'cat',
            img: 'image/cat.png'
        },
        {
            name: 'dog',
            img: 'image/dog.png'
        },
        {
            name: 'dog',
            img: 'image/dog.png'
        },
        {
            name: 'elephant',
            img: 'image/elephant.png'
        },
        {
            name: 'elephant',
            img: 'image/elephant.png'
        },
        {
            name: 'lion',
            img: 'image/lion.png'
        },
        {
            name: 'lion',
            img: 'image/lion.png'
        },
        {
            name: 'tiger',
            img: 'image/tiger.png'
        },
        {
            name: 'tiger',
            img: 'image/tiger.png'
        },
        {
            name: 'rabit',
            img: 'image/rabit.png'
        },
        {
            name: 'rabit',
            img: 'image/rabit.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var cardWon = []

    // create board
    function createBoard() {
        for ( let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'image/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    // check for match
    function checkForMtch(){
        var cards = document.querySelectorAll('img')
        const cardOneId = cardChosenId[0]
        const cardTwoId = cardChosenId[1]
        if (cardChosen[0] === cardChosen[1] && cardOneId !== cardTwoId) {
            alert("Hurrahhh... You found one.")
            cardWon.push(cardChosen)
        } else {
            cards[cardOneId].setAttribute('src', 'image/card.png')
            cards[cardTwoId].setAttribute('src', 'image/card.png')
            // alert('sorry')
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardWon.length
        if (cardWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulation! you found all.'
        }
    }

    // flip your card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2){
            setTimeout(checkForMtch, 500)
        }
    }

    createBoard()

})