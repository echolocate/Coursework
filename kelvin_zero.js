// set 'kelvin' variable to 0, probably could do this
//interactively at some point, rather than changing 
// its value in the code 
const kelvin = 0;
// same formula as previously
let celsius = kelvin - 273;
// calculate fahrenheit, all same code
fahrenheit = celsius * (9 / 5) + 32;
// rounds the result from the previous calculation down 
// using the .floor() method from the Math object.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);