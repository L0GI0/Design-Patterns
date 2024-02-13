

abstract class Component {
    protected parent!: Component | null;


    addParent(parent: Component): void {
        this.parent = parent;
    }

    removeParent(): void {
        this.parent = null;
    }

    public add(component: Component): void { };
    
    public remove(component: Component): void { };

    public isComposite(): boolean {
        return false;
    }

    abstract operation(): string;
}

class Leaf extends Component {
    public operation(): string {
        return 'Leaf';
    }
}

class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component)
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);

        this.children = this.children.splice(componentIndex, 1);
    }

    public operation(): string {
        const result: string[] = [];
        for (const child of this.children) {
            result.push(child.operation());
        }

        return `Branch(${result.join('+')})`;
    } 

    public isComposite(): boolean {
        return true;
    }
}

function clientCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log(`Client: I\'ve got a simple component`);
clientCode(simple);
console.log('');

const tree = new Composite();

const branch1 = new Composite();
const branch2 = new Composite();

branch1.add(new Leaf());
branch1.add(new Leaf());

branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);

console.log(`Client: Composite tree:`);
clientCode(tree)
console.log('');

function clientCode2(component1: Component, component2: Component) {

    if(component1.isComposite()){
        component1.add(component2)
    }

    console.log(`RESULT: ${component1.operation()}`);

}

console.log('Client: No need to check the components classes even when managing the tree:');
clientCode2(tree, simple);