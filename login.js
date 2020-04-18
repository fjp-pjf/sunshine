function validate(){

    let name=document.getElementById("name").value.trim();
    let pwd = document.getElementById("pwd");
    let paswrd = document.getElementById("paswrd");

    let pwdErrorFlag = false;


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
       if (pwdErrorFlag===true){
            return false;
        }
        else{
            return true;
        }

}