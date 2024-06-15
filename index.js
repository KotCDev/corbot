const Discord = require("discord.js");
const config = require("./config.json");
const { error } = require("console");

const Client = new Discord.Client({ partials: ["CHANNEL"], intents: 98303 });

process.on("exit", code => { console.log("Le processus c'est arrêté avec le code : " + code) });
process.on("uncaughtException", (error, origin) => { console.log("UNCAUGHT_EXCEPTION:" + error, "Origine : " + origin ) });
process.on("unhandledRejection", (reason, promise) => {console.log("Unhgandled Rejection : " + reason, "Promise : " + promise) });
process.on("warning", (...args) => console.log(...args));

Client.login(config.token)