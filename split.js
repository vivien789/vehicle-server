import { Command } from 'commander';
const program = new Command();


program
  .requiredOption('--id <number>', 'vehicle id')
  .requiredOption('--sc, --shortcode <string>', 'vehicle code')
  .requiredOption('-b, --battery <number>', 'vehicle battery')
  .requiredOption('-p, --position <number...>', 'specify for the vehicle longitude and latitude')
  
program.parse();
const options = program.opts();
console.log(options);

//Test
//node split.js --id 12 --sc 'abc' -b 16 -p -70.060316 49.432044