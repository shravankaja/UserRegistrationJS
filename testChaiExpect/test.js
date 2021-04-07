const assert = require('chai').assert

const util = require('./utils')
const t = require('./Constants')
var expect = require('chai').expect

describe("Testing test pattern method : ", () => {

    it("Test if true value is resturned ", () => {

        const result = util.testPattern("Shravan",t.FirstNamePattern);
        expect(result[2]).to.equal(true);
        expect(result[2]).to.not.equal(false);  
    })

    it("Test if object returned has all expected members ", () => {
        const result = util.testPattern("Shravan",t.FirstNamePattern)
        let obj = {
            name : "Shravan",
            age : 24
        }
        expect(result[1]).to.deep.equal(obj);   
        expect(result[1]).to.deep.include(obj);      
    })

    it("Test if object returned has all values ", () => {
        const result = util.testPattern("Shravan",t.FirstNamePattern)
        expect(result[1]).to.have.all.keys('name', 'age');     
    })

    it("Test for a specific type", () => {
        const result = util.testPattern("Shravan",t.FirstNamePattern)
        expect(result[1]).to.be.an('object')
        expect(result[0]).to.be.an('string')
        expect(result[2]).to.be.an('boolean') 
    })

    it("Test to if return array includes expected values ", ()=> {
        const result = util.testPattern("Shravan",t.FirstNamePattern);
        expect(result).to.include("Shravan");
        expect(result).to.include(true);
        expect(result).to.not.include(false);
        expect(result[1]).to.include.all.keys('name','age')
    })

    // " " is condidered as false vales and valid values like "Shravan" or 
    // true or a number is considered as truthy values
    it("If empty string is retured should be considered as false value", () => {
        const result = util.testPattern("",t.FirstNamePattern);
        expect(result[0]).to.not.be.ok;
        const resultOne = util.testPattern("Shravan",t.FirstNamePattern)
        expect(resultOne[0]).to.be.ok;

    })

    it("If test string passes pattern match shoudl return true or false accordinly",()=> {
        const result = util.testPattern("Shravan",t.FirstNamePattern);
        expect(result[2]).to.be.true;
        expect(result[2]).to.not.be.false;  
        const resultOne = util.testPattern(" ",t.FirstNamePattern)
        expect(resultOne[2]).to.be.false;

    })

    it("To check value returned is null ", () => {
        let temp;
        const result = util.testPattern(" ", t.FirstNamePattern)
        if (result[0] == " ") temp = null
        expect(temp).to.be.null
    })

    it("To check value returned is not null ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        expect(result[0]).to.be.not.null;

    })

    it("To check value returned is undefined ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        const obj = Object.assign(result[1])
        obj.age = undefined;
        expect(obj.age).to.be.undefined;
    })

    it("To check value returned is defined ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        expect(result[1].name).to.not.be.undefined;
    })


    it("To check value returned is empty", () => {
        const result = util.testPattern("", t.FirstNamePattern)
        expect(result[0]).to.be.empty;
        expect(result).to.not.be.empty;
        expect(result).to.have.lengthOf(3)
    })

    it("Test to check if returned object is as expected", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        let obj = {
            name : "Shravana",
            age : 24
        }
        let obj1 = {
            name : "Shravan",
            age : 90
        }
        expect(result[1]).to.deep.equal(obj).but.not.equal(obj1)
    })

    it("To check value returned is above expected values", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[1].age).to.be.above(21);

    })

    it("To check value returned is below expected value", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[1].age).to.be.below(30);
    })

    it("To check value returned is at most of expected value", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[1].age).to.be.at.most(24);
    })

    it("To check value returned is within range", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[1].age).to.be.within(21,30);
    })

    it("To check instanc of ", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result).to.be.instanceOf(Array);
    })

    it("To check value returned object has a property", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[1]).to.have.property('name');
        expect(result[1]).to.have.own.property('name');
    })

    it("To check lenght of retunred array", ()=> {
        const result = util.testPattern("Shravan",t.FirstNamePattern)
        expect(result).to.be.lengthOf(3)
    })

    it("To check if returned string contains a expected sub string", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[0]).to.have.string("rav");
    })

    it("To check if returned object has all desired keys ", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        expect(result[1]).to.have.all.keys('name','age')
    })
});