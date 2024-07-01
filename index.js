// const fs = require('fs');

// const data = fs.readFileSync('hello.txt','utf-8',);
// // using data only give the buffer solution so thats why we have to append a string before the data that convert it into a readable format
// // or else we can use utf-8 to do so whic is use to store all into binary
// // console.log("" + data);
// console.log(data);



// // for making the directory in the file
// fs.mkdir('dir1',(err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("director formed");
//     }
// })



// // for deleting the directory in the file
// fs.rmdir('dir1',(err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("director removed");
//     }
// })



// // to rename
// fs.rename('file.txt','hello.txt',(err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully renamed")
//     }
// })



// this is to check the directory path and extension 
// const p = '/Users/siddharthbaleja/Desktop/code/node/hello.txt';
// const path = require("path");
// const dirname = path.dirname(p);
// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);


//to copy the file into a directory
// const path = require('path');
// const filepath = 'hello.txt';
// const dirpath = 'dir1';

// const newfilepath = path.join(dirpath,'update.txt');
// console.log(newfilepath);
// fs.writeFileSync(newfilepath,data,'utf-8',(err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully copy");
//     }
// })



// delete the file
// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log("File  deleted successfully.");
// });


//creating a basic server
// const http = require('http');
// const server = http.createServer((req,res)=> {
//     res.setHeader('Content-Type','text/html');
//     if(req.url === '/'){
//         res.write('<h1>Welcome to the Home Page</h1>');
//     } else if(req.url === '/login'){
//         res.write('<h1>Welcome to the Login Page</h1>');
//     }
//     // ending the response and sending
//     res.end()
// })
// const port = 3000;
// const host = 'localhost';
// // when you do scaler.com or something someone is listening to you so when we do server.listen they listen to the port
// server.listen(port,host,() => {
//     console.log(`Server is Listening on http://${host}:${port}`);
// })


// retrieve the html file and serve that
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/login') {
        const filePath = path.join(__dirname, 'login.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

const port = 3003;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is Listening on http://${host}:${port}`);
});
