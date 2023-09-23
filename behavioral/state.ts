/**
 * References: https://refactoring.guru/design-patterns/state
 * Intent: State is a behavioral design pattern that lets an object alter its behavior when its internal state changes.
 * It appears as id the object changed its class.
 */

class Context {
    /**
     * @type {State} A reference to the current state of the Context.
     */
    private state: State;

    constructor(state: State) {
        console.log('2. Context');
        //this.state = state;
        this.updateState(state);
    }

    /**
     * The Context allows changing the State object at runtime.
     */
    public updateState(state: State): void {
        console.log(`Context: Update to ${(<any>state).constructor.name}`);
        this.state = state;
        this.state.setContext(this);
    }

    /**
     * The Context delegates part of its behavior to the current State object.
     */
    public request1(): void {
        this.state.handleRequest1();
    }

    public request2(): void {
        this.state.handleRequest2();
    }
}

abstract class State {
    protected context: Context;

    constructor() {
        console.log('1. State');
        // this.context = new Context(this);
    }

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract handleRequest1(): void;
    public abstract handleRequest2(): void;
}

/**
 * Concrete States impelemt various behaviours, associated with a state of the Context.
 */
class StateA extends State {
    public handleRequest1(): void {
        console.log('StateA handles request 1');
        console.log('StateA want to change state of the context');
        this.context.updateState(new StateB);
    }
    public handleRequest2(): void {
        console.log('StateA handles request 2');
    }
}

class StateB extends State {
    public handleRequest1(): void {
        console.log('StateB handles request 1');
    }
    public handleRequest2(): void {
        console.log('StateB handles request 2');
        console.log('StateB want to change state of the context');
        this.context.updateState(new StateA);
    }
}

/**
 * Client code
 */
const context = new Context(new StateA());
context.request1(); // StateA
context.request2(); // StateB
context.request2(); // StateA
context.request1(); // StateA
context.request1(); // StateB

