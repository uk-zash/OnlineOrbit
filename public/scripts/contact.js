const contactForm = document.querySelector(".contact-form")
let name = document.getElementById("name")
let email = document.getElementById("email")
let number = document.getElementById("number")
let message= document.getElementById("message")
contactForm.addEventListener('submit' , (e) => {
    e.preventDefault();


    let formData = {
        name: name.vale,
        email:email.value,
        number:number.value,
        message:message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact')
    xhr.setRequestHeader('content-type', 'application/json' )
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText=="sucess"){
            alert("Your message is sent!")
        }
        else{
            alert("Something went wrong!")
        }
    }

    xhr.send(JSON.stringify(formData))

})