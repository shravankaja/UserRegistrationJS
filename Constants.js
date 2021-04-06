let FirstNamePattern = "^[A-Z][a-zA-Z]{2,}$";
let LASTNAMEPATTERN = "^[A-Z][a-zA-Z]{2,}$";
let EMAILPATTERN = "^[a-zA-z0-9]{1,}([\\.\\_\\+\\-])?[a-zA-Z0-9]{0,}@[a-zA-z0-9]{1,}\\.[a-z]{2,3}(\\.)?([a-z]{2,3})?";
let PHONEPATTERN = "^[9][1][0-9]{10}$";
let PASSWORDPATTERN = "^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$";

module.exports = { FirstNamePattern, LASTNAMEPATTERN , EMAILPATTERN, PHONEPATTERN, PASSWORDPATTERN }
