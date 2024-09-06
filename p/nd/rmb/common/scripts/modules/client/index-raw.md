exec(c, (error, stdout, stderr) => {
  if (error) {
    _clh.f(`exec error: ${error}`);
    return;
  }
  _clh.s(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
