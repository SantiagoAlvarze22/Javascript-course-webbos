import wait from 'waait';
import { name } from 'faker';
import { formatDistance } from 'date-fns';

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
