interface  AbstractFactory {

    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;

}

class ConcreteFactory1 implements AbstractFactory {

    createProductA(){
        return new ConcreteProductA1()
    }

    createProductB(){
        return new ConcreteProductB1()
    }
}

class ConcreteFactory2 implements AbstractFactory {

    createProductA(){
        return new ConcreteProductA2();
    }

    createProductB(){
        return new ConcreteProductB2();
    }
}

interface AbstractProductA {
    usefullOperationA: () => void
}

class ConcreteProductA1 implements AbstractProductA  {
    usefullOperationA() {

    }
}

class ConcreteProductA2 implements AbstractProductA {
    usefullOperationA() {
        
    }
}

interface AbstractProductB {
    usefullOperationB()
}

class ConcreteProductB1 implements AbstractProductB  {
    usefullOperationB() {

    }
}

class ConcreteProductB2 implements AbstractProductB {
    usefullOperationB() {
        
    }
}

function clientCode(creator: AbstractFactory) {
    const productA = creator.createProductA();
    const productB = creator.createProductB();
    
    productA.usefullOperationA();
    productB.usefullOperationB()

}

clientCode(new ConcreteFactory1())
clientCode(new ConcreteFactory2())

