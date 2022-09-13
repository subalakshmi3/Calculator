var userDetails = []; 

function storingData() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var emailId = document.getElementById("email").value;
    var emailValidation = emailId.match(/[a-z0-9]*@+[a-z]*[.]+\w{2,3}/);
    var nameValidation = name.match(/[a-zA-Z0-9,@,$]*/);       
    if(name == "" ) {
        document.getElementById("invalid-name-msg").innerHTML="*fill up the name*";
    } else if(name == nameValidation) {    
        document.getElementById("invalid-name-msg").innerHTML = "";				                             
        if(contact == "") {
            document.getElementById("invalid-contact-msg").innerHTML = "*fill up the contact number*";
        } else if(contact.length == 10 ) {  
            document.getElementById("invalid-contact-msg").innerHTML="";
            if(emailId == "") {
                document.getElementById("invalid-email-msg").innerHTML = "*fill up the email id*";
            } else if(emailId == emailValidation) { 
                document.getElementById("invalid-email-msg").innerHTML = "";                                                                              
                let userDetail = { 
                    "name" : document.getElementById("name").value,
                    "contact" : document.getElementById("contact").value,
                    "email" : document.getElementById("email").value
                };
                userDetails.push(userDetail);            
             } else { 
                 document.getElementById("invalid-email-msg").innerHTML = "*Invalid email id*";
             }  
         } else {
             document.getElementById("invalid-contact-msg").innerHTML = "*Invalid contact number*";
         }
    } else {
        document.getElementById("invalid-name-msg").innerHTML = "*Invalid username*";
    }   
        console.log();
    }


function showingDatas() {
    document.write(JSON.stringify(userDetails));
}                     
