"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50, "next"]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
