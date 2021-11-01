const storage = require('node-persist');

const storageExample = async () => {
    await storage.init();
    const lastLast = Number(await storage.getItem('lastLast')) || 0;
    const last = Number(await storage.getItem('last')) || 1;
    const newVal = last + lastLast;
    console.log(newVal, '=', last, '+', lastLast);
    await storage.setItem('last', newVal);
    await storage.setItem('lastLast', last);
}

module.exports = storageExample;