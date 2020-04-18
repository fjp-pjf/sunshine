


function validate(){

       let name = document.getElementById("name").value.trim();
       let number = document.getElementById("number");
       let email = document.getElementById("email");
       let pwd = document.getElementById("pwd");
       let error = document.getElementById("error");
       let wrong = document.getElementById("wrong");
       let paswrd = document.getElementById("paswrd");


       let pwdErrorFlag = false;
       let phoneErrorFlag = false;
       let emailErrorFlag = false;
       
       
       let rgexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
        
        /*password */
          if(rgexp.test(pwd.value.trim())){
              if(pwd.value.length<9){
                     paswrd.innerHTML="Short";
                     paswrd.style.color="red";
                     pwdErrorFlag = true;
              }
              else if(pwd.value.length<12){
                     paswrd.innerHTML="Strength:Medium";
                     paswrd.style.color="orange";
              }
              else{
                    paswrd.innerHTML="Strength:Strong";
                     paswrd.style.color="green";
              }
       }
       else{
              paswrd.innerHTML="retry password";
              paswrd.style.color="red";
              pwdErrorFlag = true;
       }
      

       /*phone number validation*/

       let rgex = /^(\d{10}|(\d{3}\-\d{3}\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}\s\d{3}\s\d{4}))$/;
       if (!rgex.test(number.value.trim())){
              wrong.innerHTML="invalid no.";
              wrong.style.color="red";
              phoneErrorFlag = true;
       }
      
       /*email validation*/
       let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

       if (!regexp.test(email.value.trim())){
              error.innerHTML="invalid email";
              error.style.color="red";
              emailErrorFlag = true; 
       }
       
       if (pwdErrorFlag===true||emailErrorFlag===true||phoneErrorFlag===true){
              return false;
       }
       else{
              return true;
       }
}
       