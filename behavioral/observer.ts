/**
 * Observer in Typescript
 * References: https://refactoring.guru/design-patterns/observer/typescript/example
 */

import { timeStamp } from "console";
import { publicDecrypt } from "crypto";
import { setMaxIdleHTTPParsers } from "http";

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
interface Publisher {
    // Attach an observer to the subject.
    attach(subscriber: Subscriber): void;
    // Detach an observer from the subject
    detach(subscriber: Subscriber): void;
    // Notify all observers abaout an event
    notify(): void;
}

class ConcretePublisher implements Publisher {
    /**
     * @type {Observer[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private subscribers: Subscriber[] = [];

    // Subject to observe
    subject: string = '';

    /**
     * The subscription management methods.
     */
    attach(subscriber: Subscriber): void {
       if(this.subscribers.includes(subscriber)) {
             return console.log(`PUBLISHER: '${subscriber.identifier}' has been exist!`);
       }

       this.subscribers.push(subscriber);
       console.log(`PUBLISHER: '${subscriber.identifier}' has subscribed successfully.`);
    }

    detach(subscriber: Subscriber): void {
        if(this.subscribers.indexOf(subscriber) < 0) {
            console.log(`PUBLISHER: '${subscriber.identifier}' has not exist!`);
        }

        console.log(`PUBLISHER: '${subscriber}' has unsubscribed successfully.`);
    }

    /**
     * Trigger an upadte in each subscribers
     */
    notify(): void {
        const count = this.subscribers.filter((obj) => obj.subject === this.subject).length;
        const countSubs = count == this.subscribers.length ? 'all subscribers' : 
        (count > 1 ? `${count} subscribers` : `${count} subscriber`);

        console.log(`PUBLISHER: Notifying ${countSubs}.`);

        for (const sub of this.subscribers) {
            sub.update(this);
        }
    }
    
    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    SomeEventBySubject(subject: string) {
        this.subject = subject;
        console.log(`PUBLISHER: Raise event with subject '${subject}'`);
        this.notify();
    }
    
}

interface Subscriber {
    subject: string;
    identifier: string;
    // Receive update from publisher
    update(publisher: Publisher): void;
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteSubscriber implements Subscriber {
    identifier: string = '';
    subject: string = '';

    constructor(identifier: string = '', subject: string = '') {
        this.identifier = identifier;
        this.subject = subject;
    }

    update(publisher: Publisher): void {
        // console.log('updated', this);
        if(publisher instanceof ConcretePublisher && this.subject === publisher.subject) {
            console.log(`Subscriber '${this.identifier}': Reacted to the event with subject ${publisher.subject}`)
        }   
    }
}


/**
 * The client code
 */
const publisher = new ConcretePublisher();
const subscriber1 = new ConcreteSubscriber('Subscriber A', 'Wait');
const subscriber2 = new ConcreteSubscriber('Subscriber B', 'Wait');
const subscriber3 = new ConcreteSubscriber('Subscriber C', 'Stop');
console.log('');
publisher.attach(subscriber1);
publisher.attach(subscriber2);
publisher.attach(subscriber3);
publisher.attach(subscriber3);
console.log('');
publisher.SomeEventBySubject('Start');
console.log('');
publisher.SomeEventBySubject('Stop');
console.log('');
publisher.SomeEventBySubject('Wait');
console.log('');
