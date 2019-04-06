//Import Packages
const pino = require('pino')
const childProcess = require('child_process')
const stream = require('stream')
const path = require('path')

// Environment variables
const cwd = process.cwd();
const {env} = process;
const logPath = path.join(__dirname,'..', 'logs')

// Create a stream where the logs will be written
const logThrough = new stream.PassThrough();
const log = pino({name: 'arkad'}, logThrough);

const child = childProcess.spawn(process.execPath, [
    require.resolve('pino-tee'),
    'warn', `${logPath}/warn.log`,
    'error', `${logPath}/error.log`,
    'fatal', `${logPath}/fatal.log`
], {cwd, env});
  
logThrough.pipe(child.stdin);


module.exports = log;