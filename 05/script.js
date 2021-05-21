// A promise in JS is just like a promise in real life.
// It would be resolve or reject.

// Parameter witch is de function, resolve and reject parameter and also create the definition of the function 
// PROMISES
let p = new Promise ((resolve, reject) =>{
    // Definition
    let a = 1 + 1
    if ( a == 2){
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    // It's going to be call with the resolve.
    console.log('This is in the then ' + message)
}).catch((message)=>{
     // It's going to be call with the reject.
    console.log('This is in the catch ' + message);
})

// CALLBACK FUNCTION
const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback ('Thumbs up and Subscribe')
    }
} 

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + '' + error.message);
})

// PROMISES
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
} 

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + '' + error.message)
})

// PROMISES
// 3 simple promises, all of them just with resolve, never reject
const recordVideoOne = new Promise ((resolve, reject) =>{
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise ((resolve, reject) =>{
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise ((resolve, reject) =>{
    resolve('Video 3 Recorded')
})

// all = run every single promises, as soon as it's done, after that return the messages.
// Running at the same time
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})

// race = It return as soon as the first one was completed instead of waiting for the others, after thar return one single message. 
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})
