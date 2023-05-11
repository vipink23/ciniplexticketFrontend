
class Model{
    constructor(){
   this.array=[]
    }  

    getArray(){
        return this.array
    }

   async ticketBookedfrombackend(){
    const res = await fetch("http://localhost:9000/booking")

     const result = await res.json()
     return result

   }
    



    async setArray(booking){
      // this.array.push(booking)
       console.log(booking);

       const res = await fetch("http://localhost:9000/booking",
       {
            method: 'POST',
            headers:{
                'Accept':'application/json',
             'Content-Type':'application/json'
            },
            body: JSON.stringify(booking)
          })

          const result = await res.json()
          console.log(result);
          return result;
    }
 }
export default Model; 