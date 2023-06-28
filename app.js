"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
class Person {
    constructor(key) {
        this.key = {};
        this.key = new Key();
    }
    getKey() {
        return this.key;
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class House {
    constructor(key) {
        this.door = "closed";
        this.key = {};
        this.tenants = [];
        this.key = new Key();
    }
    comeIn(person) {
        if (this.door === "open") {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    openDoor(key) { }
}
