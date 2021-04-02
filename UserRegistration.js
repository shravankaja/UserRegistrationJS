console.log("Welcome To User Registration");

const prompt = require('prompt-sync')()

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let FirstNamePattern = "^[A-Z][a-zA-Z]{2,}$";
let LASTNAMEPATTERN = "^[A-Z][a-zA-Z]{2,}$";
let EMAILPATTERN = "^[a-zA-z0-9]{1,}([\\.\\_\\+\\-])?[a-zA-Z0-9]{0,}@[a-zA-z0-9]{1,}\\.[a-z]{2,3}(\\.)?([a-z]{2,3})?";
let PHONEPATTERN = "^[9][1][0-9]{10}$";
let PASSWORDPATTERN = "^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$";


function testPattern(str, pattern) {
  var patt = new RegExp(pattern);
  var res = patt.test(str);
  return res;
}

function check(name, pattern) {
  let result = testPattern(name, pattern);
  if (result == true) {
    console.log("Entered name is correct");
    return true;
  }
  else if (result == false) {
    console.log("Please enter correct name");
    return false;
  }
}

let read = function (str) {
  let value = prompt(str)
  return value;
}

let validate = function (str, patternToCheck) {
  return new Promise((resolve, reject) => {
    let result;
    setTimeout(() => {
      let nameCheck = read(str)
      result = check(nameCheck, patternToCheck);
      while (result == false) {
        nameCheck = read(str)
        result = check(nameCheck, patternToCheck);
        if (result == true) {
          resolve('done')
          break;
        }

      }

    }, 100)

  });
}

validate("Enter first name :",FirstNamePattern).then(()=>validate("Enter last name :",LASTNAMEPATTERN))




