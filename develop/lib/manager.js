const Employee = require("./Employee");

class Manager extends Employee {
    
        constructor(name, id, email, title, officeNumber){
            super(name, id, title, email);
            this.officeNumber = officeNumber;
    }
        getOfficeNumber() {
            return this.officeNumber;
        }
        getRole(){
            return "Manager";
        }
    }

module.exports = Manager;
