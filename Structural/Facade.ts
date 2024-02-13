
class Facade {
    protected subsystem1: Subsystem1;
    protected subsystem2: Subsystem2;


    constructor(subsystem1?: Subsystem1, subsystem2: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    operation(): string {
        let result = 'Facade initializes subsystems:\n'

        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade order subsystems to perform the action:\n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}

class Subsystem1 {
    public operation1(): string {
        return 'Subsystem1 Ready!\n';
    }

    public operationN(): string {
        return 'Subsystem1 Go!\n';
    }
}

class Subsystem2 {
    public operation1(): string {
        return 'Subsystem2 Ready!\n';
    }

    public operationZ(): string {
        return 'Subsystem2: Fire!';
    }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */

function clientCode(facade: Facade) {
    console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();

const facade = new Facade(subsystem1, subsystem2);

clientCode(facade)