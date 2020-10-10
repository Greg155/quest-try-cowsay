const info = require('./information.js');
var cowsay = require("cowsay");

console.log(info);

console.log(cowsay.say({
    text : ` i am ${info.name}, i am learning at ${info.campus}`,
    e : "OO",
    T : "U "
}));