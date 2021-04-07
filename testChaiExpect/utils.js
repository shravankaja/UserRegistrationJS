module.exports ={
    testPattern(str,pattern) {
      var patt = new RegExp(pattern);
      var res = patt.test(str);
      let obj = {
        name : str,
        age : 24
      }
      if(res == true) {
          return [str,obj,true];
      }
      else {
        return [str,obj,false];
      }
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