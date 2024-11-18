function delayFn(time = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, time);
  });
}

delayFn().then((data) => {
    console.log(data);
})

function devideFn(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Division by zero");
    } else {
      resolve(a / b);
    }
  });
}

devideFn(10, 0)
    .then((data) => {
    console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })