// Factory Method:


abstract class Creator {

    public abstract  factoryMethod(): Product

    public someOperation(): string {
        const product = this.factoryMethod();

        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }

}

interface Product {
    operation(): string;
}


class ConcreteFactory1 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteFactory2 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

class ConcreteProduct1 implements Product {
    operation() {
        return `Operation in ConcreteProduct1`
    }
}

class ConcreteProduct2 implements Product {
    operation() {
        return `Operation in ConcreteProduct2`
    }
}

class ClientCode {
    runOperations(creator: Creator) {
        const product = creator.factoryMethod()
        product.operation();
    }
}

const client = new ClientCode

client.runOperations(new ConcreteFactory1())
client.runOperations(new ConcreteFactory2())
