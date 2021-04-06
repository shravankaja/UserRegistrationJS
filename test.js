const utils = require('./utils')
const assert = require('chai').assert
let vali = require('./UserRegistration')
const t= require('./Constants');

let firstName = "Shravan";
let lastName = "Kaja";  
let email ="shravan.kaja@gmail.com";
let phoneNumber = "919740216522"
let password ="JumpingJack24$"

  
describe("Testing Pattern validating method", function () {
    
    it('Test first name pattern in string', function () {
        assert.equal(utils.testPattern(firstName, t.FirstNamePattern), true)
    })
    it('Test last name pattern in string ', function () {
        assert.equal(utils.testPattern(lastName, t.LASTNAMEPATTERN), true)
    })

    it('Test email pattern in string ', function () {
        assert.equal(utils.testPattern(email,t.EMAILPATTERN), true)
    })

    it('Test phone pattern in string', function () {
        assert.equal(utils.testPattern(phoneNumber,t.PHONEPATTERN), true)
    })

    it('Test password pattern in string ', function () {
        assert.equal(utils.testPattern(password, t.PASSWORDPATTERN), true)
    })
});

describe("Testing if incorrect value is entered", function() {

    it("Test if wrong firstName is caught ", function () {
        assert.equal(utils.check("s",t.FirstNamePattern),false)
    })

    it("Test if wrong lastName is caught ", function () {
        assert.equal(utils.check("s",t.LASTNAMEPATTERN),false)
    })

    it("Test if wrong email is caught ", function () {
        assert.equal(utils.check("shravan.kaja@",t.EMAILPATTERN),false)
    })

    it("Test if wrong phoneNumber is caught ", function () {
        assert.equal(utils.check("9197425",t.PHONEPATTERN),false)
    })

    it("Test if wrong phone password is caught ", function () {
        assert.equal(utils.check("Addtexthere",t.PASSWORDPATTERN),false)
    })
    
});



 


        
    
