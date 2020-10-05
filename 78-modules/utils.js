const last = 'hola';
const middle = 'slam dunk';
const first = 'first';

export function returnHi(name) {
  return `hi ${name}`;
}

// Named exports - we can have as many as we want
export { last, middle };
export default first;
