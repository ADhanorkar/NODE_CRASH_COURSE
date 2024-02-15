const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call Event
    this.emit("logMessage", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
