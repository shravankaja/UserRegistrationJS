const assert = require('chai').assert
const vali = require('./UserRegistration')
const t = require('./Constants')


describe("Test Pomise", function() {
    it("test first name",function(done) {
        this.timeout(5000);
    vali.validate("Shravan",t.FirstNamePattern,"test").then(function(result) {
    assert.equal(result,'true'); done()})
    })
    
    it("test last name",function(done) {
        this.timeout(5000);
    vali.validate("Kaja",t.LASTNAMEPATTERN,"test").then(function(result) {
    assert.equal(result,'true'); done()})
    })

    it("test email",function(done) {
        this.timeout(5000);
    vali.validate("Kaja@gamil.com",t.EMAILPATTERN,"test").then(function(result) {
    assert.equal(result,'true'); done()})
    })

    it("test phone",function(done) {
        this.timeout(5000);
    vali.validate("919740216522",t.PHONEPATTERN,"test").then(function(result) {
    assert.equal(result,'true'); done()})
    })

    it("test password",function(done) {
        this.timeout(5000);
    vali.validate("JumpinhJack24&",t.PASSWORDPATTERN,"test").then(function(result) {
    assert.equal(result,'true'); done()})
    })
   })
    
    
    

