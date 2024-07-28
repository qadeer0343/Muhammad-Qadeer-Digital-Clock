let secondz = 1;
let minutez = 1;
let hourz = 1;

const seconds = new Promise((res, rej) => {
  res(secondz);
});
const minutes = new Promise((res, rej) => {
  res(minutez);
});

let main = async () => {
  try {
    await seconds.then((sec) => {
      for (let i = 0; i < 60; i++) {
        setTimeout(() => {
          console.log("00", "00", sec);
          sec++;
        }, i * 1000);
      }
    });

    await minutes.then((mins) => {
      setTimeout(() => {
        console.log(mins);
      }, 60000);
    });
  } catch (error) {
    console.log(error);
  }
};
main();
