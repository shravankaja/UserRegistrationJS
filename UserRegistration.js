console.log("Welcome To User Registration");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let  FirstNamePattern = "^[A-Z][a-zA-Z]{2,}$";
  let  LASTNAMEPATTERN = "^[A-Z][a-zA-Z]{2,}$";
  let  EMAILPATTERN = "^[a-zA-z0-9]{1,}([\\.\\_\\+\\-])?[a-zA-Z0-9]{0,}@[a-zA-z0-9]{1,}\\.[a-z]{2,3}(\\.)?([a-z]{2,3})?";
  let  PHONEPATTERN = "^[9][1][0-9]{10}$";
  let  PASSWORDPATTERN = "^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$";
    

  function validate(str,pattern) {
    var patt = new RegExp(pattern);
    var res = patt.test(str);
    return res;
  }
  
  function check(name,pattern) {
    let result = validate(name,pattern);
       if(result==true) {
           console.log("Entered name is correct");
           return true;
       }
       else {
           console.log("Please enter correct name");
           return false;
        }
  }

 let read = function (str,patternToCheck) {
        readline.question(str, function(nameToCheck) {
        let result = check(nameToCheck,patternToCheck);
        if(result==false){
          read(str,patternToCheck)
        }
      });
      return true;
 }

read("Enter First Name :",FirstNamePattern)


 

 


 