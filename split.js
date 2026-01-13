import { Command } from 'commander';
const program = new Command();


program
  .option('--id <number>', 'vehicle id')
  .option('--sc, --shortcode <string>', 'vehicle code')
  .option('-b, --battery <number>', 'vehicle battery')
  .option('-p, --position <Position>', 'vehicle position (lng, lat)')
  

const options = program.opts();
console.log(options);

//Test
//node split.js --id 12 --sc 'abc' -b 16 -p {latitude: -70.060316, longitude: 49.432044}