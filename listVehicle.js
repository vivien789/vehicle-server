import { Command } from 'commander';
const program = new Command();

program
    .option('-p, --port <number>', 'server port number', '8080')
    .option('-d, --debug', 'display some debugging')

program.parse();
const options = program.opts();
console.log(options);