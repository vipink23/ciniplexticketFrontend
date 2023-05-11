import Model from "./formModel.js";

class Controller{
    constructor(){
        this.model= new Model()
    }
    
    getArray(){
        return this.model.getArray();
    }

    setArray(name,email,phone)
   
    {
            const selectedSeatsfromlocalstorage = JSON.parse(localStorage.getItem("selectedSeat"));
            console.log(selectedSeatsfromlocalstorage)
            const booking = {
                name  : name,
                email : email,
                phone : phone,
                selectedSeat : selectedSeatsfromlocalstorage,

            }
            console.log(booking)
            this.model.setArray(booking)
        }

        
    }

export default Controller;