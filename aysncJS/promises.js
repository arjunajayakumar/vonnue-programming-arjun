const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the user');
        resolve({user: 'guil'})
    },2000)
});

promise.then(user => {
    console.log(user)
})