function delayFn(time = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success 1");
    }, time);
  });
}

async function delayFnAsync() {
   await delayFn();
   console.log('Success 2');
}

delayFnAsync()

function devideFn(a, b) {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject("Division by zero");
      } else {
        resolve(a / b);
      }
    });
  }

async function devideFnAsync() {
    try {
        const result = await devideFn(10, 1);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

devideFnAsync()