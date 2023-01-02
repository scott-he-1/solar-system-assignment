export function minBy(array, cb) {
  let lowest = array[0];
  for (const person of array) {
    if (cb(person) < cb(lowest)) {
      lowest = person;
    }
  }
  return lowest;
}

export function maxBy(array, cb) {
  let highest = array[0];
  for (const person of array) {
    if (cb(person) > cb(highest)) {
      highest = person;
    }
  }
  return highest;
}
