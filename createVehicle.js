import { Command } from 'commander';
const program = new Command();

program
  .option('-p, --port <number>', 'server port number', '8080')
  .requiredOption('--id <number>', 'vehicle id')
  .requiredOption('--sc, --shortcode <string>', 'vehicle code')
  .requiredOption('-b, --battery <number>', 'vehicle battery')
  .requiredOption('--pos, --position <number...>', 'specify for the vehicle longitude and latitude')
  
program.parse();
const options = program.opts();
console.log(`Created vehicle `+ `${options.shortcode}` + ` with ID `+ `${options.id}`);

//Test
//node createVehicle.js -p 8080 --id 12 --sc 'abc' -b 16 --pos -70.060316 49.432044