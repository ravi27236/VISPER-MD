const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&a1dda106-7cf6-40b5-ac37-78c18759594d' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermd' : process.env.SESSION_NAME, 
,MONGODB: process.env.MONGODB === undefined ? 'mongodb+srv://qu6054:7XGfSRE66Yp7667k@cluster0.p7y66.mongodb.net' : process.env.MONGODB,
};

