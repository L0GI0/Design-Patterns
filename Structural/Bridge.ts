

class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation() {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with :\n${result}`
    }
}

/* Abstraction can be extended without changing the implementation classes. */

class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with: \n${result}`;
    }
}

interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return `Concrete implementationOperation A \nHere's result for platfrom A`;
    }
}

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return `Concrete implementationOperation B \nHere's result for platform B`;
    }
}


function clientCode(abstraction: Abstraction) {

    console.log(abstraction.operation());

}


let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);

clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);

clientCode(abstraction);