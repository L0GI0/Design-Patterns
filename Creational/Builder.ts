interface Builder {
    produceProductA();
    produceProductB();
    produceProductC();
}

class ConcreteBuilder1 implements Builder {
    private product: Product1;


    constructor() {
        this.product = new Product1();
    }

    reset(){
        this.product = new Product1();
    }

    produceProductA() {
        this.product.parts.push('A');
    }

    produceProductB() {
        this.product.parts.push('B');
    }

    produceProductC() {
        this.product.parts.push('C');
    }

    getProduct() {
        const result = this.product;
        this.reset();

        return result;
    }
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(`, `)}\n`)
    }
}

class Director {
    builder: Builder
    
    constructor(builder?: Builder){
        
        if(builder)
            this.builder = builder;
    }

    simpleConstruct(){
        this.builder.produceProductA();
    }

    advancedConstruct(){
        this.builder.produceProductA();
        this.builder.produceProductB();
        this.builder.produceProductC();
    }

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

}

function clientCode() {

    const builder = new ConcreteBuilder1();

    const director = new Director(builder);

    director.simpleConstruct();

    console.log(`Simple construct:`)

    console.log(builder.getProduct().listParts())

    console.log(`Advanced construct:`)

    director.advancedConstruct();

    console.log(builder.getProduct().listParts())
}

clientCode();