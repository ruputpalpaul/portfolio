
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('Resume - Manufacturing.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
