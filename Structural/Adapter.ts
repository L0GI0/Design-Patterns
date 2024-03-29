class Target {
    public request(): string {
        return 'Target: The default target\s behavior.';
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {

    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        return this.adaptee.specificRequest().split('').reverse().join('');
    }
}


function clientCode(target: Target){
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:')
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird inferface. Can\'t understand')
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: Can work with it via the Adapter')

const adapter = new Adapter(adaptee);
clientCode(adapter);