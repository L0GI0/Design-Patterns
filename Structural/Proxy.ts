

interface Subject {
    request(): void;
}

class RealSubject implements Subject {

    
    request(): void {
        console.log('RealSubject: Handling request.');
    }
}

class RealProxy implements Subject {
    private realSubject: RealSubject;


    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if(this.checkAccess()){
            this.logAccess()
            this.realSubject.request();
        }
    }

    checkAccess() {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    logAccess() {
        console.log('Proxy: Logging the time of request.');
    }
}

function clientCode(subject: Subject) {
    subject.request();
}

const realSubject = new RealSubject();

console.log('Client: Executing the client code with a real subject:');

clientCode(realSubject);

console.log('Client: Executing the same client code with a proxy:');

const proxy = new RealProxy(realSubject);

clientCode(proxy);

