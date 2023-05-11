class Model{
    constructor(){
        this.seats=["available","selected","available","booked","available","available","available","booked","selected","available","selected","available","available","available"];
    }
    getSeats(){
        return this.seats
    }
    setSeats(seatNumber){
        if(this.seats[seatNumber]==="available"){
            this.seats[seatNumber]="selected"
        }else if(this.seats[seatNumber]==="selected"){
            this.seats[seatNumber]="available"
            console.log(this.seats);
        }
        
    }
    bookSeat(){
        const selectedSeat=[]
        for(let n=0; n<this.seats.length; n++){
            if( this.seats[n]==='selected'){
                selectedSeat.push(n)
            }
            localStorage.setItem('selectedSeat',JSON.stringify(selectedSeat))
        }
    }
    
    
}
export default Model;