
function say(something) {
    console.log(something);
}

function exec(func, arg) {
    func(arg);
}

exec(say, 'Hi, There');

function exec(func, arg) {
    func(arg);
}

exec(something => {
    console.log(something);
}, 'Greetings, everyone!')

// ------------------------------------------

console.log('Start');

function logUser(email, pasword, callback) {
    setTimeout(() => {
        callback({ userEmail: email });
        callback()
    }, 1500);
    callback()
}

function print() {
    console.log('Hello')
}
const user = logUser('test@test.com', 12345, print);

console.log(user);
console.log('Finish');


setTimeout(() => {

}, 1500)

// ------------------------------------------------------


const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'This is post one' }
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;

    }, 1000)
    console.log(posts);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
