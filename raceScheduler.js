/* raceScheduler.js--   JavaScript code to sort race start times based
                        on age and registration date for fictional race meet.  
                        Demonstrates boolean conditionals (if/else)
*/

// create race number variable, assign it a random number 0->999
let raceNumber = Math.floor(Math.random() * 1000);
// create age numeric variable. Change true/false to test the age > 18 start time 
let earlyReg = true;
// create age numeric variable. Change value to test start times <18, =18, >18 
let age = 44;
// assign new race number value to reflect early registration
// otherwise leave it as it is
if (age > 18) {
    if (earlyReg == true) {
        raceNumber += 1000;
    }
}
// next part could be done with switch/case statements
// or nested if statements, used logical 'AND' for conciseness

// over 18's AND registered early start first
if (age > 18 && earlyReg == true) {
    console.log(`${raceNumber} Start Race: 9:30am.`);
}
// followed by over 18's AND didn't register early next
else if (age > 18 && earlyReg == false) {
    console.log(`${raceNumber} Start race: 11:00am`);
}
//... and then under 18's, regardless of when they registered
else if (age < 18) {
    console.log(`${raceNumber} Start race: 12:30am`);
    // finally those on the cusp, aged 18 exactly    
} else {
    console.log(`${raceNumber} Age: ${age} Check with registration desk`);
}
// age over 18 and earlyReg true:       9:30am
// age over 18 and earlyReg false:      11:00am
// age = 18, earlyReg true or false:    Check desk
// age under 18 earlyReg true or false: 12:30am (probably finish first anyway)