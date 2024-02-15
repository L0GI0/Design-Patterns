interface Command {
    execute();
}

class SimpleCommand implements Command {

    private payload: string;

    execute() {
        console.log(`SimpleCommand: Simple Commands can execute simple operation with some payload: ${this.payload}`);
    }

    constructor(payload: string) {
        this.payload = payload;
    }
}

class ComplexCommand implements Command {

    private receiver: Receiver;

    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string){
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    execute(){
        console.log(`Complex Command: Complex Command does complex commands using receiver`);
        this.receiver.doSomething(this.a);;
        this.receiver.doSomethingElse(this.b);
    }
}

class Receiver {
    public doSomething(a: string){
        console.log(`Receiver working on (${a})`)
    }

    public doSomethingElse(b: string){
        console.log(`Receiver also working on (${b})`)
    }
}

class Invoker {

    private onStart: Command;

    private onFinish: Command;

    setOnStart(command: Command) {
        this.onStart = command;
    }

    setOnFinish(command: Command) {
        this.onFinish = command;
    }

    doSomethingImportant() {
        console.log('Invoker: Before onStart command log');
        if(this.isCommand(this.onStart)){
            this.onStart.execute();
        }

        console.log('Invoker: Executing some business logic');

        console.log('Invoker: Before onFinish command log');
        if(this.isCommand(this.onFinish)){
            this.onFinish.execute();
        }
    }

    isCommand(object: Command): object is Command {
        return object.execute !== undefined;
    }
}

const invoker = new Invoker();

invoker.setOnStart(new SimpleCommand('Simple task'));

const receiver = new Receiver();

const complexCommand = new ComplexCommand(receiver, 'Send email', 'Save report');

invoker.setOnFinish(complexCommand);

invoker.doSomethingImportant();