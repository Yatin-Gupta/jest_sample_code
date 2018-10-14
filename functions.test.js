// run npm test
// we can run jest in watch mode by setting
// "jestwatch": jest --watchAll
// in package.json
// so as you save .test file, it automatically run test
const functions = require("./functions");

// To call before following before and after each test
const initDb = () => console.log("Init Db");
const closeDb = () => console.log("Close Db");

// To run before and after each test case
beforeEach(() => initDb());
afterEach(() => closeDb());

// To run before and after every test case
beforeAll(() => initDb());
afterAll(() => closeDb());

// Test suites is no of test files running. If we have some other test file then that adds up Test suit
test("Add 2+2 equals to 4", () => {
  console.log("Add 2+2 equals to 4");
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2+2 not equals to 4", () => {
  console.log("Add 2+2 not equals to 4");
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Test if value is Null", () => {
  console.log("Test if value is Null");
  expect(functions.isNull()).toBeNull();
});

test("If value is falsy", () => {
  console.log("If value is falsy");
  expect(functions.checkValue(0)).toBeFalsy();
});

test("User must be Yatin Gupta", () => {
  console.log("User must be Yatin Gupta");
  expect(functions.createUser()).toEqual({
    firstName: "Yatin",
    lastName: "Gupta"
  });
});

test("Load to be less than 1600", () => {
  console.log("Load to be less than 1600");
  const load1 = 700;
  const load2 = 900;
  expect(load1 + load2).toBeLessThan(1600);
  // expect(load1 + load2).toBeLessThanOrEqual(1600); This expect will not be read
});

// Regex
test("There is no I in team", () => {
  console.log("There is no I in team");
  expect("team").not.toMatch(/I/);
});

// Array
test("Admin must be in username", () => {
  const ar = ["amit", "mohan", "admin"];
  console.log("Admin must be in username");
  expect(ar).toContain("admin");
});

// Async Request
test("User fetched name is Leanne Graham", () => {
  expect.assertions(1); // This is mandatory for async calls to ensure that assertions made in callback actually called. If not included then every test run successfully even if not validate
  // here return statement is also mandatory if in case assetion statement is used
  // If assetion statement is removed and then u run, then it perform right but may give warning for adding return statement
  // If return statement removed then it will not show error in case of wrong result
  // so we should add both assetion and return statement
  console.log("User fetched name is Leanne Graham");
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham1");
  });
});

// Async Await
test("User fetched name is Leanne Graham", async () => {
  expect.assertions(1);
  console.log("User fetched name is Leanne Graham async");
  const data = await functions.fetchUser(); // we don't use then here
  expect(data.name).toEqual("Leanne Graham");
});

const nameCheck = () => console.log("Checking NAmes...");
// To run beforeEach for specific functions
describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Arun", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
});
