// Promises and Async / Await
//
//

function square1(x, callback = null) {
    return new Promise((resolve) => {
        setTimeout(() => {
            sq = Math.pow(x, 2)
            resolve(sq);
            if (callback) {
                callback(sq);
            };
        }, 2000);
    });
}

function output1(x) {
    const ans = square1(x, (result) => {
        console.log(result)
    });
    console.log(ans); // this will be Promise { <pending> }
}

async function output11(x) {
    const ans = await square1(x);
    console.log(ans);
}

output1(10); // squared value from callback
output11(11); // squared value from async, resolve and await

function square2(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.pow(x, 2));
        }, 4000);
    });
}

async function output2(x) {
    const ans = await square2(x);
    console.log(ans);
}

output2(100);
