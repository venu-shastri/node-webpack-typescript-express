
const { exec } = require("child_process");


class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log('Hello World!');
      exec("npm run start:app", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    });

  }
}

module.exports = HelloWorldPlugin;