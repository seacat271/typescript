"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50, "next"]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
