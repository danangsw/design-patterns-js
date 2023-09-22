// https://refactoring.guru/design-patterns/iterator
/** 
 * Iterator Design Pattern
 * Intent: Lets you traverse elements of a collection without exposing its
 * underlying representation (list, stack, tree, etc.)
*/

import { transferableAbortSignal } from "util";

interface Iterator<T> {
    // Return the current element
    current(): T;
    // Return the current element and move forward to next element
    next(): T;
    // Return the key of the current element
    key(): number;
    // Checks if the current position is valid
    valid(): boolean;
    // Rewind the iterator to the first element.
    rewind(): void;
}

interface Aggregator{
    // Retrive an external iterator
    getIterator(): Iterator<string>;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */
class StringOrderIterator implements Iterator<string> {
    private collection: StringCollection;
    /**
     * Stores the current traversal position.
     */
    private position: number = 0

    /**
     * Define variable to indicate the traversal direction
     */
    private reserve: boolean = false;

    constructor(collection: StringCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reserve = reverse;

        if(this.reserve) {
            this.position = this.collection.getCount() - 1;
        }
    }

    next(): string {
        const item: string = this.collection.getItems()[this.position];

        this.position += this.reserve ? -1 : 1;

        return item;
    }

    current(): string {
        return this.collection.getItems()[this.position];
    }

    key(): number {
        return this.position;
    }

    valid(): boolean {
        if(this.reserve) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }

    rewind(): void {
        this.position = this.reserve ?
            this.collection.getCount() -1 : 0;
    }
}

/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */
class StringCollection implements Aggregator {
    private items: string[] = [];

    getItems(): string[] {
        return this.items;
    }

    getCount(): number {
        return this.items.length;
    }

    addItem(item: string): void {
        this.items.push(item);
    }

    getIterator(): Iterator<string> {
        return new StringOrderIterator(this);
    }

    getReserveIterator(): Iterator<string> {
        return new StringOrderIterator(this, true);
    }
} 

/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
const collections = new StringCollection();
collections.addItem('1-apple');
collections.addItem('3-manggo');
collections.addItem('4-strawberry');
collections.addItem('2-grape');

const iteratorColl = collections.getIterator();
const reserverIteratorColl = collections.getReserveIterator();

console.log("Straight traversal.", iteratorColl);
//while (iteratorColl.valid()) {
    console.log(iteratorColl.current(), iteratorColl.next());
//}
console.log("");
console.log("Reverse traversal.", reserverIteratorColl);
//while (reserverIteratorColl.valid()) {
    console.log(reserverIteratorColl.current(), reserverIteratorColl.next());
//}
