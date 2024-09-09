// https://nodejs.org/api/child_process.html
Asynchronous Process Creation
  Spawning .bat and .cmd files on Windows
  child_process.exec(command[, options][, callback])
  child_process.execFile(file[, args][, options][, callback])
  child_process.fork(modulePath[, args][, options])
  child_process.spawn(command[, args][, options])
    options.detached
    options.stdio

Synchronous Process Creation
  child_process.execFileSync(file[, args][, options])
  child_process.execSync(command[, options])
  child_process.spawnSync(command[, args][, options])

Class: ChildProcess
  Event: 'close'
  Event: 'disconnect'
  Event: 'error'
  Event: 'exit'
  Event: 'message'
  subprocess.channel
  subprocess.connected
  subprocess.disconnect()
  subprocess.kill([signal])
  subprocess.killed
  subprocess.pid
  subprocess.ref()
  subprocess.send(message[, sendHandle[, options]][, callback])
    Example: sending a server object
    Example: sending a socket object
  subprocess.stderr
  subprocess.stdin
  subprocess.stdio
  subprocess.stdout
  subprocess.unref()
maxBuffer and Unicode
Shell Requirements
Default Windows Shell