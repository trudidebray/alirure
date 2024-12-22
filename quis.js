const data = 'Hello, world!'; // Replace with your actual data to hash

// Convert the string to an ArrayBuffer
const buffer = new TextEncoder().encode(data);

// Hash the data using SHA-256 algorithm
const hashedBuffer = await crypto.subtle.digest('SHA-256', buffer);

// Convert the ArrayBuffer to a hexadecimal string
const hashedArray = Array.from(new Uint8Array(hashedBuffer));
const hashedHex = hashedArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

console.log(hashedHex); // Output the hashed hexadecimal string
