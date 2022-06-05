// set 'kelvin' variable to any value using 'const'
const kelvin = 293;
// create 'celsius' variable, Value of celsius should
// now be: 293 - 273 = 20
var celsius = kelvin - 273;
// create 'fahrenheit' variable, calculate value
// based on conversion formula
var fahrenheit = celsius * (9 / 5) + 32;
// rounds the result from the previous calculation down
// from calculated value of 67.73 to using the .floor() method from the Math object.
fahrenheit = Math.floor(fahrenheit);
// using backticks (not apostropes, doublequotes), output string 
// literal template substitution for temperature in rounded form 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);