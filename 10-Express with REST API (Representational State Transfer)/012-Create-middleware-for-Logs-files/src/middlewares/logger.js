import fs from 'fs';

const fsPromise = fs.promises;

async function log(logData) {
    try {
        logData = `\n ${new Date().toString()} - ${logData}`;
        await fsPromise.appendFile('log.txt', logData);
    } catch(err) {
        console.log(err);
    }
}

const logger = async (req, res, next) => { 
    //check if url not includes "users" text then log data. because we do not want to log email and password.
    if(!req.url.includes("users")){
        const logData = `${req.url} - ${JSON.stringify(req.body)}`;
        await log(logData);
    }
    next();
};

export default logger;