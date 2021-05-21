function  makeRequest(location) {
    return new Promise ((resolve, reject) =>{
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve('Google says ¡Hi!')
        } else {
            reject('We can only talk with google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra information + ${response}`)
    })
}

// makeRequest('Facebook').then(response =>{
//     console.log('Response Recived')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch(err => {
//     console.log(err)
// })

// ASYNC & AWAIT
// async = asynchronous code
// We need to have some kind of function that we're awaiting code inside of.
// Inside of this function is where we're going to pull of our async code, also we have to tell to JS that this function is async, and it'll know how to handle the sentences that we put inside of it.
// Inside of here, we need to call our different methods.
// await = this keyword says the code should wait until this make request is finished and then aftereards it'll execute the next thing, and this function make request is just going to return the resolve section of the promise
// There in the section response is equal to awaiting this make request funtion.
// because we have this inside of an async funtion, once JS hits this await statement, it'll just leave this function do other work inside of the program and then as soon as this make request finishes executing it'll come back into here return the result into this response variable.
// And just add it back, so the response was received as soon as we get to this section it means that this has finished executing, then we can call an statement witch is going to be processed request, and we'll put in that response variable that we have from above and again, we do the exact thing 
async function doWork () {
    try{
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err) { 
        console.log(err)
    }
}
// async function = promise fuction
// When we use async await is that we must wrap our code inside of the function whether it's an anonymous function and arrow fucntion or normal function, well it doesn't matter but we have it wrapped function with that async keyword at the beggining of the funcion definition.
//  Also we have to make sure that we're using the await keyword before of all our different code thats going to be async code otherwise it'll just return the promise and not actually return the result of that promise being executed.
// Other than tat async await is just like promises and pretty much every other way, all it does is make it easier for we to write promises and work with it (promises) in our code.
doWork()

