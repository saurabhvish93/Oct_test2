let email_box = document.getElementById("email");
let password_box = document.getElementById("password");
let btn = document.querySelector("button");

email_box.addEventListener("onChange", validateForm)
function validateForm() {
    
   let email = email_box.value;
   let email_err = document.querySelector(".email_err");

   if(email.length<4 || email == " ") {
     email_err.Style.color = 2px solid red
     email_err.innerHTML = "Make sure email is more than 3 characters and has @ and a . "
     return
    }
    else {
        email_err.innerHTML = ""
    }
}
password_box.addEventListener("onChange", ()=>{


    let password = password_box.value;
    let pass_err = document.querySelector(".pass_err");
    
    if(password.length<8) {
        pass_err.Style.color = 2px solid red
        pass_err.innerHTML = "Make sure your password is more than 8 characters."
      return
    }
    else if {
        passowrd_err.innerHTML = " All good to go."
    }
})

btn.addEventListener("click", validate1)
function validate1 {
    
    alert("Are you sure you want to submit?");
    alert(Successful Signup!)

 
}
