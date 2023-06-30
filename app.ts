function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50, "next"]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
