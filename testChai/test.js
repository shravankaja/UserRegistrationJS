const assert = require('chai').assert

const util = require('./utils')
const t = require('./Constants')

describe("Testing test pattern method with returning string value   : ", () => {

    

    // when passed an empty string it is a falsy value to 
    // so test will pass only with is it not okay
    it("When passed an empty string ", () => {
        const result = util.testPattern(" ", t.FirstNamePattern)
        assert.isNotOk(false, result[0]);

    })

    // here we passed a valid string due to which test case is passed 
    // when we use isOk 
    it("Wnen passed string  ", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern);
        assert.isOk(true, result[0])
    })

    it("To check same string is returned ", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.notEqual("ghss", result[0])
    })

    // strictEqual is used to check for same type and same value like string 
    // returned has to be string type and same value as expected
    it("To check if only string type is returned and expected string only ", () => {
        const result = util.testPattern("Shraba", t.FirstNamePattern);
        assert.strictEqual("Shraba", result[0])
    })

    // when we are expecting any other return type or to check if both the values 
    // are of different type
    it("To check if any other  type is returned and expected string only ", () => {
        const result = util.testPattern("Shraba", t.FirstNamePattern);
        assert.notStrictEqual(result[1], result[0])
    })

    // deep equal check if all the arttributes of a object match with the object 
    // we want to assert 
    it("To check if object is returned with same attributes", () => {
        let obj = {
            name: "Shravan",
            age: 24
        }
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.deepEqual(obj, result[1])

    })

    it("To check if different object is returned with same attributes", () => {
        let obj = {
            name: "Shravan",
            age: 24
        }
        const result = util.testPattern("Shravan1", t.FirstNamePattern)
        assert.notDeepEqual(obj, result[1])
    })

    // isAbove method is to check if our returned value is above or greater
    // than our expected value.
    it("To check value returned is above expected values", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.isAbove(result[1].age, 21)

    })

    it("To check value returned is atleast near to expected values", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.isAtLeast(result[1].age, 24)

    })

    it("To check value returned is below expected values", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.isBelow(result[1].age, 25)

    })

    it("To check value returned is at most  expected values", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.isBelow(result[1].age, 25)

    })

    it("To check value returned is true ", () => {
        const result = util.testPattern("Shravan", t.FirstNamePattern)
        assert.isTrue(result[2])

    })

    it("To check value returned is not true ", () => {
        const result = util.testPattern("S", t.FirstNamePattern)
        assert.isNotTrue(result[2])

    })

    it("To check value returned is False ", () => {
        const result = util.testPattern("S", t.FirstNamePattern)
        assert.isFalse(result[2])

    })

    it("To check value returned is not False ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.isNotFalse(result[2])

    })

    it("To check value returned is null ", () => {
        let temp;
        const result = util.testPattern(" ", t.FirstNamePattern)
        if (result[0] == " ") temp = null
        assert.isNull(temp)
    })

    it("To check value returned is not null ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.isNotNull(result[0])

    })

    it("To check value returned exists ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.exists(result[0])

    })

    it("To check value returned not  exists ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.notExists(result[1].grade)

    })

    it("To check value returned is undefined ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        const obj = Object.assign(result[1])
        obj.age = undefined;
        assert.isUndefined(obj.age)
    })

    it("To check value returned is defined ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.isDefined(result[1].name)

    })

    it("To check value returned is function and not function", () => {
        let obj = {
            name: "Shravan",
            age: 24,
            getAge: function () {
                return this.age;
            }
        }
        assert.isFunction(obj.getAge)
        assert.isNotFunction(obj.name)
    })


    it("To check value returned is object ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.isObject(result[1])
        assert.isNotObject(result[2])
    })

    it("To check value returned is array ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.isArray(result)

    })

    it("To check value returned is string and number ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.isString(result[0])
        assert.isNumber(result[1].age)

    })

    it("To check value returned is of sepcific type ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.typeOf(result[2], 'Boolean');
        assert.typeOf(result[0], 'string');
        assert.typeOf(result[1], 'object');
    })

    it("To check value returned array includes ", () => {
        const result = util.testPattern("Shravana", t.FirstNamePattern)
        assert.include(result, "Shravana")
        assert.notInclude(result, "Mark")

    })

    it("To check value returned number is close to  ", () =>  {
        const result = util.testPattern("Shravana",t.FirstNamePattern)
        assert.closeTo(result[1].age,25,5)
    
    })
}); 