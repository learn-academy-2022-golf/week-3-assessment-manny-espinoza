// ASSESSMENT 3: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
  // Create describe statement with desired function name (fibFunction) in quotes. Follow with anonymous function syntax.
  // Create it statement, describing the purpose of the function. Follow with anonymous function syntax.
  // Per set of given variables (fibLength/fibOutput), create expect statement. It takes in its parameter the function name, which takes in as its argument the fibLength arguments. Append with .toEqual() method that takes as its argument the expected outputs (fibOutput variables).
  // $ yarn jest
describe("fibFunction", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6;
    const fibOutput1 = [1, 1, 2, 3, 5, 8];
    expect(fibFunction(fibLength1)).toEqual(fibOutput1);
    const fibLength2 = 10;
    const fibOutput2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibFunction(fibLength2)).toEqual(fibOutput2);
  });
});
  // $ yarn jest
  // ReferenceError: fibFunction is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // Good error!
// b) Create the function that makes the test pass.
// Pseudocode
  // Create fibFunction using const keyword and follow with anonymous function syntax. Function takes in number as its parameter.
  // We want to first set a variable called fibArray to set the first two values of the array to be 1, 1.
  // Utilize a for loop and set the starting and ending points at index = 2 (since we want the function to take a number greater than 2), and iterate through each item in the array one by one (i++).
  // We set the [i] position of the fibArray equal to the result of adding the previous two numbers together.
  // Return the fibArray, and invoke the function (or in this case, run $ yarn jest).
  // $ yarn jest
const fibFunction = (number) => {
  let fibArray = [1, 1]
  for (let i = 2; i < number; i++) {
    fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
  }
  return fibArray;
};
  // $ yarn jest (results)
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Pass!



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
  // Create describe statement with desired function name (objectSorter) in quotes. Follow with anonymous function syntax.
  // Create it statement, describing the purpose of the function. Follow with anonymous function syntax.
  // Per set of given variables (studyMinutesWeek/studyOutput), create expect statement. It takes in its parameter the function name, which takes in as its argument the studyMinutesWeek arguments. Append with .toEqual() method that takes as its argument the expected outputs (studyOutput variables).
  // $ yarn jest
describe("objectSorter", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };
    const studyOutput1 = [15, 15, 20, 30, 30, 60, 90];
    expect(objectSorter(studyMinutesWeek1)).toEqual(studyOutput1);
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };
    const studyOutput2 = [10, 15, 20, 45, 60, 65, 100];
    expect(objectSorter(studyMinutesWeek2)).toEqual(studyOutput2);
  });
});
  // $ yarn jest
  // ReferenceError: objectSorter is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       2 failed, 2 total
  // Good error!
// b) Create the function that makes the test pass.
// Pseudocode
  // Using const keyword, create the objectSorter function (using anonymous function syntax). Within the function parameters, put "object". This allows for any object to be input during actual function invocation.
  // In the function code block, we want to return the result of passing an object through the Object.values() method.
  // Additionally we will want to append the entirety of that with a sort method, specifying within its parentheses (argument) that we want to sort from least to greatest.
  // We can provide "(a, b) => a - b" to the .sort() argument.
  // $ yarn jest
const objectSorter = (object) => {
  return Object.values(object).sort((a, b) => a - b);
};
  // $ yarn jest (results)
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total
  // Pass!



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
  // Create describe statement with desired function name (accumulator) in quotes. Follow with anonymous function syntax.
  // Create it statement, describing the purpose of the function. Follow with anonymous function syntax.
  // Per set of given variables (accountTransactions/accountOutputs), create expect statement. It takes in its parameter the function name, which takes in as its argument the accountTransactions arguments. Append with .toEqual() method that takes as its argument the expected outputs (accountOutputs variables).
  // $ yarn jest
describe("accumulator", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9];
    const accountOutputs1 = [100, 83, 60, 51];
    expect(accumulator(accountTransactions1)).toEqual(accountOutputs1);
    const accountTransactions2 = [250, -89, 100, -96];
    const accountOutputs2 = [250, 161, 261, 165];
    expect(accumulator(accountTransactions2)).toEqual(accountOutputs2);
    const accountTransactions3 = [];
    const accountOutputs3 = [];
    expect(accumulator(accountTransactions3)).toEqual(accountOutputs3);
  });
});
  // $ yarn jest
  // ReferenceError: accumulator is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       3 failed, 3 total
  // Good error!
// b) Create the function that makes the test pass.
// Pseudocode
  // Using const keyword, create accumulator function. It takes "array" within its parameters.
  // Within the function code block, we want to return the result of calling the .map() HOF on whatever array is called during function invocation.
  // We provide the .map() HOF with a value parameter, and transform that value by adding the sum to it and having that become the new value (like this: value => sum += value).
  // In front of the (value => sum += value) but still within parentheses, we add a sum keyword, and at the end of (value => sum += value) we add (0). These two components act to create a cumulative sum as the .map() method iterates through each item in any given array, and the (0) serves as a starting place for the sum (a sum of nothing equals 0).
const accumulator = (array) => {
  return array.map( ((sum) => (value) => (sum += value)) (0) );
};
  // $ yarn jest (results)
  // Test Suites: 1 passed, 1 total
  // Tests:       3 passed, 3 total
  // Pass!