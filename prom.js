const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ans = "dharani";
    if (ans) {
      resolve(ans);
    } else {
      reject("something wrong");
    }
  }, 1000);
});
data
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log("error");
  })
  .finally(() => {
    console.log("tested");
  });
