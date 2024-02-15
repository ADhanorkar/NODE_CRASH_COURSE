// const EventEmitter = require("events");
const Emitter = require("events");

// class MyEmitter extends EventEmitter {}
class MyEmitter extends Emitter {}

const myEmitter = new MyEmitter();

myEmitter.on("customEvent", () => console.log("Custom Event Fired !!!"));

myEmitter.emit("customEvent");
myEmitter.emit("customEvent");
myEmitter.emit("customEvent");
myEmitter.emit("customEvent");
