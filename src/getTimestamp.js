
// Create a new Date object with the given date
const date = new Date("05-16-2023 14:01:00");

// Get the timestamp in milliseconds
const timestamp = date.getTime();

// Convert the timestamp to seconds (if required)
const timestampInSeconds = Math.floor(timestamp / 1000);

console.log(timestampInSeconds);
