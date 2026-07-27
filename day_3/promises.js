const myPromise = new Promise((resolve, reject) => {
    let age = 16;
    if (age >= 18) {
        resolve("Eligible for vote...");
    } else {
        reject("Not eligible for vote...");
    }
})

const resolvePromise = async () => {
    try {
        const msg = await myPromise;
        console.log(msg);
    } catch (error) {
        console.log(error);
    }
}
resolvePromise();

// console.log(myPromise);

// myPromise
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err));
