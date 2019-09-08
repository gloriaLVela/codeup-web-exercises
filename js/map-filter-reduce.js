/**
 *
 *
 *
 * 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
 * **/
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
/**
 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
 **/

const user_multi_lingual= users.filter(function (user){
    return user.languages.length >= 3;
});

console.log(user_multi_lingual);

/**
 3. Use .map to create an array of strings where each element is a user's email address
 **/

const email_list = users.map(function(user) {
    return user.email;
});

console.log(email_list);


/**
 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
 **/

let totalYearsExperience = users.reduce((total, user) =>{
    return total + user.yearsOfExperience;
}, 0);

console.log(totalYearsExperience);

let average = totalYearsExperience/ users.length;

console.log(average);

/**
 5. Use .reduce to get the longest email from the list of users.

 **/


let largest_email = users.reduce((currentEmail, user) =>{
    return (currentEmail.length > user.email.length)?currentEmail:user.email;
});

console.log(largest_email);

/**
 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */

let instructors_list = users.reduce((currentList, user) =>{
    return currentList + user.email + ',';
}, "");

instructors_list = instructors_list.substr(0, instructors_list.length - 1);
console.log(instructors_list);