const fs = require('fs');
let counter = 0;
const start = process.hrtime();
setTimeout(() => {
    const end = process.hrtime(start);
    console.log(`timeout callback executed after ${end[0]}s and ${end[1]/Math.pow(10,9)}ms`);
    console.log(++counter)
}, 1000);
process.nextTick(() => { console.log('timeout => this is process.nextTick 1');
    console.log(++counter) });
setTimeout(() => {
    console.log('timeout')
    process.nextTick(() => { console.log('timeout => this is process.nextTick 2'); console.log(++counter) });
}, 0);
setImmediate(() => {
    console.log('immediate')
    process.nextTick(() => { console.log('immediate => this is process.nextTick 3'); console.log(++counter) });
})
fs.readFile('./1.js', () => {
    setTimeout(() => {
        console.log('timeout')
        process.nextTick(() => { console.log('timeout => this is process.nextTick 4');
            console.log(++counter) });
    }, 0);
    setImmediate(() => {
        console.log('immediate')
        process.nextTick(() => { console.log('immediate => this is process.nextTick 5');
            console.log(++counter) });
    })
});
setTimeout(() => {
    console.log('timeout')
    process.nextTick(() => { console.log('timeout => this is process.nextTick 6');
        console.log(++counter); });
}, 0);
setImmediate(() => {
    console.log('immediate')
    process.nextTick(() => { console.log('immediate => this is process.nextTick 7');
        console.log(++counter); });
})
process.nextTick(() => { console.log('timeout => this is process.nextTick 8');
    console.log(++counter); });


// produces
timeout => this is process.nextTick 1
1
timeout => this is process.nextTick 8
2
timeout
timeout => this is process.nextTick 2
3
timeout
timeout => this is process.nextTick 6
4
immediate
immediate => this is process.nextTick 3
5
immediate
immediate => this is process.nextTick 7
6
immediate
immediate => this is process.nextTick 5
7
timeout
timeout => this is process.nextTick 4
8
timeout callback executed after 1s and 0.010835508ms
9
