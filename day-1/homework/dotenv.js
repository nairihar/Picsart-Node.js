const fs = require('fs');

const config = (path = './.env') => {
    const ret = {
        parsed: {},
        error: {},
    };

    try {

        const fd = fs.openSync(path, 'r');
        const bufferSize = 256;
        const buffer = Buffer.alloc(bufferSize);

        let leftOver = '';
        let read, line, indexStart, index, lineNumber = 1;

        while ((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
          
            indexStart = 0;
            leftOver += buffer.toString('utf8', 0, read);
            while ((index = leftOver.indexOf('\n', indexStart)) !== -1) {
                line = leftOver.substring(indexStart, index, lineNumber);
                _processLine(line, ret.parsed, lineNumber);
                indexStart = index + 1;
                lineNumber++;
            }
            leftOver = leftOver.substring(indexStart);
        }
        _processLine(leftOver, ret.parsed, lineNumber);

        delete ret.error;
    } catch (err) {
        ret.error = err;
        delete ret.parsed;
    }
    return ret;
};

const configAsync = (path = './.env') => {
    return new Promise((res, rej) => {
        const readline = require('readline');
        const ret = {};
        let lineNumber = 1;
        try {
            const readInterface = readline.createInterface({
                input: fs.createReadStream(path),
                console: false
            });

            readInterface.on('line', function (line) {
                _processLine(line, ret, lineNumber);
                lineNumber++;
            }).on('close', () => {
                res(ret);
            });
        } catch(err){
            rej(err);
        }
    });
};

const _processLine = (line, parsed, lineNumber) => {

    if (!line || line.startsWith('#')) {
        return;
    }

    if (!line.includes('=')) {
        console.log('\x1b[31m', `Invalid Format on line ${lineNumber}: The correct format is KEY=VALUE`, '\x1b[0m');
        return;
    }

    line = line.replace(/\r?\n|\r/g, '').trim();
    const [key, value] = line.split('=');

    if (!key) {
        return;
    }

    if (process.env[key] !== undefined) {
        console.log('\x1b[33m', `Warning: Overriding the variable '${key}' \x1b[0m`);
    }

    process.env[key] = value || '';
    parsed[key] = value || '';

};

module.exports = {
    config,
    configAsync,
};