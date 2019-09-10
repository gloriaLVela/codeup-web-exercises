// function wait(waitTime) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, waitTime);
//     });
// }
//
//
// wait(1000).then(() => console.log(`You'll see this after 1 second`));
// wait(3000).then(() => console.log(`You'll see this after 3 seconds`));

// const wait = waitTime => {
//     return new Promise(resolve => setTimeout(resolve, waitTime));
// }
//
// wait(1000).then(() => console.log(`You'll see this after 1 second`));
// wait(3000).then(() => console.log(`You'll see this after 3 seconds`));

// const myPromise = fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/1').then(response => response.json());
// myPromise.then(data => console.log(data));
// myPromise.catch(error => console.error(error));


//
// fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(() => console.log('Error'));


// function gitUserEvents(username){
//     fetch('https://api.github.com/users/'+ username +'/events/public', {
//         method: 'GET',
//         headers: {'Authorization': githubApiKey}
//     })

function getProfile(userID){
    // fetch(`https://github.com/${userID}`, {headers: {'Authorization': githubToken}}).then(res => res.json)
    // /users/:username/events
    //https://cors-anywhere.herokuapp.com/https://github.com/users/${userID}/events`

    fetch('https://api.github.com/users/' + userID + '/events/public',{headers: {'Authorization': githubKey}})
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            // build html
            console.log(data);
       })
        .catch(console.log);


};

getProfile('gloriaLVela');