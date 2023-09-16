// const repo = ['mobile','mouse','Moneypot','monitor','mousepag','testmo'];

// suggestions = (repository, query) => {
//     const suggestions = [];
//     let subset = [];
//     const lowerCaseQuery = query.toLowerCase();

//     const lowerCaseRepo = repository.map((suggestion) => suggestion.toLowerCase())
//     lowerCaseRepo.sort()
//     if (lowerCaseQuery.length > 1 && repository.length) {
//         for (let i = 2; i <= lowerCaseQuery.length; i++) {
//             subset = lowerCaseRepo.filter((suggestion) => suggestion.match("^" + lowerCaseQuery.slice(0,i)));
//             if (subset.length) {
//                 suggestions.push(subset.slice(0,3));
//             }
//         }
//     }
//     return suggestions;
// }
// const results = suggestions(repo,'Moust');
// console.log(results);
// console.log('wait')
const fs = require('fs');

function readFile() {
    const file = "c:/test.txt";

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
    
        // Print the contents of the file to the console
        console.log('File contents:', data);
    });
}

readFile();