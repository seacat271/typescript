const button = document.querySelector("button")! as HTMLInputElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

abstract class House {
  door: "open" | "closed" = "closed";
  key: Key = {};
  tenants: [] = [];
  constructor(Key) {
    this.key = new Key();
  }
  comeIn() {
    if (this.door === "open") {
    }
  }
}
