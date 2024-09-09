const spawn = require('child_process').spawn;

const args = [
        "-", // use stdin
        "-resize", "640x", // resize width to 640
        "-resize", "x360<", // resize height if it's smaller than 360
        "-gravity", "center", // sets the offset to the center
        "-crop", "640x360+0+0", // crop
        "-" // output to stdout
    ];


// const bat = spawn('node', args)
const bat = spawn('node', ['server/config/express-server.js'])
  bat.stdout.on('data', (data) => {
    console.log(data.toString());         });
  bat.stderr.on('data', (data) => {
    console.log(data.toString());         });
  bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);          });