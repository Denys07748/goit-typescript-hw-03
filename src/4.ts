class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
    protected key: Key;

    abstract OpenDoor(key: Key): void;

    comeIn(person: Person): void {
        if(this.door) {
            this.tenants.push(person);
        }
    }
}

class MyHouse extends House {
    constructor(private myKey: Key) {
        super();
        this.key = myKey;
    }

    openDoor(inputKey: Key): void {
        if (inputKey.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }

    OpenDoor(key: Key): void {
        this.openDoor(key);
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};