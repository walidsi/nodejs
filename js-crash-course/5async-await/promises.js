// Promises, .then(), .catch,  and Async / Await
//
//

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost2(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            err = false;

            if (!err) {
                resolve();
            }
            else {
                reject('Error: Something went wrong.')
            }
        }, 2000);
    })
}

createPost2({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch((err) => console.log(err))


async function init() {
    await createPost2({ title: 'Post Four', body: 'This is post four' });
    getPosts();
}

init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();
