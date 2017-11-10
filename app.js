
const Adapter = require('./adapters/adapter');
const config = require('./config.json');

const filesystem = new Adapter(config);

filesystem.writeFile("helloword.txt", "hello word!", function (erro) {
    if (erro) {
        throw erro;
    }else{
        console.log("sucess!");
    }
});
