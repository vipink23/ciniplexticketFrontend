import Controller from "./formController.js";
const controller = new Controller();
const form= document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    controller.setArray(
        form['name'].value,
        form['email'].value,
        form['phone'].value
    )
    form.reset()
    console.log(controller.getArray())
})
  