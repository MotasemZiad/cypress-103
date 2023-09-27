const foo = { name: "Tom", age: 30, nervous: false };
const baz = { name: "Sam", age: 40, nervous: false };
const bar = { name: "Bam", age: 50, nervous: true };

// Old way
console.log(foo);

// New way
console.log({ foo, baz, bar });

// Console.table
console.table([foo, baz, bar]);

console.log("This is just a log");
console.error("This is some error");
console.warn("This is a warning");
console.info("This is some info");
console.debug("This is some debug");
console.assert(1 === 2, "That is %s wrong", "damn");
console.time("fetching data");
fetch("https://api.github.com/users/wesbos");
console.timeEnd("fetching data");
