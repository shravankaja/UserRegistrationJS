module.exports ={
    
    testPattern(str,pattern) {
        var patt = new RegExp(pattern);
        var res = patt.test(str);
        return res;
    },
     check(name, pattern) {
        let result = module.exports.testPattern(name,pattern);
        if (result == true) {
          console.log("Validated");
          return true;
        }
        else if (result == false) {
          console.log("Please follow format");
          return false;
        }
      },
      read(str,prompt) {
        let value = prompt(str)
        return value;
      }
}