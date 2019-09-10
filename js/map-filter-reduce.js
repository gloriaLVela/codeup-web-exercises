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

const user_multi_lingual = users.filter(user => user.languages.length >= 3);

// console.log(user_multi_lingual);

/**
 3. Use .map to create an array of strings where each element is a user's email address
 **/

const email_list = users.map(user => user.email);

// console.log(email_list);


/**
 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
 **/

let average = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0) / users.length;


// console.log(average);

/**
 5. Use .reduce to get the longest email from the list of users.

 **/


let longest_email = users.reduce((currentEmail, user) => {
    return (currentEmail.length > user.email.length) ? currentEmail : user.email;
});

console.log(longest_email);

/**
 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */

let instructors_list = users.reduce((currentList, user, i) => {
    if (i < users.length -1) {
        currentList += user.name + ', ';
    } else {
        currentList += user.name;
    }
    return currentList;
    // return currentList + user.name + ',';
}, "The instructors are: ");

//instructors_list = instructors_list.substr(0, instructors_list.length - 1);

console.log(instructors_list);

// Solution 1

let language_list = users.reduce((languageList, user) => {
    return languageList += user.languages + ",";
}, "").split(',').filter((value, index, self) => {
    // console.log(value);
    // console.log(index);
    // console.log(self);
    return self.indexOf(value) === index && value.length > 0;
});

console.log(language_list);

// Solution 2
let currentLanguageList = users.map(user => user.languages).reduce((currentList, currentLanguage) => currentList.concat(currentLanguage), []).filter(function (value, index, self) {
    return self.indexOf(value) === index;
});


console.log(currentLanguageList);

// John's solution

// Bonus: Use .reduce to get the unique list of languages from the list of users.

const uniqueListOfLangs = users.reduce((listOfLangs, user) => {
    for (const lang of user.languages) {
        if (listOfLangs.indexOf(lang) === -1) {
            listOfLangs.push(lang);
        }
    }

    return listOfLangs;
}, []);

console.log(uniqueListOfLangs);

