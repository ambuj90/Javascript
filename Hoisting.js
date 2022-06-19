 // In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope
    //  before code execution. Basically, it gives us an advantage that no matter where functions and variables are 
    //  declared, they are moved to the top of their scope regardless of whether their scope is global or local.
    
    // // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
 
console.log(a); // 10
console.log(b);


//Variables defined with let and const are hoisted to the top of the block, but not initialized.
//Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
//Using a let variable before it is declared will result in a ReferenceError.
//The variable is in a "temporal dead zone" from the start of the block until it is declared:

var name;
console.log(name); // undefined
name = 'Ambuj Sharma';
