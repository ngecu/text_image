const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
require('dotenv').config({path: __dirname + '/.env'})



const {
    API_KEY,
    AUTH_DOMAIN,
    // DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
} = process.env;


const firebaseConfig = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        // databaseURL: DATABASE_URL,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }

const db = initializeApp(firebaseConfig);

module.exports = getStorage(db);