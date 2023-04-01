var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');


describe("greet", () => {
  test("should return named greeting", () => {
    expect(greet("Elizabeth")).toEqual("Hello, Elizabeth");
  });

  test("default greeting", () => {
    expect(greet(null)).toEqual("Hello there!");
  });

  test("upper case", () => {
    expect(greet("JOSE")).toEqual("HELLO JOSE");
  });

  test("two names", () => {
    expect(greet(["Jose","Ana"])).toEqual("Hello Jose, Ana");
  });

  test("several names", () => {
    expect(greet(['Alana','Felipe','Consuela','Jinxiang'])).toEqual("Hello Alana, Felipe, Consuela, Jinxiang");
  });

});
