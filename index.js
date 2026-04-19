const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err);
});

bot.on("ready", () => {
  console.log("Custom status is now active!");
  
  bot.editStatus("online", {
    name: "Custom Status", 
    type: 4,
    state: ".gg/rollbet" 
  });
});

bot.connect();
