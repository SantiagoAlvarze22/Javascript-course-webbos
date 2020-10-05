import wait from 'waait';
import { name } from 'faker';
import { formatDistance, format } from 'date-fns';

// console.log(`hello ${name.firstName()}`);
const fakeNames = Array.from(
  { length: 10 },
  () => `${name.firstName()} ${name.lastName()}`
);

console.log(fakeNames);

async function go() {
  console.log('going');
  await wait(200);
  console.log('ending');
}

// go();

const diff = formatDistance(new Date(), new Date(2020, 3, 4, 10, 32, 0), {
  addSuffix: true,
}); //= > 'in about 1 hour
console.log(diff);

const date = new Date();

// Janurary the 12th 2020
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);
