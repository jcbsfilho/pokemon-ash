const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const { catchPokemons } = require('./pokemon-ash')



const rl = readline.createInterface({ input, output, terminal: false });

/**
 * The listener function is called with a string containing the single line of received input
 */
rl.on('line', (input) => {

    /**
    *  if test memory, time performance
    */
    if (process.env.TEST_PERFORMANCE) {
        console.time('time_execute')
        const result = catchPokemons(input);
        console.timeEnd('time_execute')
        console.log(`${result}`);
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`The apllication uses approximately ${Math.round(used * 100) / 100} MB of heap memory Used`);
    } else {
        const result = catchPokemons(input);
        console.log(result);
    }

    rl.close();
});

