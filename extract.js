import fs from 'fs';
import pdfParse from 'pdf-parse';

let dataBuffer = fs.readFileSync('Abhijeet__Cv_.pdf');

pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
