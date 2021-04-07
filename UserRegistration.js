console.log("Welcome To User Registration");

const prompt = require('prompt-sync')()
const utils = require('./utils')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const t = require('./Constants');



let validate = function (str, patternToCheck,type) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if(type.charAt(0)=="t")
      {
       let result = utils.check(str, patternToCheck)
      if (result == true)  return resolve('true')
      else if(result == false) return reject('false')
      }
      else if(type != "test"){
      let nameCheck = utils.read(str, prompt)
      let result = utils.check(nameCheck, patternToCheck)
      if (result == true) return resolve('true')
      while (result == false) {
        nameCheck = utils.read(str, prompt)
        result = utils.check(nameCheck, patternToCheck)
        if (result == true) {
          return resolve('true')
          break;
        }
      }
      }
    }, 4000)
  });
}

module.exports = { validate }
let print = function (str) {
  console.log(str);
}

//validate("Enter first name :", t.FirstNamePattern,"notest").then(() => validate("Enter last name :", t.LASTNAMEPATTERN,"notest")).then(
//() => validate("Enter email :", t.EMAILPATTERN,"notest")).then(() => validate("Enter phone number :", t.PHONEPATTERN,"notest")).then(() =>




