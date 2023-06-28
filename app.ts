const button = document.querySelector("button")! as HTMLInputElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

abstract class House {
  protected door: boolean = false;

  private tenants: Person[] = [];
  constructor(protected key: Key) {}
  comeIn(person: Person) {
    if (!this.door) {
      throw new Error("Door is close");
    }
    this.tenants.push(person);
    console.log("Person inside");
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = true);
  }
}
