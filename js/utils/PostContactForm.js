import { PropertyData } from "../Data/userId.js";


const form = document.getElementById('form-contact');
let respuesta= document.getElementById('respuesta');
let userCompanyId = PropertyData.companyId;


form.addEventListener('submit', function(e) {
    e.preventDefault();

let firstName = document.getElementById('nombre');
let email = document.getElementById('email');
let subject = document.getElementById('sujeto');
let phone = document.getElementById('phone');
let message = document.getElementById('mensaje');



let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
let raw = JSON.stringify({
  "companyId":userCompanyId,
  "name": firstName.value,
  "lastName":"",
  "email": email.value,
  "phone": phone.value,
  "subject": subject.value,
  "message": message.value,
  "termsAndConditions": true,
  "action": "vender",
  "meetingDate":""
});
 
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
//   redirect: 'follow'
};
 
fetch("https://aulen.partnersadvisers.info/contact/", requestOptions)
  .then(response => response.text())
  .then(result => respuesta.innerHTML = `<div class="alert alert-success" role="alert" style="font-size:13px;">
   Formulario enviado exitosamente, Muchas gracias ${firstName.value}!!
  <button type="button" class="btn-close text-end" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`)
  .catch(error => console.log('error', error))


})

