console.log("Welcome To User Registration");

const prompt = require('prompt-sync')()
const utils = require('./utils')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const t = require('./Constants');



let validate = function (str, patternToCheck) {
  return new Promise((resolve, reject) => {
    let result;
    setTimeout(() => {
      let nameCheck = utils.read(str, prompt)
      result = utils.check(nameCheck, patternToCheck)
      if (result == true) return resolve('true')
      while (result == false) {
        nameCheck = utils.read(str, prompt)
        result = utils.check(nameCheck, patternToCheck)
        if (result == true) {
          return resolve('true')
          break;
        }
      }
    }, 1000)
  });
}

let print = function (str) {
  console.log(str);
}

validate("Enter first name :", t.FirstNamePattern).then(() => validate("Enter last name :", t.LASTNAMEPATTERN)).then(
() => validate("Enter email :", t.EMAILPATTERN)).then(() => validate("Enter phone number :", t.PHONEPATTERN)).then(() =>
validate("Enter Password :", t.PASSWORDPATTERN)).then(() => print("All fields are validated")).catch(function () { console.log("The error is handled, continue normally"); })




