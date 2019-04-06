const cluster = require('cluster')
const numberOfCPU = require('os').cpus().length;

if(cluster.isMaster) {
    for(let i = 0; i < numberOfCPU; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
    })
    
}else{
    require('./app')
}