
interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {


    operation(): string {
        return 'Component operation'
    }
}

class Decorator implements Component {

    protected component: Component;


    constructor(component: Component) {
        this.component = component;
    }

    operation() {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {

    operation(): string {
        return `ConcreteDecoratorA ${super.operation()}`
    }
}

class ConcreteDecoratorB extends Decorator {

    operation(): string {
        return `ConcreteDecoratorB ${super.operation()}`
    }
}

const clientCode = (component: Component) => {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log(`Client: Simple component:`)
clientCode(simple);
console.log('');


const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1)

console.log(`Client: Decorator component:`);
clientCode(decorator2);