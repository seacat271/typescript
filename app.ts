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
  key = {};
  constructor(key: Key) {
    this.key = new Key();
  }
  getKey() {
    return this.key;
  }
}

class Key {
  signature = Math.random();
  getSignature() {
    return this.signature;
  }
}

abstract class House {
  door: "open" | "closed" = "closed";
  key = {};
  tenants: Person[] = [];
  constructor(key: Key) {
    this.key = new Key();
  }
  comeIn(person: Person) {
    if (this.door === "open") {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key);
}

class MyHouse extends House {
  openDoor(key) {}
}
