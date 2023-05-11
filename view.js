import Controller from "./controller.js"
const controller = new Controller();


function render() {
    const seats = controller.getSeats();
    const rootDiv = document.getElementById('root');
    console.log(rootDiv)
    rootDiv.innerHTML =''

    for (let i = 0; i < seats.length; i++) {
        const newSeat = document.createElement('div')

        newSeat.classList.add('seat')
        newSeat.dataset.seatNumber = i;

        if (seats[i] === 'selected') {
            newSeat.classList.add('selected')
        }
        if (seats[i] === 'booked') {
            newSeat.classList.add('booked')

        } else {
            newSeat.addEventListener('click', (event) => {
                newSeat.classList.add('selected')
                controller.setSeats(i)
                console.log(seats);
            })
        }
        newSeat.addEventListener('click', (event) => {
            if (seats[i] === 'available') {
                newSeat.classList.remove('selected')
            }
        })
        const button = document.getElementById('book-btn')
        button.addEventListener('click', (e) => {
            controller.bookSeat();
            window.location.href = 'http://127.0.0.1:5500/ceniplex-tickets-main/form.html'
        })
        rootDiv.appendChild(newSeat)
    }
}
render();





