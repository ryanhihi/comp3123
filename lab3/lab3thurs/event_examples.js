const fs = require('fs');

console.log('** Start reading a file...');
// Read file synchronously
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
console.log('** End of the file');

function readFileAsync() {
    console.log('** Start reading a file asynchronously...');
    // Read file asynchronously
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
    console.log('** End of the asynchronous file read');
}

// Uncomment this to test the async read function
// readFileAsync();

console.log('** Start writing a file...');
// Write file synchronously
const dataToWrite = 'Hello, Node.js';
fs.writeFileSync('output.txt', dataToWrite, 'utf8');
console.log('** End of the file write');

function writeFileAsync() {
    console.log('** Start writing a file asynchronously...');
    // Write file asynchronously
    fs.writeFile('output.txt', dataToWrite, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Write operation complete.');
    });
    console.log('** End of the asynchronous file write');
}

// Uncomment this to test the async write function
// writeFileAsync();

// Uncomment this to test file deletion
// fs.unlink('output.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File deleted successfully');
// });

// Rename file and move to another directory
fs.rename('output.txt', './data/new_output.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File renamed successfully');
});
