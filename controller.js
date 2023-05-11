import Model from "./model.js"
class Controller {
    constructor(){
        this.model= new Model();
    }
    getSeats(){
        return this.model.getSeats();
    }
    setSeats(seats){
        this.model.setSeats(seats)
    }
    bookSeat(){
        this.model.bookSeat()
    }
    
 

}
export default Controller;