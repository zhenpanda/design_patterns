// Module Design Pattern
let chatModule = (() => {
    let privateVar = "private varaible";
    let privateFunc = () => {
        console.log("this is privateFunction"); 
        return privateVar;       
    }
    return {
        "func": function () {
            return privateFunc()
        }
    }
})();
// console.log(chatModule.func());

// object oriented design encapsulation 
// Module Reveal Pattern
let chatModule2 = (() => {
    let privateVar = "private varaible";
    let privateFunc = (newVar) => {
        console.log("this is privateFunction"); 
        return newVar;       
    }
    return {
        "public": privateVar,
        "func": function (newVar) {
            this.public = privateFunc(newVar);
            return this.public;
        }
    }
})();
console.log(chatModule2.func("new msg"));