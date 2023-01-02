import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let object = {};
  data.asteroids.forEach(asteroid => object[`${asteroid.discoveryYear}`] = (object[`${asteroid.discoveryYear}`] + 1) || 1);
  return Object.keys(object).reduce((a, b) => object[a] > object[b] ? Number(a) : Number(b));
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
